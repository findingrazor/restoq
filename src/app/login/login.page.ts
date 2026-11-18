import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { bag, mail } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonRadioGroup,
  IonRadio,
  IonNote,
} from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../service/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonIcon,
    IonInput,
    IonItem,
    IonList,
    IonRadioGroup,
    IonRadio,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    IonNote,
    CommonModule,
  ],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router,
  ) {
    addIcons({ bag, mail });
  }

  get email() {
    return this.credentials.get('email');
  }
  get password() {
    return this.credentials.get('password');
  }
  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  async register() {
    const loading = await this.loadingController.create();
    await loading.present();
    const user = await this.authService.register(this.credentials.value);
    await loading.dismiss();
    if (user) {
      this.router.navigateByUrl('/home', { replaceUrl: true });
    } else {
      this.showAlert('Falha no registro', 'Tente novamente!');
    }
  }

  async login(): Promise<void> {
    if (this.credentials.invalid) {
      this.credentials.markAllAsTouched();
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Realizando login...',
    });

    await loading.present();

    try {
      const user = await this.authService.login(this.credentials.getRawValue());

      if (user) {
        await this.router.navigateByUrl('/home', {
          replaceUrl: true,
        });
      } else {
        await this.showAlert('Falha na entrada', 'Email ou senha incorretos.');
      }
    } catch (error: any) {
      console.error('Erro no login:', error);

      let mensagem = 'Não foi possível realizar o login. Tente novamente.';

      switch (error?.code) {
        case 'auth/invalid-credential':
          mensagem = 'Email ou senha incorretos.';
          break;

        case 'auth/invalid-email':
          mensagem = 'O email informado é inválido.';
          break;

        case 'auth/user-disabled':
          mensagem = 'Esta conta está desativada.';
          break;

        case 'auth/too-many-requests':
          mensagem = 'Muitas tentativas. Tente novamente mais tarde.';
          break;

        case 'auth/network-request-failed':
          mensagem = 'Verifique sua conexão com a internet.';
          break;
      }

      await this.showAlert('Erro na autenticação', mensagem);
    } finally {
      await loading.dismiss();
    }
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}

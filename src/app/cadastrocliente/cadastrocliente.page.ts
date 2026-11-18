import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButton,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowForward, arrowBack, pencilOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { ClienteService } from '../service/cliente';
import { ICliente, createICliente } from '../../models/cliente';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrocliente',
  templateUrl: './cadastrocliente.page.html',
  styleUrls: ['./cadastrocliente.page.scss'],
  imports: [
    IonButtons,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButton,
    IonIcon,
    IonInput,
    IonItem,
    IonList,
    RouterLink,
    FormsModule,
  ],
})
export class CadastroclientePage implements OnInit {
  public cliente: ICliente = createICliente();
  constructor(
    private clienteServ: ClienteService,
    private navCtrl: NavController,
  ) {
    addIcons({ arrowForward, arrowBack, pencilOutline });
  }

  ngOnInit(): void {}
  public async salvar() {
    if (this.cliente.nome && this.cliente.cpf && this.cliente.telefone) {
      try {
        console.log('Salvar', this.cliente);
        await this.clienteServ.add(this.cliente);
        this.navCtrl.navigateRoot('/home');
      } catch (error) {
        console.error('Erro ao salvar cliente:', error);
      }
    } else {
      console.log('Não é possível salvar um cliente vazio');
    }
  }
}

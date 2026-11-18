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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alteracliente',
  templateUrl: './alteracliente.page.html',
  styleUrls: ['./alteracliente.page.scss'],
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
export class AlteraclientePage implements OnInit {
  public cliente: ICliente = createICliente();
  constructor(
    private rotaAtiva: ActivatedRoute,
    private navCtrl: NavController,
    private clienteServ: ClienteService,
  ) {
    addIcons({ arrowForward, arrowBack, pencilOutline });
  }

  ngOnInit(): void {
    const id: string = this.rotaAtiva.snapshot.paramMap.get('id') || '';
    console.log(id);

    this.clienteServ.get(id).subscribe((cliente) => {
      this.cliente = cliente;
      console.log('Cliente atualizada', this.cliente);
    });
  }
  public async atualizar() {
    if (this.cliente.nome && this.cliente.cpf && this.cliente.telefone) {
      try {
        console.log('Salvar', this.cliente);
        await this.clienteServ.update(this.cliente);
        console.log('Cliente atualizada com sucesso!');
        this.navCtrl.navigateRoot('/home');
      } catch (error) {
        console.error('Erro ao atualizar cliente:', error);
      }
    } else {
      console.log('Não é possível salvar um cliente vazio');
    }
  }
}

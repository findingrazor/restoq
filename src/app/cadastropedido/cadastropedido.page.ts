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
  IonCard,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowForward, arrowBack, pencilOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastropedido',
  templateUrl: './cadastropedido.page.html',
  styleUrls: ['./cadastropedido.page.scss'],
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
    IonCard,
    RouterLink,
  ],
})
export class CadastropedidoPage implements OnInit {
  constructor() {
    addIcons({ arrowForward, arrowBack, pencilOutline });
  }

  ngOnInit() {}
}

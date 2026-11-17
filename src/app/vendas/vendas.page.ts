import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonInput,
  IonCard,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  checkmarkCircle,
  receipt,
  arrowDown,
  search,
  filter,
  arrowBack,
  alertCircle
} from 'ionicons/icons';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.page.html',
  styleUrls: ['./vendas.page.scss'],
  imports: [
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonInput,
    IonCard,
  ],
})
export class VendasPage implements OnInit {
  constructor() {
    addIcons({
      checkmarkCircle,
      receipt,
      arrowDown,
      search,
      filter,
      arrowBack,
      alertCircle
    });
  }

  ngOnInit() {}
}

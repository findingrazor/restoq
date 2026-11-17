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
  ],
})
export class AlteraclientePage implements OnInit {
  constructor() {
    addIcons({ arrowForward, arrowBack, pencilOutline });
  }

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
} from '@ionic/angular';

@Component({
  selector: 'app-cadastrouser',
  templateUrl: './cadastrouser.page.html',
  styleUrls: ['./cadastrouser.page.scss'],
  imports: [
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonIcon,
    IonInput,
    IonItem,
    IonList,
  ],
})
export class CadastrouserPage implements OnInit {
  constructor() {
    addIcons({ close });
  }

  ngOnInit() {}
}

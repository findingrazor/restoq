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
import {
  arrowForward,
  arrowBack,
  pencilOutline,
  addCircle,
} from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastroproduto',
  templateUrl: './cadastroproduto.page.html',
  styleUrls: ['./cadastroproduto.page.scss'],
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
  ],
})
export class CadastroprodutoPage implements OnInit {
  constructor() {
    addIcons({ arrowForward, arrowBack, pencilOutline, addCircle });
  }

  ngOnInit() {}
}

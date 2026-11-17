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
import { arrowForward, arrowBack, pencilOutline, addCircle } from 'ionicons/icons';

@Component({
  selector: 'app-alteraproduto',
  templateUrl: './alteraproduto.page.html',
  styleUrls: ['./alteraproduto.page.scss'],
  imports: [IonButtons,
      IonContent,
      IonHeader,
      IonToolbar,
      IonButton,
      IonIcon,
      IonInput,
      IonItem,
      IonList,
    ]
})
export class AlteraprodutoPage implements OnInit {

  constructor() {
    addIcons({ arrowForward, arrowBack, pencilOutline, addCircle });
   }

  ngOnInit() {
  }

}

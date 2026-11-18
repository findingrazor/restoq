import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, RouterLink],
})
export class LogoutPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}

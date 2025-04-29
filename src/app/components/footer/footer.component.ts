import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  template: `
    <ion-toolbar color="light">
      <ion-buttons slot="start">
        <ion-button [routerLink]="['/home']">
          <ion-icon name="home" slot="icon-only"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-buttons slot="start">
        <ion-button [routerLink]="['/profile']">
          <ion-icon name="person" slot="icon-only"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-buttons slot="end">
        <ion-button [routerLink]="['/admin']">
          <ion-icon name="settings" slot="icon-only"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  `,
})
export class FooterComponent {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaRestaurantesPage } from './lista-restaurantes.page';

const routes: Routes = [
  {
    path: '',
    component: ListaRestaurantesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaRestaurantesPage]
})
export class ListaRestaurantesPageModule {}

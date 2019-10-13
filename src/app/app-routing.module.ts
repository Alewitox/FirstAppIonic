import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'lista-restaurantes', loadChildren: './lista-restaurantes/lista-restaurantes.module#ListaRestaurantesPageModule' },
  { path: 'add-restaurante', loadChildren: './add-restaurante/add-restaurante.module#AddRestaurantePageModule' },
  { path: 'modify-restaurant', loadChildren: './modify-restaurant/modify-restaurant.module#ModifyRestaurantPageModule' },
  { path: 'delete-restaurant', loadChildren: './delete-restaurant/delete-restaurant.module#DeleteRestaurantPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

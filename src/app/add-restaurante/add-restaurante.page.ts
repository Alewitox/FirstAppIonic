import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-restaurante',
  templateUrl: './add-restaurante.page.html',
  styleUrls: ['./add-restaurante.page.scss'],
})
export class AddRestaurantePage implements OnInit {

  constructor(private router:Router, private api:ApiService) { }

  goToRestaurantes(){
    this.router.navigateByUrl('lista-restaurantes');
  }

  ngOnInit() {
  }

name:string;
address:string;
typeOfFood:string;



addRestaurantes(){
  let postData = {
    "id":0,
    "nombre": this.name,
    "direccion": this.address,
    "tipo_comida": this.typeOfFood
  } 
  this.api.postRestaurantes(postData).subscribe((res)=>{
    this.router.navigateByUrl('lista-restaurantes');
    
  });
}

}

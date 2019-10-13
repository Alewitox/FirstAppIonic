import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-modify-restaurant',
  templateUrl: './modify-restaurant.page.html',
  styleUrls: ['./modify-restaurant.page.scss'],
})
export class ModifyRestaurantPage implements OnInit {

  constructor(private router:Router, private api:ApiService) { }

  ngOnInit() {
  }

id:string;
name:string;
address:string;
typeOfFood:string;


  modifyRestaurantes(){
    let putData = {
      "nombre": this.name,
      "direccion": this.address,
      "tipo_comida": this.typeOfFood
    } 
    this.api.putRestaurante(this.id, putData).subscribe((res)=>{
      this.router.navigateByUrl('lista-restaurantes');
      
    });
  }

}

import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, Restaurantes } from '../api.service';


@Component({
  selector: 'app-lista-restaurantes',
  templateUrl: './lista-restaurantes.page.html',
  styleUrls: ['./lista-restaurantes.page.scss'],
})
export class ListaRestaurantesPage implements OnInit {

  constructor(private router:Router, private api:ApiService, private renderer:Renderer2) { }

  ngOnInit() {
    this.rellenarArray();
  }

borrarRestaurantes(event){

}




restaurantes:Array<Restaurantes>;

rellenarArray(){
  this.api.getRestaurantes().subscribe((res:Array<Restaurantes>)=>{
    this.restaurantes = res;
    this.rellenarLista();
  });
}

rellenarLista(){
  
  for(let i=0; i<this.restaurantes.length; i++){
    let item = document.createElement("ion-item");
    let label = document.createElement("ion-label");
    let parrafoh2 = document.createElement("h2");
    let parrafo1 = document.createElement("p");
    let parrafo2 = document.createElement("p");
    let itemlista = document.getElementById("item1");
    let nombre = document.createTextNode(this.restaurantes[i].nombre);
    let direccion = document.createTextNode(this.restaurantes[i].direccion);
    let tipoComida = document.createTextNode(this.restaurantes[i].tipo_comida);

    parrafoh2.appendChild(nombre);
    parrafo1.appendChild(direccion);
    parrafo2.appendChild(tipoComida);

    label.appendChild(parrafoh2);
    label.appendChild(parrafo1);
    label.appendChild(parrafo2);
    item.appendChild(label);

    let buttonIon = document.createElement("button");
    this.renderer.setAttribute(buttonIon, "ion-button", "");
    this.renderer.setAttribute(buttonIon, "id", this.restaurantes[i].id.toString());
    this.renderer.listen(buttonIon, "click", (event)=>{
      this.api.deleteRestaurante(this.restaurantes[i].id.toString()).subscribe(()=>{
        console.log("SE HA BORRADO");
        window.location.reload();
      });
    });

    let icono = document.createElement("ion-icon");
    this.renderer.setAttribute(icono, "slot", "icon-only");
    this.renderer.setAttribute(icono, "name", "trash");

    buttonIon.appendChild(icono);
    item.appendChild(buttonIon);

    itemlista.insertAdjacentElement("beforebegin", item);
  }
}

goToAddPage(){
  this.router.navigateByUrl('add-restaurante');
}

goToModifyPage(){
  this.router.navigateByUrl('modify-restaurant');
}


goToRestaurantes(){
  this.router.navigateByUrl('lista-restaurantes');
}

goToDeletePage(){
  this.router.navigateByUrl('delete-restaurant');
}

  


  

 

}

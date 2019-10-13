import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Restaurantes{
  id:number;
  nombre:string;
  direccion:string;
  tipo_comida:string;
}

@Injectable({
  providedIn: 'root'
})



export class ApiService {

  constructor(private http:HttpClient) { }

  

  getRestaurantes(){
    return this.http.get("http://localhost:8080/Restaurantes")
  }

  getRestaurante(id:string){
    return this.http.get("http://localhost:8080/Restaurantes/" + id)
  }

  postRestaurantes(postData){
    return this.http.post("http://localhost:8080/Restaurantes", null, {params : postData})
  }

  putRestaurante(id:string, putData){
    return this.http.put("http://localhost:8080/Restaurantes/" + id, null , {params: putData})
  }

  deleteRestaurante(id:string){
    return this.http.delete("http://localhost:8080/Restaurantes/" + id)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  
  
  getNoticias():Observable<any> {
  
    //const url =  "https://www3.labanca.com.uy/noticias";
    const url =  "http://localhost:4200/noticias";

    return this.http.get(url);
   
  }

  editNoticia(noticiaId:number , descripcion:string):boolean
  {
    const url =  "https://www3.labanca.com.uy/noticias/edit/" + noticiaId;
    
    //llamar a método para editar la noticia en el backend
    console.log ("llamando a API editNoticia:" + url);
    console.log ("nueva descripcion: " + descripcion);
    
    return true;  
  }

  deleteNoticia(noticiaId:number):boolean{
   
    //llamar a metodo para borrar la noticia en el backend
    const url =  "https://www3.labanca.com.uy/noticias/delete/" + noticiaId;
    
    console.log ("llamando a API deleteNoticia:" + url);
    
    return true;  

  }

}

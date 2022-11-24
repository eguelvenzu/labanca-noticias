import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../servicios/api.service';

import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { PopupeditnoticiaComponent } from './popupeditnoticia/popupeditnoticia.component';
import { PopupdeletenoticiaComponent } from './popupdeletenoticia/popupdeletenoticia.component';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  providers: [ApiService]
})
export class NoticiasComponent implements OnInit {

  listNoticias: any[] = [];

  closeResult = ''; //se usa para saber que apretaron en los modales
  descripcion = ''; //se usa como 2 way binding para editar la noticia
  
  constructor(private api:ApiService , private modalService:NgbModal) { }

  ngOnInit(): void {

    // si ya hay noticias guardadas en sesión, obtenerlas.
    if (sessionStorage.listNoticias != undefined )
    {
        //console.log("hay noticias guardadas en sessionStorage");
        this.listNoticias = JSON.parse(sessionStorage.listNoticias);
    }
    else{
        //console.log("NO HAY noticias guardadas en sessionStorage");
       
        //sino, pedirlas desde la api
        this.api.getNoticias().subscribe(data => {
          this.listNoticias = data.noticias;

          //y guardarlas en el sessionStorage
          sessionStorage.listNoticias = JSON.stringify(this.listNoticias);
        })
    }
  }

  openModalBorrarNoticia(index:number)
   {
   
    const modalRef = this.modalService.open(PopupdeletenoticiaComponent, { backdrop:false , centered:true });
    modalRef.componentInstance.descripcion = this.descripcion;

    modalRef.result.then(
			(result) => {
        console.log("openModalBorrarNoticia result: " + result);
        if (result == "BORRAR")
        {
          let noticiaId = this.listNoticias[index]['id']; //obtenemos el id de la noticia

          //BORRAR LA NOTICIA localmente
          this.listNoticias.splice(index, 1);
         
          //y guardar las noticias en el sessionStorage
          sessionStorage.listNoticias = JSON.stringify(this.listNoticias);

          //llamar a api para que borre la noticia
          this.api.deleteNoticia(noticiaId);
                    
          this.ngOnInit();
        }

			}
		).catch( (result) => { 
      console.log("cancelar");
    });

   }

 
   openModalEditarNoticia(index:number) 
   {
    console.log("openModalEditarNoticia");

    //obtengo la descripción actual de la noticia
    let noticia = this.listNoticias[index];
    this.descripcion = noticia['content'];


    const modalRef = this.modalService.open(PopupeditnoticiaComponent, { backdrop:false , centered:true });
    modalRef.componentInstance.descripcion = this.descripcion;

    modalRef.result.then(
			(result) => {

         console.log("guardar");

          let noticiaId = this.listNoticias[index]['id']; //obtenemos el id de la noticia

          //actualiza la noticia 
          noticia['content']  =  result;  //descripcion

          //y guarda en sessión
          sessionStorage.listNoticias = JSON.stringify(this.listNoticias);

          //llamar a api para que edite  la noticia
          this.api.editNoticia(noticiaId, this.descripcion);

          this.ngOnInit();
        }
			
    ).catch( (result) => { 
      console.log("cancelar");
    });

	}
}

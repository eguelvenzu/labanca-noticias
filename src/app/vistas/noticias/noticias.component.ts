import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../servicios/api.service';

import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  providers: [ApiService]
})
export class NoticiasComponent implements OnInit {

  listNoticias: any[] = [];

  closeResult = ''; //se usa para saber que apretaron en los modales
  descripcion = ""; //se usa como 2 way binding para editar la noticia
  
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

  openModalBorrarNoticia(index:number, content)
   {
   
		const modalRef = this.modalService.open(content, { backdrop:false , centered:true });
    
    modalRef.result.then(
			(result) => {
				this.closeResult = `${result}`;
        console.log(this.closeResult);
        if (this.closeResult == "BORRAR")
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
		);

   }

 
   openModalEditarNoticia(index:number, content) 
   {
    let noticia = this.listNoticias[index];

    this.descripcion = noticia['content'];


		const modalRef = this.modalService.open(content, { backdrop:false , centered:true });
    
    modalRef.result.then(
			(result) => {

        console.log("guardar");

				this.closeResult = `${result}`;

        if (this.closeResult == "GUARDAR")
        {
            let noticiaId = this.listNoticias[index]['id']; //obtenemos el id de la noticia

            //actualiza la noticia 
            noticia['content']  =  this.descripcion; 

            //y guarda en sessión
            sessionStorage.listNoticias = JSON.stringify(this.listNoticias);

            //llamar a api para que edite  la noticia
            this.api.editNoticia(noticiaId, this.descripcion);

            this.ngOnInit();
        }

			}
    );

	}
}

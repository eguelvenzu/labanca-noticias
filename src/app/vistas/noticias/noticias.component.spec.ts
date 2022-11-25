import { ComponentFixture, TestBed ,waitForAsync} from '@angular/core/testing';
import { NoticiasComponent } from './noticias.component';
import { ApiService } from 'src/app/servicios/api.service';
import { HttpClientModule } from '@angular/common/http';
import {NgbModal, NgbModalRef, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { PopupdeletenoticiaComponent } from './popupdeletenoticia/popupdeletenoticia.component';
import { PopupeditnoticiaComponent } from './popupeditnoticia/popupeditnoticia.component';

describe('NoticiasComponent', () => {
  let component: NoticiasComponent;
  let fixture: ComponentFixture<NoticiasComponent>;

  let activeModal:NgbActiveModal;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasComponent ],
      imports: [HttpClientModule ],
      providers: [NgbActiveModal ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should render title', () => {
    const fixture = TestBed.createComponent(NoticiasComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1').textContent).toContain('ARCHIVO DE NOTICIAS');
  });

  it('should have listNoticias', () => {
    
    expect(component.listNoticias).toBeTruthy();

  });

  
  it('should have noticias inside listNoticias at the start of the app', waitForAsync((ApiService) => { 
    
    expect(component.listNoticias.length).toBeGreaterThan(0);
  
  }));
 

  it('should not delete a noticia if modal dialog is dismissed ', waitForAsync((ApiService) => { 
    
    let cantidadInicial = component.listNoticias.length;

      // llamar al modal de borrar  para una noticia
      component.openModalBorrarNoticia(0);

      //llamar al botón de cancelar
      component.modalRef.componentInstance.activeModal.dismiss();

    //llamar al botón de borrar

    let cantidadFinal = component.listNoticias.length;

    expect(cantidadFinal).toEqual(cantidadInicial);

    
  }));


  it('should delete a noticia if modal dialog is closed with BORRAR ', waitForAsync((ApiService) => { 
    
    let cantidadInicial = component.listNoticias.length;

      // llamar al modal de borrar  para una noticia
      component.openModalBorrarNoticia(0);

      //llamar al botón de borrar
      component.modalRef.componentInstance.activeModal.close("BORRAR");


        let cantidadFinal = component.listNoticias.length;
        expect(cantidadFinal).toEqual(cantidadInicial-1);
    
  }));
  

  it('should edit a noticia if modal dialog is closed with GUARDAR ', waitForAsync((ApiService) => { 
    
    

      // llamar al modal de borrar  para una noticia
      component.openModalEditarNoticia(0);

      component.modalRef.componentInstance.descripcion = "texto de prueba";
      
      //llamar al botón de editar
      component.modalRef.componentInstance.activeModal.close();

      expect(component.descripcion).toEqual("texto de prueba");
    
  }));
  




 
});

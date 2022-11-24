import { ComponentFixture, TestBed ,waitForAsync} from '@angular/core/testing';
import { NoticiasComponent } from './noticias.component';
import { ApiService } from 'src/app/servicios/api.service';
import { HttpClientModule } from '@angular/common/http';
import {NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

describe('NoticiasComponent', () => {
  let component: NoticiasComponent;
  let fixture: ComponentFixture<NoticiasComponent>;

  let modalService: NgbModal;
  let modalRef: NgbModalRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasComponent ],
      imports: [HttpClientModule ]
    })
    .compileComponents();

    modalService = TestBed.inject(NgbModal);
    //modalRef = modalService.open()
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
 

  it('should delete a noticia correctly ', waitForAsync((ApiService) => { 
    
    let cantidadInicial = component.listNoticias.length;


    let cantidadFinal = component.listNoticias.length;

    expect(cantidadFinal).toEqual(cantidadInicial-1);

    
  }));




 
});

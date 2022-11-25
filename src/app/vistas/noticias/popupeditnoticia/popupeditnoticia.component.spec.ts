import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal, NgbModalRef, NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

import { PopupeditnoticiaComponent } from './popupeditnoticia.component';

describe('PopupeditnoticiaComponent', () => {
  let component: PopupeditnoticiaComponent;
  let fixture: ComponentFixture<PopupeditnoticiaComponent>;

  let modalService: NgbModal;
  let modalRef: NgbModalRef;
  let activeModal:NgbActiveModal;
  let modalComp;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupeditnoticiaComponent ],
      providers: [NgbActiveModal ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupeditnoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    //modal
    modalService = TestBed.inject(NgbModal);
    modalRef  = modalService.open(PopupeditnoticiaComponent);

    modalComp = modalRef.componentInstance;
    activeModal = modalComp.activeModal;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Call onDismiss()', () => {
    spyOn(activeModal, 'dismiss');
    modalComp.onDismiss('Cancelar');
    expect(activeModal.dismiss).toHaveBeenCalled();
    expect(activeModal.dismiss).toHaveBeenCalledWith('Cancelar');
    });

    
    it('Call onGuardar()', () => {
      spyOn(activeModal, 'close');

      modalComp.descripcion = "PRUEBA";
      modalComp.onGuardar();
      expect(activeModal.close).toHaveBeenCalled();
      
      expect(activeModal.close).toHaveBeenCalledWith('PRUEBA');
    });

});

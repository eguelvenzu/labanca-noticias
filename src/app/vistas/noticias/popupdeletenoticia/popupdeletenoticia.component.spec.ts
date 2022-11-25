import { ComponentFixture, TestBed , waitForAsync } from '@angular/core/testing';
import { NgbModal, NgbModalRef, NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

import { PopupdeletenoticiaComponent } from './popupdeletenoticia.component';

describe('PopupdeletenoticiaComponent', () => {
  let component: PopupdeletenoticiaComponent;
  let fixture: ComponentFixture<PopupdeletenoticiaComponent>;
  
  let modalService: NgbModal;
  let modalRef: NgbModalRef;
  let activeModal:NgbActiveModal;
  let modalComp;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupdeletenoticiaComponent ],
      providers: [NgbActiveModal ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupdeletenoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


    //modal
    modalService = TestBed.inject(NgbModal);
    modalRef  = modalService.open(PopupdeletenoticiaComponent);

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

    
    it('Call onClose()', () => {
      spyOn(activeModal, 'close');
      modalComp.onBorrar();
      expect(activeModal.close).toHaveBeenCalled();
      expect(activeModal.close).toHaveBeenCalledWith('BORRAR');
    });

});

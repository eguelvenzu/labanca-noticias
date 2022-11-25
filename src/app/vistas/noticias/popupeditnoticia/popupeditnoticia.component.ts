import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-popupeditnoticia',
  templateUrl: './popupeditnoticia.component.html',
  styleUrls: ['./popupeditnoticia.component.css']
})
export class PopupeditnoticiaComponent implements OnInit {

  @Input() public descripcion;
  
  constructor(private activeModal:NgbActiveModal) { }
    
  onGuardar():void {
    
    //en lugar de usar un EventEmitter, paso la nueva descripción al cerrar el modal
    this.activeModal.close(this.descripcion);

  }

  onDismiss(reason : String):void {
    this.activeModal.dismiss(reason);
  }

  ngOnInit(): void {
  }

}

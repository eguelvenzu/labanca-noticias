import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-popupdeletenoticia',
  templateUrl: './popupdeletenoticia.component.html',
  styleUrls: ['./popupdeletenoticia.component.css']
})
export class PopupdeletenoticiaComponent implements OnInit {

  constructor(private activeModal:NgbActiveModal) { }

  onBorrar():void {
    
    this.activeModal.close("BORRAR");

  }

  onDismiss(reason : String):void {
    this.activeModal.dismiss(reason);
  }


  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './vistas/noticias/noticias.component';
import { HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { PopupeditnoticiaComponent } from './vistas/noticias/popupeditnoticia/popupeditnoticia.component';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import { PopupdeletenoticiaComponent } from './vistas/noticias/popupdeletenoticia/popupdeletenoticia.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    PopupeditnoticiaComponent,
    PopupdeletenoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [ PopupeditnoticiaComponent ]
})
export class AppModule { }

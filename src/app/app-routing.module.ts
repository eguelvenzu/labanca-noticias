import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { NoticiasComponent } from './vistas/noticias/noticias.component';
const routes: Routes = [

  {path:'', redirectTo: 'news' , pathMatch:'full'},
  {path:'news' , component:NoticiasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

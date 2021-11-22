import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheComponent } from './detalhe/detalhe.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path:'detalhe/detalhe.component.html', component:DetalheComponent},
  {path: '' , component:NoticiaComponent},
  {path: 'admin/admin.component.html', component: AdminComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

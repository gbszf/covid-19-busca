import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { AdminComponent } from './admin/admin.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    AppComponent,
    NoticiaComponent,
    DetalheComponent,
    AdminComponent,
    PostComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

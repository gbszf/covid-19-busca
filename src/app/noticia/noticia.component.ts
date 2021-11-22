import { Component, OnInit } from '@angular/core';
import { DetalheComponent } from '../detalhe/detalhe.component';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css'],
  template:`<p>Olá mundo</p>`
})
export class NoticiaComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  }

}

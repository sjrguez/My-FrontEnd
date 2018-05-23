import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';
UsuariosService
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor(public usuario:UsuariosService) { }

  ngOnInit() {
  }

}

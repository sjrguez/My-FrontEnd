import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PAGES_ROUTES } from './pages.routes';
import { SharedModule } from '../shared/shared.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormUsuarioComponent } from './usuarios/form-usuario/form-usuario.component';
import { TiposUsuariosComponent } from './usuarios/tipos-usuarios/tipos-usuarios.component';
import { FormTiposUsuariosComponent } from './usuarios/form-tipos-usuarios/form-tipos-usuarios.component';
import { PagesComponent } from './pages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuplidoresComponent } from './suplidores/suplidores.component';
import { SuplidorComponent } from './suplidores/suplidor/suplidor.component';

@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    UsuariosComponent,
    FormUsuarioComponent,
    TiposUsuariosComponent,
    FormTiposUsuariosComponent,
    NavbarComponent,
    SuplidoresComponent,
    SuplidorComponent
  ]
  ,imports: [
    SharedModule,
    CommonModule,
    PAGES_ROUTES,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[FormsModule]
})
export class PagesModule { }

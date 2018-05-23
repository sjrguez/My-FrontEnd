import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormUsuarioComponent } from './usuarios/form-usuario/form-usuario.component';
import { TiposUsuariosComponent } from './usuarios/tipos-usuarios/tipos-usuarios.component';
import { FormTiposUsuariosComponent } from './usuarios/form-tipos-usuarios/form-tipos-usuarios.component';
import { PagesComponent } from './pages.component';
import { SuplidoresComponent } from './suplidores/suplidores.component';
import { SuplidorComponent } from './suplidores/suplidor/suplidor.component';


const pagesRoutes=[
    {
        path:'',
        component:PagesComponent,
       children:[
        {path:'home',component:HomeComponent},
        {path:'usuarios',component:UsuariosComponent},
        {path:'usuario/:id',component:FormUsuarioComponent},
        {path:'tipousu',component:TiposUsuariosComponent},
        {path:'tipousu/:id',component:FormTiposUsuariosComponent},
        {path:'suplidores',component:SuplidoresComponent},
        {path:'suplidor/:id',component:SuplidorComponent},
       ]
    },
 
    
]
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes )
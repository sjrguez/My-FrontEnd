import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(public _Http:HttpClient) {
   }

   MostrarUsuarios(){
     let url= URL_SERVICIOS + '/usuario'
     return this._Http.get(url)               
   
   }


   crearUsuario(data){
    let url= URL_SERVICIOS + '/usuario'
      return this._Http.post(url,data)
   }

  
   obtenerUsuario(id){
    let url= URL_SERVICIOS + '/usuario/'+id
    return this._Http.get(url)
          .pipe(map((res:any)=>{
            return res.usuario
          }))
   }

  modificarUsuario(id,data){
    let url= URL_SERVICIOS + '/usuario/'+id
    
    return this._Http.put(url,data)
  }
  
  eleminarUsuario(id){
    let url= URL_SERVICIOS + '/usuario/'+id
    return this._Http.delete(url)

  }



  //  Mostrar Tipo de usuarios
  mostrarTiposUsu(){
    let url = URL_SERVICIOS+ '/tipousu'
    return this._Http.get(url)
    .pipe(map((res:any)=>{
      return res.tipoDB
    }))               
  }
  
  crearTipo(data){
    let url = URL_SERVICIOS+ '/tipousu'
    return this._Http.post(url,data)
  }

  obtenerTipo(id){
    let url = URL_SERVICIOS+ '/tipousu/'+id
    return this._Http.get(url)
    .pipe(map((res:any)=>{
      return res.tipousuDB
    }))     
    
  }


  actualizarTipo(id,data){
    let url = URL_SERVICIOS+ '/tipousu/'+id
    return this._Http.put(url,data)    
  }

  eliminarTipo(id){
    let url = URL_SERVICIOS+ '/tipousu/'+id
    return this._Http.delete(url)

  }
  



}

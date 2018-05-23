import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuarios.model';
import swal from 'sweetalert'
import {ActivatedRoute} from '@angular/router'
import { UsuariosService } from '../../../servicios/usuarios.service';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styles: []
})
export class FormUsuarioComponent implements OnInit {
  
  confirmar:any={
    pass:''
  }
  tipoUsu:any[]=[]

  usuario:Usuario={
    nombre:"",
    nick:"",
    tipo:"",
    password:"",
    estado:1
  }
  id:string=""
  constructor(public _Active:ActivatedRoute,public _Usuario:UsuariosService) {
        _Active.params.subscribe((res:any)=>{
          this.id=res.id
            
          if(this.id != 'crear'){
        _Usuario.obtenerUsuario(this.id)
                    .subscribe((res:any)=>{
                      this.usuario=res
                      this.usuario.tipo = res.tipo._id 
                    })
          }

        })


   }

  ngOnInit() {
    this.mostrarTipoUsu()
  }
  guardarUsuario(data){
  
    if(data.invalid){
      return
    }


    if(this.id == 'crear'){

      if(this.usuario.password != this.confirmar.pass){
        swal("Error!", "La contrasena son diferentes", "error");
        this.usuario.password=""
        this.confirmar.pass=""
        return
      }
      
      this._Usuario.crearUsuario(this.usuario)
                .subscribe(res=>{
                    swal("Usuario creado!",`${this.usuario.nombre} ha sido creado` , "success");
                    this.usuario=new Usuario('','','','',1)
                    this.confirmar.pass=""
                })
                  
    }else{
        this._Usuario.modificarUsuario(this.id,this.usuario)
                .subscribe(res=>{
                  swal("Usuario modificado!",`${this.usuario.nombre} ha sido modificado` , "success");
                })
    }

  }





  mostrarTipoUsu(){
    this._Usuario.mostrarTiposUsu()
            .subscribe((tipos:any)=>{
              this.tipoUsu=tipos
            })
  }
}

import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Usuario } from '../../models/usuarios.model';
// import swal from 'sweetalert'
declare var swal
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios:Usuario[]=[]
  totalRegistrados:any=0
  constructor(public _Usuario:UsuariosService) {

   }

  mostrarUsuarios(){
    this._Usuario.MostrarUsuarios()
      .subscribe((res:any)=>{
          this.usuarios=res.usuario
          this.totalRegistrados=res.total

      })
  }
  
  eleminarUsuario(id){
    swal({
      title: "Estas seguro?",
      text:"Estas borrando un usuario",
      icon:"warning",
      buttons:true,
      dangerMode:true
    })
    .then((borrado) => {

      if (borrado) {
        this._Usuario.eleminarUsuario(id)
                      .subscribe((res:any)=>{
                        swal("Usuario elimindado!", `${res.usuario.nombre} ha sido eliminado`, "error");
                        this.mostrarUsuarios()
                      })

      } else {
        swal("Salvo!","El usuario esta a salvo","success");
      }

    });

  }

  ngOnInit() {
    this.mostrarUsuarios()
  }

}

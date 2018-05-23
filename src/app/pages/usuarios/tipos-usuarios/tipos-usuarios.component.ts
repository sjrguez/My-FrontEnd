import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { Tipo } from '../../../models/tipousu.model';
declare var swal
@Component({
  selector: 'app-tipos-usuarios',
  templateUrl: './tipos-usuarios.component.html',
  styles: []
})
export class TiposUsuariosComponent implements OnInit {

  tipos:Tipo[]=[]
  totalRegistrados:number=0
  constructor(public _Tipo:UsuariosService) { }


  ngOnInit() {
    this.mostrarTipoUsu()
  }

  mostrarTipoUsu(){
    this._Tipo.mostrarTiposUsu()
            .subscribe((tipos:Tipo[])=>{
              this.tipos=tipos
              this.totalRegistrados=tipos.length
            })
  }

  eliminarTipo(id){
    swal({
      title: "Estas seguro?",
      text:"Estas borrando un tipo de usuario",
      icon:"warning",
      buttons:true,
      dangerMode:true
    })
    .then((borrado) => {

      if (borrado) {
           this._Tipo.eliminarTipo(id)
           .subscribe((tipo:any)=>{
           swal("Tipo de usuario elimindado!", `${tipo.tipoEliminado.nombre} ha sido eliminado`, "error");
           this.mostrarTipoUsu()
        })

      } else {
        swal("Salvo!","El tipo de usuario esta a salvo","success");
      }

    });


}
}

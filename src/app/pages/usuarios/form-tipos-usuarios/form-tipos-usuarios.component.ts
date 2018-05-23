import { Component, OnInit } from '@angular/core';
import { Tipo } from '../../../models/tipousu.model';
import { UsuariosService } from '../../../servicios/usuarios.service';
import swal from 'sweetalert'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-form-tipos-usuarios',
  templateUrl: './form-tipos-usuarios.component.html',
  styles: []
})
export class FormTiposUsuariosComponent implements OnInit {

  tipo:Tipo={
    nombre:'',
    descripcion:'',
    estado:1
  }
id=""
  constructor(
    public _Tipo:UsuariosService,
    public _Activate:ActivatedRoute
  ) {
    this._Activate.params.subscribe(res=>{
      this.id=res.id
      if(res.id != 'crear'){
        _Tipo.obtenerTipo(res.id).subscribe(tipo=>{
          this.tipo=tipo
          })
      }

    })
   }

  ngOnInit() {
  }

  guardarTipo(data){
    if(data.invalid){
      return
    }

    if(this.id == "crear"){

    this._Tipo.crearTipo(this.tipo)
                .subscribe(res=>{
        swal("Tipo de usuario creado!", this.tipo.nombre, "success");
        this.tipo=new Tipo('','',1)
                })

    }else{
      this._Tipo.actualizarTipo(this.id,this.tipo)
                .subscribe(res=>{
       swal("Tipo de usuario actualizado!", this.tipo.nombre, "success");
                })
    }


    
  }

}

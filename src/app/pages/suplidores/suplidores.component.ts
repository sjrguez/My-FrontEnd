import { Component, OnInit } from '@angular/core';
import { SuplidoresService } from '../../servicios/suplidores.service';
import { Suplidor } from '../../models/suplidor.model';
@Component({
  selector: 'app-suplidores',
  templateUrl: './suplidores.component.html',
  styles: []
})
export class SuplidoresComponent implements OnInit {
  
  suplidores:Suplidor[]=[]
  totalRegistrado:number=0
  constructor(public _Suplidores:SuplidoresService) { }

  ngOnInit() {
    this.mostrarSuplidores()
  }


  mostrarSuplidores(){
    this._Suplidores.mostrarSuplidores()
                    .subscribe((data:any)=>{
                    this.suplidores=data.suplidores       
                    this.totalRegistrado=data.suplidores.length               
                    })
  }
}

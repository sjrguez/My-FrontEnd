import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { map, catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SuplidoresService {

  constructor(
    public _Http:HttpClient
  ) { 
    console.log("inicia del servicio")
  }

  mostrarSuplidores(){
    let url=URL_SERVICIOS+"/suplidor"
    return this._Http.get(url)
  }


}

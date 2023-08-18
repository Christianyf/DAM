import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medida } from '../modelos/mediciones';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoadMedicionesService {

  urlApi='http://localhost:8000/mediciones';

  constructor(private _http:HttpClient){

  }


  agregarMedicion(medicion: Medida){

    const now = new Date();
    const aux = now.toISOString().slice(0,19).replace('T', ' ');
    const aux2= formatDate(now,'YYYYMMddhhmmss', 'en-US', 'CST' )
    const aux3 = now.toISOString();
    console.log("llega al servicio");
    console.log(aux);
    console.log(aux2);
    console.log(aux3);
    //return this._http.post(this.urlApi+'/add',{medicionId:12,fecha:aux3,valor:60,dispositivoId:1});
    return this._http.post(this.urlApi+'/add',{fecha:aux3,valor:60,dispositivoId:1});
    
  }
  verMediciones(){
    return this._http.get(this.urlApi);
  }
}

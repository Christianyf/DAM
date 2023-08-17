import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medida } from '../modelos/mediciones';

@Injectable({
  providedIn: 'root'
})
export class LoadMedicionesService {

  urlApi='http://localhost:8000/mediciones';

  constructor(private _http:HttpClient){

  }

  // Add a new measurement value into a device.
  // invokes API Endpoint http://localhost:8000/api/v1/measure/add with a medicion variable
  agregarMedicion(medicion: Medida){
    //return this._http.post(this.urlApi+'/measure/add',{fecha:formatDate(medicion.fecha,'YYYYMMddhhmmss', 'en-US', 'CST' ),valor:medicion.valor,dispositivoId:medicion.dispositivoId}).toPromise().then((result)=>result);
    return this._http.post(this.urlApi,{fecha:medicion.fecha.toISOString(),valor:medicion.valor,dispositivoId:medicion.dispositivoId}).toPromise().then((result)=>result);
    //return this._http.post(this.urlApi+'/measure/add',{fecha:medicion.fecha.toISOString().slice(0, 19).replace('T', ' '),valor:medicion.valor,dispositivoId:medicion.dispositivoId}).toPromise().then((result)=>result);
   }
  
   verMediciones(){
    return this._http.get(this.urlApi);
   }
}

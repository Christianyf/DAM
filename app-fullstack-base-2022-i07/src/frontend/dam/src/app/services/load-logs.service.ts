import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoadLogsService {

  urlApi='http://localhost:8000/logs';

  constructor(private _http:HttpClient) { }


  agregarMedicion(){
    //return this._http.post(this.urlApi+'/measure/add',{fecha:formatDate(medicion.fecha,'YYYYMMddhhmmss', 'en-US', 'CST' ),valor:medicion.valor,dispositivoId:medicion.dispositivoId}).toPromise().then((result)=>result);
    //return this._http.post(this.urlApi,{fecha:medicion.fecha.toISOString(),valor:medicion.valor,dispositivoId:medicion.dispositivoId}).toPromise().then((result)=>result);
    //return this._http.post(this.urlApi+'/measure/add',{fecha:medicion.fecha.toISOString().slice(0, 19).replace('T', ' '),valor:medicion.valor,dispositivoId:medicion.dispositivoId}).toPromise().then((result)=>result);
   }
  
   verMediciones(){
    return this._http.get(this.urlApi);
   }
}

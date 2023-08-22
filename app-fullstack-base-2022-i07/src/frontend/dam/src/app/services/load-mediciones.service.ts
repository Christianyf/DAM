import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medida } from '../modelos/mediciones';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoadMedicionesService {

  urlApi='http://localhost:8000/mediciones/';
  url='http://localhost:8000/mediciones/add';

  constructor(private _http:HttpClient){

  }


  agregarMedicion(medicion: Medida){

    return this._http.post(this.url,{fecha:medicion.fecha.toISOString().slice(0, 19).replace('T', ' '),valor:medicion.valor,dispositivoId:medicion.dispositivoId}).toPromise().then((result)=>result);    
  }
  verMediciones(id: any){
    console.log("lo que llega al service")
    console.log(id)
    return this._http.get(this.urlApi+id);
  }
}

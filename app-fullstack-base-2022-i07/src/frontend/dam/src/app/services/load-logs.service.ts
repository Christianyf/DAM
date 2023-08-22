import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Logs } from '../modelos/logs';

@Injectable({
  providedIn: 'root'
})
export class LoadLogsService {

  urlApi='http://localhost:8000/logs/';
  url='http://localhost:8000/logs/add';

  constructor(private _http:HttpClient) { }


  agregarMedicion(log: Logs){
    return this._http.post(this.url,{apertura:log.apertura, fecha:log.fecha.toISOString().slice(0, 19).replace('T', ' '), electrovalvulaId:log.electrovalvulaId}).toPromise().then((result)=>result);
   }
  
   verMediciones(id: any){
    return this._http.get(this.urlApi+id);
   }
}

import { Component, OnInit } from '@angular/core';
import { LoadLogsService } from '../services/load-logs.service';

@Component({
  selector: 'app-detalle-logs',
  templateUrl: './detalle-logs.page.html',
  styleUrls: ['./detalle-logs.page.scss'],
})
export class DetalleLogsPage implements OnInit {

  listado: any[] = [];
  elemento :any ;


  constructor(private logService:LoadLogsService) { }

  ngOnInit() {
    this.elemento = history.state.elemento;
    console.log(this.elemento.dispositivoId);
    this.logService.verMediciones(this.elemento.dispositivoId).subscribe(
      (Response) =>{
        this.listado = Response as any[];
        console.log(this.listado);
      },
      (error) => {
        console.error('Error al obtener los dispositivos');
      }
    );
  }

}

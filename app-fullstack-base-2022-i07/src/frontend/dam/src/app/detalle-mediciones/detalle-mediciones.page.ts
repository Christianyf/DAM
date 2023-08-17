import { Component, OnInit } from '@angular/core';
import { LoadMedicionesService } from '../services/load-mediciones.service';

@Component({
  selector: 'app-detalle-mediciones',
  templateUrl: './detalle-mediciones.page.html',
  styleUrls: ['./detalle-mediciones.page.scss'],
})
export class DetalleMedicionesPage implements OnInit {

  listado: any[] = [];

  constructor(private logService: LoadMedicionesService) { }

  ngOnInit() {
    this.logService.verMediciones().subscribe(
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

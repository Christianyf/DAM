import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalgaUpdateService } from '../services/galga-update.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadMedicionesService } from '../services/load-mediciones.service';
import { Medida } from '../modelos/mediciones';
import { LoadLogsService } from '../services/load-logs.service';
import { Logs } from '../modelos/logs';

@Component({
  selector: 'app-detalle-galga',
  templateUrl: './detalle-galga.page.html',
  styleUrls: ['./detalle-galga.page.scss'],
})
export class DetalleGalgaPage implements OnInit {

  //valvula: any
  isValveOpen = false;
  value = 0;
  elemento: any

  constructor(private route: ActivatedRoute, private updateService: GalgaUpdateService, private navCtrl:NavController,private router: Router, private logService: LoadMedicionesService, private riego:LoadLogsService) { }
  ngOnInit() {
    this.elemento = history.state.elemento;
  }

  toggleValve() {
    this.isValveOpen = !this.isValveOpen;
    const estadoEVn = Number(this.isValveOpen);
    const now = new Date();
    const med: Medida = new Medida(0, now, this.value,this.elemento.dispositivoId);
    const log: Logs = new Logs(0, Number(this.isValveOpen), now, this.elemento.electrovalvulaId);
    console.log(med);
    if (this.isValveOpen) {
      this.value=60;
      //this.logService.agregarMedicion(med);
      this.riego.agregarMedicion(log);
    } else {
      this.value=10;
      this.logService.agregarMedicion(med);//carga las mediciones
      this.riego.agregarMedicion(log);//carga los riegos
    }
    this.updateService.triggerChartUpdate(this.value);
    
  }

  verMediciones(elemento: any){
    console.log("Item clicked 2");
    console.log(elemento)
    this.router.navigate(['detalle-mediciones'],{
      state:{elemento}//elemento
    });
  }
  verLogs(elemento:any){
    console.log("Item clicked 3");
    this.router.navigate(['detalle-logs'],{
      state:{elemento}//elemento
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalgaUpdateService } from '../services/galga-update.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-galga',
  templateUrl: './detalle-galga.page.html',
  styleUrls: ['./detalle-galga.page.scss'],
})
export class DetalleGalgaPage implements OnInit {

  valvula: any
  isValveOpen = false;
  value = 0;

  constructor(private route: ActivatedRoute, private updateService: GalgaUpdateService, private navCtrl:NavController,private router: Router) { }
  ngOnInit() {
    this.valvula = history.state.elemento;
    console.log(this.valvula);
  }

  toggleValve() {
    this.isValveOpen = !this.isValveOpen;
    if (this.isValveOpen) {
      this.value=60;
    } else {
      this.value=10;
    }
    this.updateService.triggerChartUpdate(this.value);
  }

  verMediciones(){
    console.log("Item clicked 2");
    this.router.navigate(['detalle-mediciones'],{
      state:{}//elemento
    });
  }
  verLogs(){
    console.log("Item clicked 3");
    this.router.navigate(['detalle-logs'],{
      state:{}//elemento
    });
  }
}

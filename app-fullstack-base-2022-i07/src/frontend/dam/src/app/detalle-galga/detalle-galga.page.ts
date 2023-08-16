import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalgaUpdateService } from '../services/galga-update.service';

@Component({
  selector: 'app-detalle-galga',
  templateUrl: './detalle-galga.page.html',
  styleUrls: ['./detalle-galga.page.scss'],
})
export class DetalleGalgaPage implements OnInit {

  valvula: any
  isValveOpen = false;
  value = 0;

  constructor(private route: ActivatedRoute, private updateService: GalgaUpdateService) { }
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
}

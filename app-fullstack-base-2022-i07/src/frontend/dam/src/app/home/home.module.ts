import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DispositivosPageModule } from '../dispositivos/dispositivos.module';
import { DetalleSensorPageModule } from '../detalle-sensor/detalle-sensor.module';
import { DetalleGalgaPageModule } from '../detalle-galga/detalle-galga.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    DispositivosPageModule,
    DetalleSensorPageModule,
    DetalleGalgaPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

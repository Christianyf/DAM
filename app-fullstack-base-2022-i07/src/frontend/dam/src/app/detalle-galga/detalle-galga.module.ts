import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleGalgaPageRoutingModule } from './detalle-galga-routing.module';

import { DetalleGalgaPage } from './detalle-galga.page';
import { DetalleSensorPageModule } from '../detalle-sensor/detalle-sensor.module';
import { UnidadPipe } from '../pipes/unidad.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleGalgaPageRoutingModule,
    DetalleSensorPageModule
  ],
  declarations: [DetalleGalgaPage,UnidadPipe],
  exports: [DetalleGalgaPage]
})
export class DetalleGalgaPageModule {}

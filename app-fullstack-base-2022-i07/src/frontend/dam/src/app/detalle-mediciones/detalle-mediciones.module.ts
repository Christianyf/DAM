import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleMedicionesPageRoutingModule } from './detalle-mediciones-routing.module';

import { DetalleMedicionesPage } from './detalle-mediciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleMedicionesPageRoutingModule
  ],
  declarations: [DetalleMedicionesPage]
})
export class DetalleMedicionesPageModule {}

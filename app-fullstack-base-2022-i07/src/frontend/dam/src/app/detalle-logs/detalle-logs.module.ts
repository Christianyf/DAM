import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleLogsPageRoutingModule } from './detalle-logs-routing.module';

import { DetalleLogsPage } from './detalle-logs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleLogsPageRoutingModule
  ],
  declarations: [DetalleLogsPage]
})
export class DetalleLogsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DispositivosPageRoutingModule } from './dispositivos-routing.module';

import { DispositivosPage } from './dispositivos.page';
import { DispositivoComponent } from '../dispositivo/dispositivo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DispositivosPageRoutingModule
  ],
  declarations: [DispositivosPage,DispositivoComponent],
  exports: [DispositivosPage]
})
export class DispositivosPageModule {}

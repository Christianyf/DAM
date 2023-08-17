import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleMedicionesPage } from './detalle-mediciones.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleMedicionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleMedicionesPageRoutingModule {}

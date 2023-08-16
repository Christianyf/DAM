import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleGalgaPage } from './detalle-galga.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleGalgaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleGalgaPageRoutingModule {}

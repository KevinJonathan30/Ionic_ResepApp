import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetPage } from './det.page';

const routes: Routes = [
  {
    path: '',
    component: DetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetPageRoutingModule {}

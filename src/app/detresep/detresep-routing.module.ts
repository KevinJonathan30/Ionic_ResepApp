import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetresepPage } from './detresep.page';

const routes: Routes = [
  {
    path: '',
    component: DetresepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetresepPageRoutingModule {}

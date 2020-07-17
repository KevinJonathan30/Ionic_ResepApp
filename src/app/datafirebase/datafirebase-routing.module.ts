import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatafirebasePage } from './datafirebase.page';

const routes: Routes = [
  {
    path: '',
    component: DatafirebasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatafirebasePageRoutingModule {}

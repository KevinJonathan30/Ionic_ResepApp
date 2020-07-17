import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahresepPage } from './tambahresep.page';

const routes: Routes = [
  {
    path: '',
    component: TambahresepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahresepPageRoutingModule {}

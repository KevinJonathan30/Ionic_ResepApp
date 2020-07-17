import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetPageRoutingModule } from './det-routing.module';

import { DetPage } from './det.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetPageRoutingModule
  ],
  declarations: [DetPage]
})
export class DetPageModule {}

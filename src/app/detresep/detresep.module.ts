import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetresepPageRoutingModule } from './detresep-routing.module';

import { DetresepPage } from './detresep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetresepPageRoutingModule
  ],
  declarations: [DetresepPage]
})
export class DetresepPageModule {}

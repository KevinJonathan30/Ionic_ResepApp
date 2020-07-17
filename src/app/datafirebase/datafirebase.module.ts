import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatafirebasePageRoutingModule } from './datafirebase-routing.module';

import { DatafirebasePage } from './datafirebase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatafirebasePageRoutingModule
  ],
  declarations: [DatafirebasePage]
})
export class DatafirebasePageModule {}

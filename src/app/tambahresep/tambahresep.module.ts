import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahresepPageRoutingModule } from './tambahresep-routing.module';

import { TambahresepPage } from './tambahresep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahresepPageRoutingModule
  ],
  declarations: [TambahresepPage]
})
export class TambahresepPageModule {}

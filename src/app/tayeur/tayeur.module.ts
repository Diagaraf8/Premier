import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TayeurPageRoutingModule } from './tayeur-routing.module';

import { TayeurPage } from './tayeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TayeurPageRoutingModule
  ],
  declarations: [TayeurPage]
})
export class TayeurPageModule {}

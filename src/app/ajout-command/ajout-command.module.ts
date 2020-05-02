import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutCommandPageRoutingModule } from './ajout-command-routing.module';

import { AjoutCommandPage } from './ajout-command.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutCommandPageRoutingModule
  ],
  declarations: [AjoutCommandPage]
})
export class AjoutCommandPageModule {}

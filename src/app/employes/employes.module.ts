import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployesPageRoutingModule } from './employes-routing.module';

import { EmployesPage } from './employes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployesPageRoutingModule
  ],
  declarations: [EmployesPage]
})
export class EmployesPageModule {}

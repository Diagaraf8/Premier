import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TayeurPage } from './tayeur.page';

const routes: Routes = [
  {
    path: '',
    component: TayeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TayeurPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MAutosPage } from './m-autos.page';

const routes: Routes = [
  {
    path: '',
    component: MAutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MAutosPageRoutingModule {}

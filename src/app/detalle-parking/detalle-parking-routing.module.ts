import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleParkingPage } from './detalle-parking.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleParkingPage,
    children:[
      {
        path: 'mapa',
        loadChildren: () => import('../detalle-parking/mapa/mapa.module').then( m => m.MapaPageModule)
      },
      {
        path: 'estacionamiento',
        loadChildren: () => import('../detalle-parking/estacionamiento/estacionamiento.module').then( m => m.EstacionamientoPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleParkingPageRoutingModule {}

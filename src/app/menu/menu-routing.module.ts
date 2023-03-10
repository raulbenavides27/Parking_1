import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'ajuste',
        loadChildren: () => import('../ajuste/ajuste.module').then( m => m.AjustePageModule)
      },
      {
        path: 'pagos',
        loadChildren: () => import('../pagos/pagos.module').then( m => m.PagosPageModule)
      },
      {
        path: 'autos',
        loadChildren: () => import('../autos/autos.module').then( m => m.AutosPageModule)
      },
      {
        path: 'm_autos',
        loadChildren: () => import('../m-autos/m-autos.module').then( m => m.MAutosPageModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('../admin/admin.module').then( m => m.AdminPageModule)
      },
      {
        path: 'ayuda',
        loadChildren: () => import('../ayuda/ayuda.module').then( m => m.AyudaPageModule)
      },
      {
        path: 'detalle-parking',
        loadChildren: () => import('../detalle-parking/detalle-parking.module').then( m => m.DetalleParkingPageModule)
      },
    
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}

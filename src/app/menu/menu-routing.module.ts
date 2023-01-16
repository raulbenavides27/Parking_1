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
        path: 'estacionamiento',
        loadChildren: () => import('../estacionamiento/estacionamiento.module').then( m => m.EstacionamientoPageModule)
      },
      {
        path: 'autos',
        loadChildren: () => import('../autos/autos.module').then( m => m.AutosPageModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('../admin/admin.module').then( m => m.AdminPageModule)
      },
      {
        path: 'ayuda',
        loadChildren: () => import('../ayuda/ayuda.module').then( m => m.AyudaPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}

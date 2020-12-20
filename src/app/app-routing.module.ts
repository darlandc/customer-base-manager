import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersRoutes } from './customers/customers-router.module';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./customers/customers.module')
  //     .then(mod => mod.CustomersModule)
  // },
  {
    path: '',
    redirectTo: '/customers/list',
    pathMatch: 'full'
    },
    ...CustomersRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

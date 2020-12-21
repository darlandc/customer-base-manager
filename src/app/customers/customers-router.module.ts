import { AddComponent, EditComponent, ListComponent } from './';
import { Routes } from '@angular/router';

export const CustomersRoutes: Routes = [
    {
      path: 'customers',
      redirectTo: 'tarefas/list'
    },
    {
      path: 'customers/list',
      component: ListComponent
    },
    {
      path: 'customers/add',
      component: AddComponent
    },
    {
      path: 'customers/edit/:id',
      component: EditComponent
    },
];

import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
        
      }
    ],
    
  }
];

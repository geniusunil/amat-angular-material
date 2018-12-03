import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo:'/dashboard',
      pathMatch:'full',
  },
  {
    path: '',
    
    component: FullComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
        
      }
    ],
    
  },
  
];

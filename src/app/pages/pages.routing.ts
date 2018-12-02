import { Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
export const PagesRoutes: Routes = [{
  path: '',
  component: DashboardComponent,
 
},
{
  path: 'calendar',
  component : CalendarComponent,
}
];

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PagesComponent } from './pages.component';
import { PagesRoutes } from './pages.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(PagesRoutes)
  ],
  declarations: [PagesComponent, DashboardComponent, CalendarComponent]
})
export class PagesModule {}

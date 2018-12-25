import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PagesComponent } from './pages.component';
import { PagesRoutes } from './pages.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { AccountingComponent } from './accounting/accounting.component';
import { HrComponent } from './hr/hr.component';
import { ReportsComponent } from './reports/reports.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { SurveyComponent } from './survey/survey.component';
import { ClientComponent } from './client/client.component';
import { VendorComponent } from './vendor/vendor.component';
import { TasksComponent } from './tasks/tasks.component';
import { SalesComponent } from './sales/sales.component';
import { SupportComponent } from './support/support.component';
import { FeatherIconsPipe } from '../feather-pipe';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(PagesRoutes),
    SharedModule
    // AppModule
  ],
   exports:[
    DashboardComponent
  ], 
  declarations: [PagesComponent,
     DashboardComponent,
      CalendarComponent,
       MailboxComponent,
        DiscussionComponent,
        AccountingComponent, 
        HrComponent, 
        ReportsComponent,
         UtilitiesComponent, 
         SurveyComponent,
         ClientComponent ,
         VendorComponent,
         TasksComponent,
         SalesComponent,
         SupportComponent, 
    ]
  
})
export class PagesModule {}

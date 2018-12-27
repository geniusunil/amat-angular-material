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
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../../app/app.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

// import { DashboardDirective } from './dashboard.directive';
// import { HighlightDirective } from './dashboard/highlight.directive';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(PagesRoutes),
    SharedModule,

    FormsModule,
    // AppModule

    NgCircleProgressModule.forRoot({
      // set defaults here 
     
      radius: 60,
      space: -10,
      outerStrokeWidth: 10,
      outerStrokeColor: "#30c454",
      innerStrokeColor: "#e7e8ea",
      innerStrokeWidth: 10,
      title: "5%",
      animateTitle: false,
      animationDuration: 1000,
      showUnits: false,
      showBackground: false,
      clockwise: false,
      startFromZero: false
    })
  

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
        
    ],
    providers: [],
 
})
export class PagesModule {}

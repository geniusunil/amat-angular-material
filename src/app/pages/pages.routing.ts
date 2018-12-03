import { Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { ClientComponent } from './client/client.component';
import { VendorComponent } from './vendor/vendor.component';
import { TasksComponent } from './tasks/tasks.component';
import { SalesComponent } from './sales/sales.component';
import { SupportComponent } from './support/support.component';
import { AccountingComponent } from './accounting/accounting.component';
import { HrComponent } from './hr/hr.component';
import { ReportsComponent } from './reports/reports.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { SurveyComponent } from './survey/survey.component';
/* import { AccountingComponent } from './accounting/accounting.component';
import { HrComponent } from './hr/hr.component';
import { ReportsComponent } from './reports/reports.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { SurveyComponent } from './survey/survey.component'; */
// import { VendorComponent } from './vendor/vendor.component';
export const PagesRoutes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent,
},
{
  path: 'calendar',
  component : CalendarComponent,
},
{
  path: 'discussion',
  component : DiscussionComponent,
},
{
  path: 'mailbox',
  component : MailboxComponent,
},
{
  path: 'client',
  component : ClientComponent,
},
{
  path: 'vendor',
  component : VendorComponent,
},
{
  path: 'tasks',
  component : TasksComponent,
},
{
  path: 'sales',
  component : SalesComponent,
},
{
  path: 'support',
  component : SupportComponent,
} ,
{
  path: 'accounting',
  component : AccountingComponent,
},
{
  path: 'hr',
  component : HrComponent,
},
{
  path: 'reports',
  component : ReportsComponent,
},
{
  path: 'utilities',
  component : UtilitiesComponent,
},
{
  path: 'survey',
  component : SurveyComponent,
}
];

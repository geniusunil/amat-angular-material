import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { PagesComponent } from './pages/pages.component';
import { ClientComponent } from './pages/client/client.component';
import { VendorComponent } from './pages/vendor/vendor.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { SalesComponent } from './pages/sales/sales.component';
import { SupportComponent } from './pages/support/support.component';
import { IconsModule } from './icons/icons.module';
/* import { HrComponent } from './pages/hr/hr.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SurveyComponent } from './pages/survey/survey.component';
// import { AccountingComponent } from './pages/accounting/accounting.component';
import { UtilitiesComponent } from './pages/utilities/utilities.component'; */

// import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    /* ClientComponent,
    VendorComponent,
    TasksComponent,
    SalesComponent,
    SupportComponent, */
    
    /* HrComponent,
    ReportsComponent,
    UtilitiesComponent,
    SurveyComponent */
    // PagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    NgScrollbarModule,
    IconsModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
      
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

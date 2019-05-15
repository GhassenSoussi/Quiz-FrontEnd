import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { CalendarModule, } from 'angular-calendar';
import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from '../main-layout/footer/footer.component';
import { StatsCardComponent } from './dashboards/common/stats-card/stats-card.component';
import { StatsCard2Component } from './dashboards/common/stats-card2/stats-card2.component';
import { Dashboard1Component } from './dashboards/dashboard1/dashboard1.component';
import { UsersListComponent } from './users-management/users-list/users-list.component';
import { UserAddComponent } from './users-management/user-add/user-add.component';
import { UserUpdateComponent } from './users-management/user-update/user-update.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: ''
    }),
    CalendarModule.forRoot()
  ],
  declarations: [
    FooterComponent,
    StatsCardComponent,
    StatsCard2Component,
    Dashboard1Component,
    UsersListComponent,
    UserAddComponent,
    UserUpdateComponent
  ],
  exports: [
    FooterComponent,
    StatsCardComponent,
    StatsCard2Component,
    Dashboard1Component
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }

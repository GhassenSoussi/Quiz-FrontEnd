import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersManagementRoutingModule } from './users-management-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserUpdateComponent } from './user-update/user-update.component';

@NgModule({
  declarations: [UsersListComponent, UserAddComponent, UserUpdateComponent],
  imports: [
    CommonModule,
    UsersManagementRoutingModule,
  ]
})
export class UsersManagementModule { }

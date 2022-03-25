import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListsComponent } from './users-lists/users-lists.component';
import { UsersFormComponent } from './users-form/users-form.component';

import { UsersService } from './services/users.service';
import { UserFilterPipe } from './pipes/user-filter.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    UsersListsComponent,
    UsersFormComponent,
    UserFilterPipe,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    OverlayModule
  ],
  providers: [
    UsersService,

  ]
})
export class UsersModule { }

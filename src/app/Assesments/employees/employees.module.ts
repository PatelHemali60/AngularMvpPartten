import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

import { SupportService } from './services/support.service';
import { EmployeesService } from './services/employees.service';
import { SearchPipe } from './pipe/search.pipe';
import { ModelModule } from 'src/app/model/model.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeFormComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ModelModule,
    SharedModule,

  ],
  providers: [
    SupportService,
    EmployeesService
  ]
})
export class EmployeesModule { }

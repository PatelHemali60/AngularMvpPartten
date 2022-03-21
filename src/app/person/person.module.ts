import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonService } from './person.service';


@NgModule({
  declarations: [
    PersonComponent,
    PersonListComponent,
    PersonFormComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,ReactiveFormsModule
  ],
  providers:[PersonService]
  
})
export class PersonModule { }

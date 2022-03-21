import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Person } from './person.model';


@Injectable()

export class PersonService {

  public subject$ = new Subject<Person>();
 public EditData$ = new Subject<Person>();

  constructor() { }


//creat methods using subject
  sendData(data: Person){
   return this.subject$.next(data)
  }

  editdata(data : Person){
    return this.EditData$.next(data)
  }
  

 
}

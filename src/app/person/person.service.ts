import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private subject = new Subject<any>();

  constructor() { }


  sendData(data:any){
   return this.subject.next(data)
 
  }
  

  receivedData(): Observable<string>{
   return this.subject.asObservable()
  }
}

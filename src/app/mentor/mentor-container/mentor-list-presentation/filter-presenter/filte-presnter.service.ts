import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { FilterForm } from 'src/app/mentor/mentor.model';

@Injectable()
export class FiltePresnterService {

  private filter: Subject<FilterForm>;
  public filter$: Observable<FilterForm>;

  constructor(private fb:FormBuilder) { 
  
    this.filter = new Subject();

    this.filter$ = this.filter.asObservable();

  }

  public buildForm() {
    return this.fb.group({
      name: [''],
      email: [''],
      age: [''],
      gender: ['']
    })
  }

  //onsubmit get vlaue of form
  public onFormSubmit(form: FormGroup) {
    // if (!form.valid) {
    //   return;
    // }

    return this.filter.next(form.value);
  }



}

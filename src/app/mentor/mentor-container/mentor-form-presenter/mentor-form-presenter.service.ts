import { Injectable } from '@angular/core';
import { mentorForm } from '../../mentor.model';
import { FormBuilder, FormGroup ,  Validators} from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MentorFormPresenterService {
  
  
  public mentorFormData: Subject<mentorForm>;
  public mentorFormData$: Observable<mentorForm>;

  constructor( private fb: FormBuilder) { 
   
    this.mentorFormData = new Subject();
   
    this.mentorFormData$ = this.mentorFormData.asObservable();
  }

  public buildForm() {
    return this.fb.group({
      name: [null, [Validators.required]],
      age: [null, [Validators.required , Validators.maxLength(2)]],
      gender: [null, [Validators.required]]
    })
  }

  public onFormSubmit(form: FormGroup) {
    if (!form.valid) {
      return;
    }

    this.mentorFormData.next(form.value);
  }
}

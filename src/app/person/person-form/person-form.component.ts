import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../person.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  personForm: FormGroup;
  isFormSubmitted : boolean = false;


  constructor(private dataservice: PersonService, private fb: FormBuilder) {
    // this.isFormSubmitted = false;
    this.personForm = this.buildForm();
    // this.onSubmit();
     

  }

  ngOnInit(): void {
    //from service subject is acceseble here for using subject do next
    this.dataservice.EditData$.subscribe(res => {
      this.personForm.patchValue(res);
      console.log(res);
    })
  }

  public buildForm() {
    return this.fb.group({
      name: [null, [Validators.required]],
      age: [null, [Validators.required, Validators.maxLength(2)]],
      gender: [null, [Validators.required]]
    })
  }

  onSubmit() {
    this.isFormSubmitted = true;
    this.dataservice.sendData(this.personForm.value)
    this.reset();

  }

  get FormControl(){
    return this.personForm.controls;
  }

 


  //reset form
  public reset() {
    this.personForm.reset()
  }

}

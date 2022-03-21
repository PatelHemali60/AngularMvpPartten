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


  constructor(private dataservice: PersonService, private fb: FormBuilder) {
    this.personForm = this.buildForm();
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
   
    this.dataservice.sendData(this.personForm.value)
    this.reset();

  }

  // Edit Data
  public editData(){
   
  }

  // public EditData(){
  //   this.dataservice.EditData$.subscribe((res)=>{
  //     this.
  //   })
  // }


  //reset form
  public reset() {
    this.personForm.reset()
  }

}

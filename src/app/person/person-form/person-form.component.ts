import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  personForm : FormGroup ;

  constructor(private dataservice:PersonService , private fb:FormBuilder) { 
    this.personForm = this.buildForm();
  }

  ngOnInit(): void {
  }

  public buildForm() {
    return this.fb.group({
      name: [null, [Validators.required]],
      age: [null, [Validators.required , Validators.maxLength(2)]],
      gender: [null, [Validators.required]]
    })
  }

  onSubmit(){
    this.dataservice.sendData(this.personForm.value);

  }

}

import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, EventEmitter, Input,  Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MentorFormPresenterService } from '../mentor-form-presenter/mentor-form-presenter.service';
import { mentors , mentorForm} from '../../mentor.model';



@Component({
  selector: 'app-mentor-form-presentation',
  templateUrl: './mentor-form-presentation.component.html',
  styleUrls: ['./mentor-form-presentation.component.scss'],
  viewProviders: [MentorFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MentorFormPresentationComponent implements OnInit {

  // public mentorForm : mentorForm[] = [];


  /** setter for user data */
  @Input() public set mentorData(value: mentors) {
    if (value) {
      this.formTitle = 'Edit User';
      this._mentorData = value;
      this.mentorForm.patchValue(value);
    }
  }
  public get mentorData(): mentors {
    return this._mentorData;
  }

  /** emitter to emit cancel event */
  @Output() public cancel: EventEmitter<Date>;
  /** emitter to emit add mentor data */
  @Output() public add: EventEmitter<mentorForm>;
  /** emitter to emit edit mentor data */
  @Output() public edit: EventEmitter<mentorForm>;
  
  /** t=tile of form */
  public formTitle: string;
  /** user form */
  public mentorForm: FormGroup;
  /** boolean to check if form has been submitted */
  public isFormSubmitted: boolean;

  /** user data */
  private _mentorData!: mentors;


  /** inject service */
  constructor(
    private mentorFormservice : MentorFormPresenterService
  ) {
    this.cancel = new EventEmitter();
    this.add = new EventEmitter();
    this.edit = new EventEmitter();
    this.formTitle = 'Add Mentor';
    this.mentorForm = this.mentorFormservice.buildForm();
    this.isFormSubmitted = false;

   }

  ngOnInit(): void {

    this.mentorFormservice.mentorFormData$.subscribe((res : mentorForm)=>{
      debugger
      if (this.formTitle === 'Add Mentor') {
        this.add.emit(res);
      } else {
        this.edit.emit(res);
      }
      
    })
  }

   /** on submit button click */
   public onSubmit() {
    this.isFormSubmitted = true;
    this.mentorForm.value.name = this.mentorForm.value.name.trim();
    // console.log(this.mentorForm.value)

    this.mentorFormservice.onFormSubmit(this.mentorForm);
  }

  /** on cancel button click */
  public onCancel() {
    this.cancel.emit(new Date());
  }

  get mentorFormControl(){
    return this.mentorForm.controls;
  }


}

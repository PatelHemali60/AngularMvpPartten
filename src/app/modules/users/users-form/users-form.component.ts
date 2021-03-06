import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../models/dept.model';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Event, Router } from '@angular/router';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit {

  @Output() cancel : EventEmitter<Event>;
  @Output() onSubmitData: EventEmitter<Event>

  public userForm: FormGroup;
  public departments: Department[];
  private id: number;
  private isAddMode: boolean;

  constructor(private fb: FormBuilder, private usersService: UsersService, private router: Router, private route: ActivatedRoute,) {
    this.userForm = this.buildUsersForm();
    this.departments = [];
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.cancel = new EventEmitter<Event>()
    this.onSubmitData = new EventEmitter<Event>()
  }


  //On init get department list and ckeck if its addMode
  ngOnInit(): void {
    this.getDepartmentList();
    if (!this.isAddMode) {
      this.usersService.getById(this.id).subscribe(x => this.userForm.patchValue(x));
    }
  }

  //Reactive Form
  private buildUsersForm(): FormGroup {
    return this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phoneNo: [null, [Validators.required, Validators.minLength(10)]],
      gender: [null, Validators.required],
      doj: [null, Validators.required],
      department: [1, Validators.required],
    });
  }


  //get department list from db
  private getDepartmentList(): void {
    this.usersService.getDepartments().subscribe({
      next:(data: Department[]) => {
        this.departments = data;
      },
      error:(e) => console.log(e)
    });
  }


  //on Form submit
  public onSubmit(): void {
    console.log('fgdfgd')
    if (this.isAddMode) {
      this.createUser();
    }
    else {
      this.updateUser();
    }
  }


  //Post data to db
  public createUser(): void {
    this.usersService.createUser(this.userForm.value).subscribe({
      next:() => {
        // alert("New User Creadted");
        this.onSubmitData.emit(this.userForm.value);
        this.navigateToList();
      },
      error:(e) => console.log(e)
    });
  }

  //Put data to db
  public updateUser(): void {
    this.usersService.updateUser(this.id, this.userForm.value).subscribe({
      next: () => {
        alert("User Updated");
        this.navigateToList();
      },
      error: (e) => console.log(e)
    })
  }

  //route to users list
  public navigateToList(): void {
    this.router.navigate(['/users'])
  }

  //Rest to form controls
  onRest() {
    this.userForm.reset();
  }

  onCancel(){
    this.cancel.emit();
  }
}

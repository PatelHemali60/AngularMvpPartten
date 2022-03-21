import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AfterContentInit, AfterViewInit, Component, ComponentRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { EmployeeFormComponent } from 'src/app/Assesments/employees/components/employee-form/employee-form.component';
import { ModalpopupComponent } from 'src/app/shared/components/modalpopup/modalpopup.component';
import { Department } from '../models/dept.model';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { UsersFormComponent } from '../users-form/users-form.component';

@Component({
  selector: 'app-users-lists',
  templateUrl: './users-lists.component.html',
  styleUrls: ['./users-lists.component.scss']
})
export class UsersListsComponent implements OnInit {

  public myUsers: User[];
  public departments: Department[];
  public searchText: string;

  public currentPage: number;
  public dataPerPage: number;


  constructor(private router: Router, private usersServices: UsersService, private overlay: Overlay) {
    this.myUsers = [];
    this.departments = [];
    this.searchText = "";
    this.currentPage = 1;
    this.dataPerPage = 8;

  }

  //On Component Init Load User data
  ngOnInit(): void {
    this.getDepartmentList();
    this.getUserList();
  }

  //get department list from db
  private getDepartmentList(): void {
    this.usersServices.getDepartments().subscribe({
      next: (data: Department[]) => {
        this.departments = data;
      },
      error: (e) => console.error(e),
    });
  }

  //get user list from db
  private getUserList(): void {
    this.usersServices.getUsers().subscribe({
      next: data => this.myUsers = data,
      error: e => console.error(e),
    })
  }

  //Delete user from db and Update user list
  public deleteUser(id: number): void {
    // debugger
    this.usersServices.deleteUser(id).subscribe({
      next: () => this.getUserList(),
      error: (e) => console.error(e),
    })

  }

  public delelteModel(id: number) {
    this.openConfirmationmodel(id);
  }


  // componentRef : ComponentRef<UsersFormComponent>;

  //overlay for display form
  public navigateToForm(): void {
    console.log('hello');
    // this.router.navigate(['/users/add'])
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().right()

    });

    const Formcomponent = new ComponentPortal(UsersFormComponent);
    const componentRef = overlayRef.attach(Formcomponent);

    // componentRef.instance.onSubmit.subscribe(()=> {
    //   this.getUserList();
    // });

    componentRef.instance.cancel.subscribe(() => {
      overlayRef.detach();
    })
  }


  //creat overlay for confirmation model
  public openConfirmationmodel(id: number): void {
    const overlaymodal = this.overlay.create({
      hasBackdrop: false,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()

    });

    //variable define for confirmation model popup
    const modelcomponet = new ComponentPortal(ModalpopupComponent);
    const confirmationModel = overlaymodal.attach(modelcomponet);

    confirmationModel.instance.id = id;
    confirmationModel.instance.delete.subscribe((name) => {
      if (name === "delete")
        this.deleteUser(id);

      overlaymodal.detach();

    });


  }



  // displayConfirmation(id: number) {
  //   console.log("okk");

  //   this.overlayRef = this.overlay.create({
  //     hasBackdrop: true,
  //     positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
  //   });

  //   const component = new ComponentPortal(DeleteComponent);
  //   this.confirmationRef = this.overlayRef.attach(component);

  //   this.confirmationRef.instance.id = id;
  //   this.confirmationRef.instance.delete.subscribe((name) => {
  //     if(name === "delete")
  //     this.deleteEmployee(id);
  //     this.overlayRef.detach();
  //   });
  // }



  //

  // //setCurrentPage
  // public setCurrentPage(pageNo: number) {
  //   this.currentPage = pageNo;
  // }
}

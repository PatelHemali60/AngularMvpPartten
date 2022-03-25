import { Component } from '@angular/core';
import { Student } from './model/student';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  ParentTitle = "parent Component";

  constructor() { 
    
  }

  //property for child component one
  stdmsg = 'Students Leader Deatils';
 

  //property for parent
  stdFullname = '';
  email = '';
  msg = '';

  //property for child one
  cityMsg = 'Indian City Names';
  cityArray = ['Gujart', 'Odisha', 'Mumbai'];
  stdAddMsg = 'Add Student';

  //for student deatils
  saveDetail(std: Student) {
    this.stdFullname = std.fname + ' ' + std.lname;
    this.email = std.email ;
  }

  //priting message
  printMsg(msg: string) {
    this.msg = msg;
  }


}

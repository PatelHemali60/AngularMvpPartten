import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent {

  constructor() { }

  //forcity msg
  @Input() ctMsg: string = '';

  //input for city array
  @Input('ctArray') myctArray = {} as Array<string>;


  // for students msg
  @Input('studentAddMsg') addMsg: string = '';

  //form parent we use ouput for use data we do event emit
  @Output('addStudentEvent') addStdEvent = new EventEmitter<Student>();

  @Output() sendMsgEvent = new EventEmitter<string>();


  student = new Student(  '','' ,'');
  //showing title
  childTitle = '-----Child Component----';

  //showing title
  message = 'Send Mesage'
  msg = '';

  addStudent() {
    this.addStdEvent.emit(this.student);
  }

  // for msg display
  sendMsg() {
    this.sendMsgEvent.emit(this.msg);
  }

  getVal(obj: EventTarget | null) {
    return (<HTMLInputElement>obj).value;
  }

}

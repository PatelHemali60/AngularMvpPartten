import { Component, OnInit } from '@angular/core';

import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  person: Person[] = [];
  public Editstatus: boolean = true;
  public activateid: number;

  data: any;


  constructor(private dataService: PersonService) {
    this.activateid = 0;

  }

  ngOnInit(): void {
    this.getData();
  }

  public getData() {


    this.dataService.subject$.subscribe((res) => {
      if (this.Editstatus) {
        this.person[this.activateid] = res;
        this.Editstatus = false;
      }
      else {
        this.person.push(res)

      }
    })
  }

  //get edit 
  public edit(i: number) {
    // debugger

    this.dataService.EditData$.next(this.person[i]);
    this.activateid = i;
    this.Editstatus = true;
  }

  public deleteData(i: number) {

    this.person.splice(i, 1);
    console.log(this.person);
  }



  // this.dataService.receivedData().subscribe((msg)=>{
  //   console.log(msg);
  //   this.person.push(msg) ;
  // })
}






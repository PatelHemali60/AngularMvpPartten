import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  person = [{
    "name": "hemali",
    "age" : "23",
    "gender" : "female" ,
  }]

  data:any;
  

  constructor(private dataService:PersonService) { }

  ngOnInit(): void {
    this.dataService.receivedData().subscribe((msg)=>{
      console.log(msg);
      this.person.push(msg) ;
    })
  }

}

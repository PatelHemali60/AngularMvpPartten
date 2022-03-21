import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ngtemplate-demo',
  templateUrl: './ngtemplate-demo.component.html',
  styleUrls: ['./ngtemplate-demo.component.scss']
})

export class NgtemplateDemoComponent implements OnInit {


title:string='Ngtemplate demo';
title2:string='ng-template with directive ngFor'
  students = [
    { name:"hemali",stream:"science" },
    { name:"piku",stream:"commerce" },
    { name:"hinal",stream:"Humanities" },
    { name:"Aditi",stream:"commerce" },
    { name:"himani",stream:"commerce" },
    { name:"priyanka",stream:"commerce" },
    { name:"dhruvi",stream:"science" },
   ]

  constructor() { }

  ngOnInit(): void {
  }

}

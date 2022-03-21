import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.css']
})
export class CurrencyTableComponent implements OnInit {

  amount:number = 100;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo-ng-template-outlet',
  templateUrl: './demo-ng-template-outlet.component.html',
  styleUrls: ['./demo-ng-template-outlet.component.scss']
})
export class DemoNgTemplateOutletComponent implements OnInit {

  @ViewChild('cardTemplate', { static: true }) cardTemplate!: TemplateRef<HTMLElement> ;
  @ViewChild('listTemplate', { static: true }) listTemplate!: TemplateRef<HTMLElement> ;

  constructor() { }

  ngOnInit(): void {
  }

  mode = "cardView"

  public items = [
    {
      header: 'Mobile',
      content: 'The mobile phone can be used to communicate over long distances without wires. '
    },
    {
      header: 'Tablet',
      content: 'A tablet is a wireless, portable personal computer with a touchscreen interface'
    },
    {
      header: 'computer',
      content: 'A computer is a digital electronic machine '
    },
  ];

  modeOptions = [
    { mode: "cardView" },
    { mode: "listView" },
  ];

  // Get template
  get template() {
    if (this.mode == "listView") {
      return this.listTemplate
    } else {
      return this.cardTemplate
    }
  }

}
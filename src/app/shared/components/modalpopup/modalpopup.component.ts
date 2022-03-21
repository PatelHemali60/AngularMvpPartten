
import { Component, OnInit  ,EventEmitter , Input, Output } from '@angular/core';


@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.scss']
})
export class ModalpopupComponent implements OnInit {

@Input() id: number | undefined;
@Output() delete :EventEmitter<any>;

  constructor() { 
    this.delete =  new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  onDelete(data : string){
    this.delete.emit(data);
  }

}



// export class DeleteComponent implements OnInit {
//   @Input() id: number;
//   @Output() delete : EventEmitter<string>;

//   constructor() { 
//     this.delete = new EventEmitter<string>();
//   }

//   ngOnInit(): void {
//   }

//   onClose(name: string){
//     this.delete.emit(name);
//   }

// }
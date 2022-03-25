import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Data } from '@angular/router';
import { FilterForm } from 'src/app/mentor/mentor.model';
import { FiltePresnterService } from '../filter-presenter/filte-presnter.service';

@Component({
  selector: 'app-filter-presentation',
  templateUrl: './filter-presentation.component.html',
  styleUrls: ['./filter-presentation.component.scss'],
  providers : [FiltePresnterService],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class FilterPresentationComponent implements OnInit {


  //decalring formgrpup
  public ListForm: FormGroup;


  @Output() public cancel : EventEmitter<Data>;
  /** emitter to emit add mentor data */
  @Output() public addData: EventEmitter<FilterForm>;

  constructor(private filterService: FiltePresnterService) {

    
    this.ListForm = this.filterService.buildForm();
    this.addData = new EventEmitter<FilterForm>();
    this.cancel =new EventEmitter<any>();
    this.ListForm = this.filterService.buildForm();
    
  }

  ngOnInit(): void {
    this.filterService.filter$.subscribe((res)=>{
      // debugger
      console.log(res);
      this.addData.emit(res);
      

    })
    
  }

  //filter form submit
  FormFiltersubmit() {
   
    //subscibe here
   this.filterService.onFormSubmit(this.ListForm);

  }

   /** on cancel button click */
   public onCancel() {
    // this.emit(new Date());
    this.cancel.emit();
  }


}

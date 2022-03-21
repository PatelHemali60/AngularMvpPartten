import { Component, ComponentRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, observable, Subject, take, takeUntil } from 'rxjs';
import { mentors, mentorForm, MentorEditDetails } from '../mentor.model';
import { MentorService } from '../mentor.service';
import { MentorFormPresentationComponent } from './mentor-form-presentation/mentor-form-presentation.component';

import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { MentorListPrenterService } from './mentor-list-presnter/mentor-list-prenter.service';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-mentor-container',
  templateUrl: './mentor-container.component.html',
  styleUrls: ['./mentor-container.component.scss']
})
export class MentorContainerComponent implements OnInit {

  //var create for store list
  public mentorList$ : Observable<mentors[]>

  constructor(private _mentorService : MentorService) {
    
    this.mentorList$ = new Observable();
   
   }

  ngOnInit(): void {
   
    this.mentorList$ = this._mentorService.getMentors()
  }



  /** for delete mentor subscibe here */
  public deleteMentor(id: number) {
    this._mentorService.deleteMentor(id).subscribe(
      (res) => {
        
        alert('mentor Deleted Successfully');
      }
    )
  }

   /** for add  mentor subscibe here */
  public addmentor(data: mentorForm) {
    this._mentorService.addMentor(data).subscribe(
      (res) => {
        this.mentorList$ = this._mentorService.getMentors()
        alert('Mentor Added Successfully')
      }
    )
  }

  public editMentor(data: MentorEditDetails) {
    this._mentorService.editMentor(data.mentorForm, data.id).subscribe(
      (res) => {
        this.mentorList$ = this._mentorService.getMentors()
        alert('User Edited Successfully')
      }
    )
  }
  


}

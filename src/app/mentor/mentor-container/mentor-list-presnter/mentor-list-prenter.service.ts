import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, Output } from '@angular/core';
import {  observable, Observable, Subject, take } from 'rxjs';
import { FilterForm, mentors } from '../../mentor.model';
import { FilterPresentationComponent } from '../mentor-list-presentation/filter-presentation/filter-presentation.component';

@Injectable()
export class MentorListPrenterService {


  private  FILTER : Subject<FilterForm>;
  public Filter$ : Observable<FilterForm>;

  private delete: Subject<number>;
  public delete$: Observable<number>;

  
  // private $filterdata :Subject<FilterForm>;



  deleteMentor(id: number) {
    throw new Error('Method not implemented.');
  }


  constructor(private overlay: Overlay) {

    this.delete$ = new Observable();
    this.delete = new Subject();


    this.delete$ = this.delete.asObservable();
    this.delete.subscribe()

    this.Filter$ = new Observable();
    this.FILTER = new Subject();

    this.Filter$ = this.FILTER.asObservable();

  }

  public deletementor(id: number) {
    this.delete.next(id);
  }

  /**
  * get filtered list based on search term
  * @param mentorList mentor list
  * @param searchItem search term
  * @returns filtered list
  */

  public getFilteredList(mentorList: mentors[], searchItem: string): mentors[] {
    return mentorList?.filter((mentors: mentors) => {
      if (
        mentors.id?.toString().includes(searchItem) ||
        mentors.name?.toLowerCase().includes(searchItem) ||
        mentors.email?.toLowerCase().includes(searchItem) ||
        mentors.age?.toLowerCase().includes(searchItem) ||
        mentors.gender?.toLowerCase().includes(searchItem)
      ) {
        return mentors;
      }
      return false;
    });
  }


  //ovelay openlist

  public openFilterForm() {

    let componentRef: ComponentRef<FilterPresentationComponent>;
    let overlayRef: OverlayRef;
    // set overlay config
    let overlayConfig: OverlayConfig = new OverlayConfig();
    overlayConfig.hasBackdrop = true;


    // create overlay reference
    overlayRef = this.overlay.create(overlayConfig);
    const portal: ComponentPortal<FilterPresentationComponent> = new ComponentPortal<FilterPresentationComponent>(FilterPresentationComponent);
    // attach overlay with portal
    componentRef = overlayRef.attach(portal);

    // listen to cancel 

    componentRef.instance.cancel.subscribe((res) => {
      overlayRef.detach();
    })

    //add form data
    componentRef.instance.addData.subscribe((res) => {
     console.log(res);
     this.FILTER.next(res);
    })

    // debugger

  }









}

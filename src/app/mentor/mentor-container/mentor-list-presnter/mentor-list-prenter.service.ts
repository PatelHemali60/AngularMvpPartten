import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, Output } from '@angular/core';
import { observable, Observable, Subject, take } from 'rxjs';
import { FilterForm, mentorForm, mentors } from '../../mentor.model';
import { FilterPresentationComponent } from '../mentor-list-presentation/filter-presentation/filter-presentation.component';

@Injectable()
export class MentorListPrenterService {


  private FILTER: Subject<mentors[]>;
  public Filter$: Observable<mentors[]>;

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
        mentors.age ||
        mentors.gender?.toLowerCase().includes(searchItem)
      ) {
        return mentors;
      }
      return false;
    });
  }


  //ovelay openlist

  public openFilterForm(currentList: mentors[]) {

    console.log(currentList, 'prenster');

    let componentRef: ComponentRef<FilterPresentationComponent>;
    let overlayRef: OverlayRef;
    // set overlay config
    let overlayConfig: OverlayConfig = new OverlayConfig();

    overlayConfig.hasBackdrop = true;
    overlayConfig.positionStrategy = this.overlay.position().global().centerHorizontally().right()


    // create overlay reference
    overlayRef = this.overlay.create(overlayConfig);
    const portal: ComponentPortal<FilterPresentationComponent> = new ComponentPortal<FilterPresentationComponent>(FilterPresentationComponent);
    // attach overlay with portal
    componentRef = overlayRef.attach(portal);

    // listen to cancel 

    componentRef.instance.cancel.subscribe((res) => {
      overlayRef.detach();
    })

    //add form data write logic for filter data in presenter
    componentRef.instance.addData.subscribe((newList: mentors[]) => {
     
     
      console.log(newList);

      let dataKey = Object.keys(currentList[0]);

      let newListData = [...currentList];

      //  let listData = newList ;
      //logic for filter list
      dataKey.forEach((item: any) => {
        if (newList[item]) {
          console.log(newList[item])
          newListData = newListData.filter((data: any) => {
            console.log(data[item])
            return data[item] == newList[item]
          });
        }
      });


      this.FILTER.next(newListData);
      overlayRef.detach();
    })

    // debugger

  }









}

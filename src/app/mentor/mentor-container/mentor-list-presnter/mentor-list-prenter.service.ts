import { Injectable } from '@angular/core';
import { Observable, observable, Subject } from 'rxjs';
import { mentors } from '../../mentor.model';

@Injectable()
export class MentorListPrenterService {
 
  private delete : Subject<number>;
  public delete$: Observable<number>;
 
  deleteMentor(id: number) {
    throw new Error('Method not implemented.');
  }
 

  constructor() {
    this.delete$ = new Observable();
    this.delete = new Subject();

   
    this.delete$ = this.delete.asObservable();
    this.delete.subscribe()
   }

   public deletementor(id: number){
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
          mentors.age?.toLowerCase().includes(searchItem) ||
          mentors.gender?.toLowerCase().includes(searchItem)
        ) {
          return mentors;
        }
        return false;
      });
    }


}

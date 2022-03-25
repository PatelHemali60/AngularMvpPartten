import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mentorForm, mentors } from './mentor.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class MentorService {

  baseurl = environment.baseURL;

  constructor(
    private http: HttpClient
  ) { }


  /** get department list */
  // getDepartments(): Observable<Department[]> {
  //   return this.http.get<Department[]>(`${this.apiLink}/departments`);
  // }

  /**
   * api to get list of users
   * @returns user list as observable
   */
  getMentors(): Observable<mentors[]> {
    // let url = 'http://localhost:3000/mentors';
    return this.http.get<mentors[]>(`${this.baseurl}/mentors`);
  
  }

  /**
   * api to delete user
   * @param id user id
   */
  deleteMentor(id: number) {
    return this.http.delete<number>(`${this.baseurl}/mentors/${id}`);

  }

  /**
   * api to add user
   * @param postObj object to post on server
   */
  addMentor(postObj: mentorForm): Observable<mentorForm> {
    return this.http.post<mentorForm>(`${this.baseurl}/mentors`, postObj);
  }

  /**
   * api to edit user
   * @param postObj object to post on server
   * @param id user id
   */
  editMentor(postObj: mentorForm, id: number): Observable<any> {
    return this.http.put<any>(`${this.baseurl}/mentors/${id}`, postObj);
  }
}

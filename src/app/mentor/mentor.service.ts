import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  mentorForm, mentors } from './mentor.model';

@Injectable()
export class MentorService {

  constructor(
    private http: HttpClient
  ) { }
  
  /**
   * api to get list of users
   * @returns user list as observable
   */
  getMentors(): Observable<mentors[]> {
    let url = 'http://localhost:3000/mentors';
    return this.http.get<mentors[]>(url);
  }

  /**
   * api to delete user
   * @param id user id
   */
   deleteMentor(id: number) {
    let url = `http://localhost:3000/mentors/${id}`;
    return this.http.delete(url);
  }

  /**
   * api to add user
   * @param postObj object to post on server
   */
   addMentor(postObj: mentorForm): Observable<mentorForm> {
    let url = 'http://localhost:3000/mentors';
    return this.http.post<mentorForm>(url, postObj);
  }

  /**
   * api to edit user
   * @param postObj object to post on server
   * @param id user id
   */
   editMentor(postObj: mentorForm, id: number): Observable<any> {
    let url = `http://localhost:3000/mentors/${id}`;
    return this.http.put<any>(url, postObj);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor( ) { 
    // debugger
    //dumy token
    localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNTM0NTQzNTQzNTQzNTM0NTMiLCJleHAiOjE1MDQ2OTkyNTZ9.zG-2FvGegujxoLWwIQfNB5IT46D-xC4e8dEDYwi6aRM');
    // sessionStorage.setItem('token','amuagiudgaid.goagdoiagl.dgaldg');
  }
  
  getToken(){
    return localStorage.getItem('token');
  }
  removeToken(){
    return localStorage.removeItem('token');
  }
}

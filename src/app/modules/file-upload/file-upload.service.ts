import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {


   baseurl = environment.baseURL;


  // private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


//  upload(file: any): Observable<HttpEvent<any>> {
//  debugger
// const formData: FormData = new FormData();
// formData.append('file', file.name , file.size);
// formData.append('file' ,file);
// console.log(file, 'file upload here');
// console.log(file.name, 'file name');
// console.log(file.size, 'file size');
// console.log(file.type, 'file type');
// formData.append('name', this.);
// formData.append('size', );

// const config:any = {
//   headers: {
//     'content-type': 'multipart/form-data'
//   }
   
  // const req = new HttpRequest('POST', `${this.baseurl}/upload`, formData, {

  //     reportProgress: true,
  //     responseType: 'json'
  //   });
  //   debugger
  //   return this.http.request(req);
 
  // }
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseurl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    debugger
    return this.http.request(req);

  }


  getFiles(): Observable<any> {
    return this.http.get(`${this.baseurl}/files`);
  }
}


  

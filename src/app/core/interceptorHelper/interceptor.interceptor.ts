import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../TokenServices/token.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private tokenservice:TokenService) {
    // debugger
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<string>> {

    const tokenReq = request.clone({
    
      setHeaders:{
      
        Authorization:`Bearer ${this.tokenservice.getToken()}`
      }
    })
    return next.handle(tokenReq);
  }   

}

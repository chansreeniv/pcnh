import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../assets/api-path';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const reqClone = request.clone({
      setHeaders:{
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDlkNDdjNzcyMDk3Zjc4YWMyYjliNyIsImlhdCI6MTY0OTAwNjQ4MCwiZXhwIjoxNjUxNTk4NDgwfQ._PW3BP9TYpzYhoad94MRe08mM4dmpHQNnBg8e7Rno7c`
      }
    });

    if(request.url === `${environment.baseUrl}${ApiPaths.login}` || request.url === `${environment.baseUrl}${ApiPaths.register}`){
      console.log(request);
      return next.handle(request);
    }

    console.log(reqClone);
    return next.handle(reqClone);
  }
}

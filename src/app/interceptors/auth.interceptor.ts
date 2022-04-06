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
    const token = localStorage.getItem('loginToken');
    const reqClone = request.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    });

    if(request.url === `${environment.baseUrl}${ApiPaths.login}` || request.url === `${environment.baseUrl}${ApiPaths.register}`){
      console.log(request);
      return next.handle(request);
    }

    return next.handle(reqClone);
  }
}

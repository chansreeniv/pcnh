import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }



  getConfig(){
    return this.http.get("http://localhost:8080");
  }
}

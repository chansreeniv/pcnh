import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PatientData } from '../assets/patient.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreResponseService {
  dbResponse = new Subject<PatientData[]>();
  createData = new Subject<PatientData>();
  constructor() { }

  sortResponse(response: PatientData[]){
    this.dbResponse.next(response);
  }

  createUHID(data: PatientData){
    this.createData.next(data);
  }

  // viewSortedResponse(){
  //   return this.dbResponse
  // }

}

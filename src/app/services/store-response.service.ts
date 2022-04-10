import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PatientData } from '../assets/patient.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreResponseService {
  dbResponse = new Subject<PatientData[]>();
  createData = new Subject<PatientData>();
  dbResponseUHID = new Subject<number | undefined>();

  constructor() {}

  sortResponse(response: PatientData[]) {
    this.dbResponse.next(response);
  }

  createUHID(data: PatientData) {
    this.createData.next(data);
  }

  generatedDbResponse(response: number | undefined) {
    this.dbResponseUHID.next(response);
  }

  // viewSortedResponse(){
  //   return this.dbResponse
  // }
}

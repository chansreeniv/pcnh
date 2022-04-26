import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { PatientData } from '../assets/patient.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreResponseService {
  dbResponse = new Subject<PatientData[]>();
  createData = new Subject<PatientData>();
  dbResponseUHID = new BehaviorSubject<number | undefined>(2204);
  consultationIdValue = new BehaviorSubject<string | undefined>("pcnhdataerror");
  LoginSuccess = new BehaviorSubject<boolean>(false);

  constructor() {}

  sortDatabaseResponse(response: PatientData[]) {
    this.dbResponse.next(response);
  }

  createUHID(data: PatientData) {
    this.createData.next(data);
  }

  generatedDbResponseUHID(response: number | undefined) {
    this.dbResponseUHID.next(response);
  }

  consultationIdFunction(id: string | undefined){
    this.consultationIdValue.next(id);
  }

  //login data store

}

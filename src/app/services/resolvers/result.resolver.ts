import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PatientData } from 'src/app/assets/patient.interface';
import { ConfigService } from '../config.service';
import { StoreResponseService } from '../store-response.service';

@Injectable({
  providedIn: 'root',
})
export class ResultResolver implements Resolve<PatientData> {
  patientData!: PatientData;
  constructor(
    private configService: ConfigService,
    private storeResponseService: StoreResponseService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PatientData> {
    this.storeResponseService.createData.subscribe((res) => {
      this.patientData = res;
    });
    return this.configService.createPatientData(this.patientData);
  }
}

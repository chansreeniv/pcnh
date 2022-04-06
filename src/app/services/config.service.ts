import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { UserData } from '../assets/user.interface';
import { PatientData } from '../assets/patient.interface';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../assets/api-path';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    return this.http.post<UserData>(`${environment.baseUrl}${ApiPaths.login}`,{"name":username, "password":password});
  }

  register(username: string, password: string){
   return this.http.post(`${environment.baseUrl}${ApiPaths.register}`, {"name":username, "password":password, "mobile":"45643456797"})
  }

 

  createPatientData(patientData: PatientData){
    return this.http.post<PatientData>(`${environment.baseUrl}${ApiPaths.patients}`,{"name": patientData.name, "age": patientData.age, "sex": patientData.sex, "mobile": patientData.mobile});
  }

  searchPatientData(patientName: string){
    return this.http.get<PatientData[]>(`${environment.baseUrl}${ApiPaths.patients}${patientName}`);
  }
}

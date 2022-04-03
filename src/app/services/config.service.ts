import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { UserData } from '../assets/user.interface';
import { PatientData } from '../assets/patient.interface';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    return this.http.post<UserData>("http://localhost:5005/api/admins/login",{"name":username, "password":password});
  }

  register(){
   return this.http.post("http://localhost:5005/api/admins/register", {"name":"admin05", "password":"admin05", "mobile":"45643456797"})
  }

 

  createPatientData(patientData: PatientData){
    const auth = new HttpHeaders({ 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDlkNDdjNzcyMDk3Zjc4YWMyYjliNyIsImlhdCI6MTY0OTAwNjQ4MCwiZXhwIjoxNjUxNTk4NDgwfQ._PW3BP9TYpzYhoad94MRe08mM4dmpHQNnBg8e7Rno7c'});
    return this.http.post<PatientData>("http://localhost:5005/api/patients/",{"name": patientData.name, "age": patientData.age, "sex": patientData.sex, "mobile": patientData.mobile}, {headers: auth});
  }

  searchPatientData(patientName: string){
    const auth = new HttpHeaders({ 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDlkNDdjNzcyMDk3Zjc4YWMyYjliNyIsImlhdCI6MTY0OTAwNjQ4MCwiZXhwIjoxNjUxNTk4NDgwfQ._PW3BP9TYpzYhoad94MRe08mM4dmpHQNnBg8e7Rno7c'});
    return this.http.get<PatientData>(`http://localhost:5005/api/patients/${patientName}`,{headers: auth});
  }
}

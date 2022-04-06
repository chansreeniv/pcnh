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
    // return this.http.post<UserData>("http://localhost:5005/api/admins/login",{"name":username, "password":password});
    return this.http.post<UserData>(`${environment.baseUrl}${ApiPaths.login}`,{"name":username, "password":password});
  }

  register(){
  //  return this.http.post("http://localhost:5005/api/admins/register", {"name":"admin05", "password":"admin05", "mobile":"45643456797"})
   return this.http.post(`${environment.baseUrl}${ApiPaths.register}`, {"name":"admin05", "password":"admin05", "mobile":"45643456797"})
  }

 

  createPatientData(patientData: PatientData){
    // const auth = new HttpHeaders({ 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDlkNDdjNzcyMDk3Zjc4YWMyYjliNyIsImlhdCI6MTY0OTAwNjQ4MCwiZXhwIjoxNjUxNTk4NDgwfQ._PW3BP9TYpzYhoad94MRe08mM4dmpHQNnBg8e7Rno7c'});
    // return this.http.post<PatientData>(`${environment.baseUrl}${ApiPaths.patients}`,{"name": patientData.name, "age": patientData.age, "sex": patientData.sex, "mobile": patientData.mobile}, {headers: auth});
    return this.http.post<PatientData>(`${environment.baseUrl}${ApiPaths.patients}`,{"name": patientData.name, "age": patientData.age, "sex": patientData.sex, "mobile": patientData.mobile});
  }

  searchPatientData(patientName: string){
    // const auth = new HttpHeaders({ 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDlkNDdjNzcyMDk3Zjc4YWMyYjliNyIsImlhdCI6MTY0OTAwNjQ4MCwiZXhwIjoxNjUxNTk4NDgwfQ._PW3BP9TYpzYhoad94MRe08mM4dmpHQNnBg8e7Rno7c'});
    // return this.http.get<PatientData>(`${environment.baseUrl}${ApiPaths.patients}${patientName}`,{headers: auth});
    return this.http.get<PatientData[]>(`${environment.baseUrl}${ApiPaths.patients}${patientName}`);
  }
}

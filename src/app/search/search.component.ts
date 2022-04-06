import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { PatientData } from '../assets/patient.interface';
import { StoreResponseService } from '../services/store-response.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  search: boolean = true;
  patientData!: PatientData;
  constructor(
    private router: Router,
    private configService: ConfigService,
    private storeResponseService: StoreResponseService
  ) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.patientData = {
      name: form.value.firstname,
      age: form.value.age,
      sex: form.value.sex,
      mobile: form.value.phone,
    };
    // this.configService.createPatientData(this.patientData).subscribe(patientRes=>{console.log(patientRes)})
    this.searchPatientData(this.patientData)
   
  }

  searchPatientData(patientData: PatientData){
    this.configService
    .searchPatientData(patientData.name)
    .subscribe((res) => {
      if (res.length === 0) {
        console.log('res ponse true');
        this.storeResponseService.createUHID(patientData);
      } else {
        this.storeResponseService.sortResponse(res);
      }
    });
  this.router.navigate(['search/results']);

  }

}

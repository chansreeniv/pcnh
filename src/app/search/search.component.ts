import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { PatientData } from '../assets/patient.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  search: boolean = true;
  patientData!: PatientData;
  constructor(private router: Router, private configService: ConfigService) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.patientData = {
      name: form.value.firstname,
      age: form.value.age,
      sex: form.value.sex,
      mobile: form.value.phone
    }
    // this.configService.createPatientData(this.patientData).subscribe(patientRes=>{console.log(patientRes)})
    this.configService.searchPatientData(this.patientData.name).subscribe(res=>{console.log(res)});
    this.router.navigate(['search/results']);
  }
}
function patienData(patienData: any) {
  throw new Error('Function not implemented.');
}


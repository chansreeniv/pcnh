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
  constructor(
    private router: Router,
    private configService: ConfigService,
    private storeResponseService: StoreResponseService
  ) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.log(form.value);
    // this.configService.createPatientData(this.patientData).subscribe(patientRes=>{console.log(patientRes)})
    this.searchPatientData(form.value.searchText);
  }

  searchPatientData(patientData: string) {
    this.configService.searchPatientData(patientData).subscribe((res) => {
      console.log(res)
      this.storeResponseService.sortDatabaseResponse(res);
    });
    this.router.navigate(['search/results']);
  }
}

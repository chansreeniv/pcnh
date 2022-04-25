import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientData } from 'src/app/assets/patient.interface';
import { ConfigService } from 'src/app/services/config.service';
import { StoreResponseService } from 'src/app/services/store-response.service';

@Component({
  selector: 'app-create-new-form',
  templateUrl: './create-new-form.component.html',
  styleUrls: ['./create-new-form.component.css']
})
export class CreateNewFormComponent implements OnInit {
  patientData!: PatientData;

  constructor(private configService: ConfigService, private storeResponseService: StoreResponseService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.patientData = {
      name: form.value.name,
      age: form.value.age,
      sex: form.value.sex,
      mobile: form.value.phone
    }
    this.configService.createPatientData(this.patientData).subscribe(res=>{
      console.log(res);
      this.storeResponseService.generatedDbResponseUHID(res.UHID);
    })
  }

}

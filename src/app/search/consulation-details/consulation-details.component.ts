import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DiagnosisData } from 'src/app/assets/diagnosis.interface';
import { ConfigService } from 'src/app/services/config.service';
import { StoreResponseService } from 'src/app/services/store-response.service';

@Component({
  selector: 'app-consulation-details',
  templateUrl: './consulation-details.component.html',
  styleUrls: ['./consulation-details.component.css'],
})
export class ConsulationDetailsComponent implements OnInit {
  UHID!: number | undefined;
  consulatationData!: DiagnosisData;
  id: string | undefined;

  constructor(
    private storeResponseService: StoreResponseService,
    private configService: ConfigService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.storeResponseService.dbResponseUHID.subscribe(
      (res) => (this.UHID = res)
    );
    this.storeResponseService.consultationIdValue.subscribe(
      (res) => (this.id = res)
    );
  }

  onConsultation(form: NgForm) {
    this.consulatationData = {
      consltdoctor: form.value.doctor,
      providiagnosis: form.value.diagnosis,
    };

    this.configService
      .diagnosis(this.id, this.consulatationData)
      .subscribe((res) => {
        if (res) {
          this.router.navigate(['search/results']);
        }
      });
  }
}

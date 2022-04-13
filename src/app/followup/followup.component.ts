import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { StoreResponseService } from '../services/store-response.service';

@Component({
  selector: 'app-followup',
  templateUrl: './followup.component.html',
  styleUrls: ['./followup.component.css'],
})
export class FollowupComponent implements OnInit, OnDestroy {
  followUpForm!: FormGroup;
  UHID: number | undefined = 2204;
  UHIDsubscription!: Subscription;
  constructor(private storeResponseService: StoreResponseService, private configService: ConfigService) {}

  ngOnInit(): void {
    this.UHIDsubscription = this.storeResponseService.dbResponseUHID.subscribe(res => this.UHID = res);
    this.followUpForm = new FormGroup({
      UHID: new FormControl(this.UHID, Validators.required),
      doctorName: new FormControl(null, Validators.required),
      provisionalDiagnosis: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.followUpForm.value);
  }

  ngOnDestroy(): void {
    this.UHIDsubscription.unsubscribe();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { subscribeOn, Subscription } from 'rxjs';
import { PatientData } from '../assets/patient.interface';
import { ConfigService } from '../services/config.service';
import { GenerateService } from '../services/generate.service';
import { StoreResponseService} from '../services/store-response.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit, OnDestroy {
  paramSubscription: Subscription = new Subscription();
  createDbResponse: Subscription = new Subscription();
  databaseResponse: Subscription = new Subscription();

  generatedUHID: string = '';
  createUHID!: PatientData;
  viewResponse!: PatientData[];

  // responseData = [{
  //   "uhid":"20221001",
  //   "name": "Alpha",
  //   "age": "13",
  //   "sex":"female",
  //   "phone": "123456789",
  //   "lastVisit":"12-2-2022 8:00a.m",
  // },{
  //   "uhid":"20221002",
  //   "name": "mike",
  //   "age": "15",
  //   "sex":"male",
  //   "phone": "123456789",
  //   "lastVisit":"12-1-2022 11:00a.m",
  // }]

  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private genrateService: GenerateService,
    private storeResponseService: StoreResponseService,
    private configService: ConfigService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe((res: Params) => {
      console.log(res);
    });
    this.createDbResponse = this.storeResponseService.createData.subscribe((createDataResponse)=>{
      this.createUHID = createDataResponse;
      console.log(createDataResponse)
     });


   this.databaseResponse = this.storeResponseService.dbResponse.subscribe((res) => {
      // console.log(res)
      this.viewResponse = res;
      if(res.length !== 0){
        this.notFound = true;
      }else {
        this.notFound = false;
      }
    });
  }

  onGenerate() {
    // this.generatedUHID = this.genrateService.generateUHID();
    
    this.configService.createPatientData(this.createUHID).subscribe(res =>{if(res){this.router.navigate(['/search'])}}) 
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
    this.createDbResponse.unsubscribe();
    this.databaseResponse.unsubscribe();
    
  }
}

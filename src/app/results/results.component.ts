import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { GenerateService } from '../services/generate.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnDestroy {
  paramSubscription: Subscription = new Subscription;
  generatedUHID: string = '';
  
  responseData = [{
    "uhid":"20221001",
    "name": "Alpha",
    "age": "13",
    "sex":"female",
    "phone": "123456789",
    "lastVisit":"12-2-2022 8:00a.m",
  },{
    "uhid":"20221002",
    "name": "mike",
    "age": "15",
    "sex":"male",
    "phone": "123456789",
    "lastVisit":"12-1-2022 11:00a.m",
  }]

  notFound = false;

  constructor(private route: ActivatedRoute, private genrateService: GenerateService) { }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe((res: Params)=>{console.log(res)})
  }

  onGenerate(){
    this.generatedUHID = this.genrateService.generateUHID()
    console.log(this.generatedUHID);
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }


}

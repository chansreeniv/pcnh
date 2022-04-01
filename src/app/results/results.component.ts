import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
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

  notFound = true;

  constructor() { }

  ngOnInit(): void {
  }


}

import { Component, OnInit } from '@angular/core';
import { StoreResponseService } from 'src/app/services/store-response.service';

@Component({
  selector: 'app-consulation-details',
  templateUrl: './consulation-details.component.html',
  styleUrls: ['./consulation-details.component.css']
})
export class ConsulationDetailsComponent implements OnInit {
  UHID!:number | undefined;

  constructor(private storeResponseService: StoreResponseService) { }

  ngOnInit(): void {
    this.storeResponseService.dbResponseUHID.subscribe(res=> this.UHID = res )
  }

}

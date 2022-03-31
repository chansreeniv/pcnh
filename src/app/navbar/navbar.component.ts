import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navLogin: string = "nav-link";
  navSearch: string = "nav-link";

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.navLogin= "nav-link";
    this.navSearch = "nav-link";
    this.configService.getConfig().subscribe((response)=>{console.log(response)});
  }

  onLogin(){
    this.navLogin = "nav-link active";
  }

  onSearch(){
    this.navSearch = "nav-link active"
  }

  // onDeactivate(){
  //   this.navSearch = "nav-link disabled"
  // }

}

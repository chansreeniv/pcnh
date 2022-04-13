import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navLogin: string = "nav-link";
  navSearch: string = "nav-link";

  constructor(private configService: ConfigService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // this.configService.getConfig().subscribe((response)=>{console.log(response)});
  }
  LoginSuccess: boolean = false;
  // onLogin(){
  //   this.navLogin = "nav-link active";
  // }

  // onSearch(){
  //   this.navSearch = "nav-link active"
  // }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }

  // onDeactivate(){
  //   this.navSearch = "nav-link disabled"
  // }

}

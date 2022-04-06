import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../assets/user.interface';
import { AuthService } from '../services/auth.service';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
    });
  }

  onRegister() {
    this.configService
      .register(this.signUpForm.value.username, this.signUpForm.value.password)
      .subscribe((res) => {
        console.log(res);
      });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.configService
      .login(this.signUpForm.value.username, this.signUpForm.value.password)
      .subscribe((user: UserData) => {
        localStorage.setItem('loginToken', user.token);
      });
  }

  onLogin() {
    this.authService.login();
    this.router.navigate(['search']);
  }

  onLogout() {
    this.authService.logout();
  }
}

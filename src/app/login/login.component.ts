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
  error = null;

  constructor(
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
      //should add catch error
      .subscribe();
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    const observer = {
      next: (res: any) => {
        if (res) {
          this.authService.login();
        }
      },
      error: (error: any) => console.log((this.error = error.error.message)),
    };
    this.configService
      .login(this.signUpForm.value.username, this.signUpForm.value.password)
      .subscribe(observer);
  }

  onLogout() {
    this.authService.logout();
  }
}

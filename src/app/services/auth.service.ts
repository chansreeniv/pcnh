import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean= false;
  constructor(private router: Router) { }

  login(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
    localStorage.clear();
    this.router.navigate(['/']);
  }

  isAuthenticated() {
    let promise = new Promise<boolean>((resolve, reject) => {
      // Executer fn...
      setTimeout(()=>{ resolve(this.loggedIn)}, 800)
    });
  return promise;  
  }

}

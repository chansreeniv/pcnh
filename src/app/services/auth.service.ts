import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean= false;
  constructor() { }

  login(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
  }

  isAuthenticated() {
    let promise = new Promise<boolean>((resolve, reject) => {
      // Executer fn...
      setTimeout(()=>{ resolve(this.loggedIn)}, 800)
    });
  return promise;  
  }

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private myRoute: Router, private http: HttpClient) { }
  BASE_URL = "http://localhost:8080"

  login(auth){
    console.log(auth)
      var formData : any = new FormData();
      formData.append("email", auth.email)
      formData.append("password", auth.password);
      return this.http.post('http://localhost:8080/api/login', formData);
  }
  
  decodeJWT(){
    if(this.getToken() !== null) {
      return JSON.parse(atob(this.getToken().split(".")[1]))
    }
  }

  sendToken(token: any) {
    localStorage.setItem("LoggedInUser", token)
  }
  getToken() {
    return localStorage.getItem("LoggedInUser")
  }
  
  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem("LoggedInUser");
    // this.myRoute.navigate(["Login"]);
    window.location.href = 'login';
  }

};
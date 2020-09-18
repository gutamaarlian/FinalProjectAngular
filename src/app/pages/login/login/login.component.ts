import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user = {
     email : "",
     password: ""
   }

  constructor(private authService : AuthService, private myRoute : Router) {
        if(this.authService.getToken()!=null){
          this.myRoute.navigate(["/dashboard"]);
        }
   }

  ngOnInit(): void {
  }

  doLogin(){
    this.authService.login(this.user).subscribe(({data}:any) => {
      this.authService.sendToken(data);
      this.myRoute.navigate(["/dashboard"])
    })
  }

}

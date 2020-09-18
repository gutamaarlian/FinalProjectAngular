import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerRequest={
    firstName: "",
      lastName:"",
      email:"",
      password:"",
      rePassword:"",
      agencyName:"",
      agencyDetail:"",
      contactNumber:""
}

  constructor(private userService: UserService, private myRoute : Router) { }

  ngOnInit(): void {
  }

  register(){
    this.userService.register(this.registerRequest).subscribe(d=>{
        alert("REGISTER BERHASIL")
        this.myRoute.navigate(['/login'])
    })
  }
}

import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service'
import { AuthService } from 'src/app/services/auth-service';
import { User } from 'src/app/constants/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})



export class ProfileComponent implements OnInit {
  user : User;
  password = "";
  fullName = "";
  constructor(private userService : UserService, private authService  :AuthService) { 
    this.user = new User;
  }

  ngOnInit(): void {
    this.getUser();
  }
  
  initiateName(data){
    this.user = data;
    this.fullName = data.firstName+" "+data.lastName;
  }

  getUser(){
    let token = this.authService.decodeJWT();
    this.userService.getUser(token.userId).subscribe((data)=>{
        this.initiateName(data);
    });
  }

  updateUser(){
    this.userService.updateUser(this.user).subscribe((data)=>{
      this.initiateName(data)
      alert("Berhasil Update Profile")
    })    
  }

  updatePassword(){
    this.user.password=this.password;
    this.userService.updatePassword(this.user).subscribe((data)=>{
      this.user = data;
      this.initiateName(data)
      alert("Berhasil Update Password");
    })
    
  }

}

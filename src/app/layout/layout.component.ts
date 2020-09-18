import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';
declare var $: any 

@Component({
  selector: 'routing-test-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
})
export class LayoutComponent implements OnInit {
  user : any;
  
  constructor(public auth: AuthService, router: Router) {
    console.log(auth.isLoggedIn());
  }

  ngOnInit(): void {
    this.user = this.auth.decodeJWT();
    console.log(this.user);
    $('#sidebarToggle, #sidebarToggleTop').on('click', function (e) {
      $('body').toggleClass('sidebar-toggled');
      $('.sidebar').toggleClass('toggled');
      if ($('.sidebar').hasClass('toggled')) {
        $('.sidebar .collapse').collapse('hide');
      }
    });
  }

  doLogout(){
    console.log("yey")
    this.auth.logout();
  }

}

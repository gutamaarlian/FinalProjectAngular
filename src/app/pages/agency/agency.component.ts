import { Component, OnInit } from '@angular/core';
import {AgencyService} from '../../services/agency-service'
import {Agency} from '../../constants/agency'
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {

  agency : Agency;
  name : String;
  constructor(private agencyService: AgencyService, private authService : AuthService) { }

  ngOnInit(): void {
    this.getAgency();
  }


  getAgency(){
      let dataUser = this.authService.decodeJWT()
      this.agencyService.getAgency(dataUser.agencyId).subscribe((d)=>{
        
        this.agency = d;
        this.name = d.name;
      })
  }

  updateAgency(){
      this.agencyService.updateAgency(this.agency).subscribe(d =>{
          this.agency = d;
          this.name = d.name;
          alert("Berhasil Update !"); 
      })
  }

}



import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Agency } from '../constants/agency';


@Injectable({
    providedIn : 'root'
})


export class AgencyService{
    BASE_URL = "http://localhost:8080/api/v1/agency"

    agency : Agency;
    constructor(private myRoute: Router, private http: HttpClient) { 

    }

    getAgency(id){
        return this.http.get<Agency>(`${this.BASE_URL}?id=${id}`)
    }

    updateAgency(agency){
        return this.http.put<Agency>(`${this.BASE_URL}`, agency)
    }


}
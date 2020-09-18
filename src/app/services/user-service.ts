

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Agency } from '../constants/agency';
import { User } from '../constants/user';
import { API_URL} from '../constants/base-url'
@Injectable({
    providedIn : 'root'
})


export class UserService{
    
    constructor(private myRoute: Router, private http: HttpClient) { 

    }

    register(registerRequest){
        return this.http.post(`${API_URL}/api/createNewAccount`, registerRequest)   
    }

    getUser(id){
        return this.http.get<User>(`${API_URL}/api/v1/user?id=${id}`);
    }

    updateUser(user){
        return this.http.put<User>(`${API_URL}/api/v1/user`, user);
    }

    updatePassword(user){
        return this.http.put<User>(`${API_URL}/api/v1/password`, user);
    }

}
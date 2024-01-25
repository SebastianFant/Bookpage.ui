import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from './user.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  private baseUrl = 'https://localhost:7110/api';

  constructor(private http: HttpClient) { }

  login(loginRequest: User) {
    
    this.http.post(this.baseUrl+ '/user', loginRequest)
    .subscribe(response =>{
      const token = (<any>response).token;
      const user = (<any>response).id;
      localStorage.setItem("jwt", token);
      localStorage.setItem("userid", user)
    })
    
  }
  }


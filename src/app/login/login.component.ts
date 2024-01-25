import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.interface';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private userService: UserService, private router: Router){}
  ngOnInit(): void {
   
  }
 login(){
  this.userService.login(this.loginRequest);
  if (localStorage.getItem("jwt")?.length != 0){
    this.router.navigate(['books'])
  };
  
 }

 loginRequest: User = {
  id:0,
  name:'',
  password:''
 }
}

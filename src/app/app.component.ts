
import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  isUserAuthenticated(){
    const token = localStorage.getItem("jwt");
    if (token) {
      return true;
    }
    else {
      return false;
    }
  }

  logOut = () =>{
    localStorage.removeItem("jwt");
    localStorage.removeItem("userid");
  }
  title = 'BookpageVS1';
}

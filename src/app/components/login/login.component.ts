import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
//import { ErrorHandlerService } from 'src/app/services/error-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(
    public route :Router,
    public authserv : AuthService,
    //public errorHandler: ErrorHandlerService
  ){
    
  }
  mySubmit( ) {
    //console.log(this.email)
    //console.log(this.password)
    this.authserv.login(this.email, this.password).
    then((res)=>{
        console.log("login sucessfully")
        this.route.navigate(['/employees'])
        return res;
      }
    ).catch(error=> {
      console.error("Login failed:", error);
      if (error === "Incorrect password. Please try again.") {
        console.log("Incorrect password. Please try again.");
      }
    }); 




  }


  
}


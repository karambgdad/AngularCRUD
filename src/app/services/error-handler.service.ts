import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


// ToastrService is a third-party library for displaying toastr notifications or messages in web applications. It provides customizable and responsive notifications with various options such as success, error, warning, and info messages. It can be easily integrated with Angular applications by importing it as a module and using its provided methods in the desired component or service. By using ToastrService, developers can provide feedback to the user in a user-friendly and informative manner.

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  constructor(private router: Router, private toastr: ToastrService) {}
  
  handleFirebaseError(error: firebase.auth.Error) {
    switch (error.code) {
      case 'auth/wrong-password':
        this.toastr.error('Invalid password. Please try again.');
        break;
      case 'auth/user-not-found':
        this.toastr.error('User not found. Please try again.');
        break;
      case 'auth/email-already-in-use':
        this.toastr.error('Email address is already in use.');
        break;
      case 'auth/weak-password':
        this.toastr.error('Password is too weak.');
        break;
      default:
        this.toastr.error('An error occurred. Please try again later.');
    }
  }

}



import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
// Inject HttpClient in your component/service constructor
constructor(private http: HttpClient) {}
// Call the HTTP GET request and handle errors
getUsers() {
  return this.http.get('https://jsonplaceholder.typicode.com/users')
    .pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle the error here
        console.log('An error occurred:', error.message);
        // Return a new observable with a user-friendly error message
        return throwError('Something went wrong. Please try again later.');
      })
    );
}


// Use an error interceptor:
//  an HTTP interceptor to handle errors globally across  application.

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // Handle the error here
          console.log('An error occurred:', error.message);
          // Return a new observable with a user-friendly error message
          return throwError('Something went wrong. Please try again later.');
        })
      );
  }
}

import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './error.interceptor';
@NgModule({
  imports: [HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class AppModule { }

//  interceptor:
// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   intercept(request: HttpRequest<any>, next: HttpHandler) {
//     // Get the access token from your authentication service
//     const accessToken = AuthenticationService.getAccessToken();

//     // Add the access token to the request headers
//     const authRequest = request.clone({
//       headers: request.headers.set('Authorization', `Bearer ${accessToken}`)
//     });

//     // Pass the request on to the next handler in the chain
//     return next.handle(authRequest);
//   }
// }

// import { NgModule } from '@angular/core';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthInterceptor } from './auth.interceptor';

// @NgModule({
//   imports: [HttpClientModule],
//   providers: [
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: AuthInterceptor,
//       multi: true
//     }
//   ]
// })
// export class AppModule {}





import { NgModule, ErrorHandler } from '@angular/core';

export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any) {
    // Handle the error here
    console.log('An error occurred:', error.message);
    // Display a user-friendly error
  }}



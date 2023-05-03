import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
//import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public auth:AngularFireAuth,
    //public e:ErrorHandlerService
  ) { }

  login(email:string , password:string){

    return new Promise((resolve,reject)=>{
      this.auth.signInWithEmailAndPassword(email,password)
      .then(userData => {
        resolve (userData)
        //console.log(JSON.stringify(userData))
      } )
      .catch(err => {
        if (err.code === "auth/wrong-password") {
          reject("Incorrect password. Please try again.");
        } else {
          reject(err);
        }
      });

    
    
  })
}
  logout() {
    return this.auth.signOut();
  }



  getAuth(): Observable<firebase.User | null>{
     return this.auth.authState.pipe(
      //tap(console.log),
      map(user=>{
      user
      if(user){return user}
      else{return null}
      
    }) ) 
  }

}



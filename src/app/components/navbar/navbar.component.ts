import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isLogin:boolean = false;
  isUserLogin:string = "";

  constructor(
  public authserv: AuthService,
  public route: Router
){}

ngOnInit(){
this.authserv.getAuth().subscribe(authin => {
  if(authin){
    this.isLogin=true;
    if (authin.email) {
      this.isUserLogin=authin.email;
    }

  }else{
    this.isLogin = false;
  }
})
}
  onLogout() {
    this.authserv.logout().then(() => {
      this.route.navigate(['/'])
    });
  }
}

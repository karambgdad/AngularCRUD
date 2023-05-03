import { NgModule , ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import{AngularFireDatabase} from '@angular/fire/compat/database';
import {AngularFireAuth} from '@angular/fire/compat/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { EmployeeService } from './services/employee.service';
import { EmployeesComponent } from './components/employees/employees.component';
import { AuthService } from './services/auth.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { GlobalErrorHandler } from './global-error-handler';

const appRoutes: Routes=[
{path:'',component:DashboardComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'employees',component:EmployeesComponent},
{path:'add-employee',component:AddEmployeeComponent},
{path:'employees/:id',component:EmployeeInfoComponent},
{path:'edit-employee/:id',component:EditEmployeeComponent}
]

const firebaseConfig = {

  apiKey: "AIzaSyBRje2pkEZsWQHWjPsaUJCVF-dgwFt02NI",
  authDomain: "employeesmanagement-6dcda.firebaseapp.com",
  databaseURL: "https://employeesmanagement-6dcda-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "employeesmanagement-6dcda",
  storageBucket: "employeesmanagement-6dcda.appspot.com",
  messagingSenderId: "736343680655",
  appId: "1:736343680655:web:0728b6d711cef87a86f2fa",
  measurementId: "G-SNTTLYGYB4"
};


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeInfoComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes),
////////////////////failed way to handle errors///////////////////////
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true,
    }),
//////////////////////////////////////////////////////////////////////
    BrowserAnimationsModule
    
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    EmployeeService,
    AuthService,


    ErrorHandlerService,
    ////////////////////////////another way to handle errors///////////////////
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
   //////////////////////////////////////////////////////////////////////////// 
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

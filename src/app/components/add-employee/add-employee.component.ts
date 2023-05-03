import { Component } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
 employee : Employee ={
  firstName:"",
    lastName:"",
    email:"",
    country:"",
    city:"",
    phone:0,
    salary:0

 }

disableSalary: boolean = true;
 successMessage: string = '';

 constructor(public empserv:EmployeeService , public router: Router){}

  mySubmit({value, valid}:{value:Employee, valid:boolean|null}) 
  {
    if(this.disableSalary){
      value.salary=0
    }
    if(valid??false){
      //console.log(value);
    this.empserv.addEmployee(value);
    setTimeout(() => {
      alert("Employee added successfully!");
      this.router.navigate(['/employees']);
    }, 1000); // add a delay of 1 second

    }else{
      console.log("not correct data")
     
    }
  }
}

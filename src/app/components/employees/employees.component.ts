import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  numberOfEmployees$: number = 0;
  salaryTotal$ :number =0;

  
  numberOfEmployeess$ = this.empserv.getNumberOfEmployees();
 
  employees: Employee[] = [];

  constructor(public empserv: EmployeeService) {
    this.empserv.getItems().subscribe(emp => {
      this.employees = emp;
      console.log(this.employees);
    })
  }
  
  ngOnInit() {
    this.empserv.getNumberOfEmployees().subscribe((count) => {
      this.numberOfEmployees$ = count;
     
      
    });
  

  this.empserv.getSalaryTotal().subscribe((tota) => {
    this.salaryTotal$ = tota;
 
})
}
}

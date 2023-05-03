import { Component , OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})

export class EditEmployeeComponent implements OnInit {
  employee: Employee ={};
  id:string = "";
  disableSalary: boolean = false;
  constructor(

    public empserv: EmployeeService,
    public route: Router,
    public activroute: ActivatedRoute,
    public navToEdit: Router

  ) {

  }
  ngOnInit(){
    this.id = this.activroute.snapshot.params['id'];
    console.log(this.id);
     this.empserv.getEmployeeByKey(this.id).subscribe((emp)=>{
       if(emp){
      this.employee=emp;}
      console.log(this.employee);
     

    })
  }
  mySubmit({value, valid}:{value:Employee, valid:boolean|null}){
    {
      if(this.disableSalary){
        value.salary=0
      }
      if(valid??false){
        //console.log(value);
      this.empserv.updateEmployee2(this.id ,value);
      setTimeout(() => {
        alert("Employee Edited successfully!");
        this.route.navigate(['/employees/', this.id]);
      }, 1000);
    }else{
      console.log("not correct data")
     
    }
  }
  }
}

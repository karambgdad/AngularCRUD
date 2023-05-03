import { Component } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import{Router, ActivatedRoute, Params} from '@angular/router' //we import those so we will be able to take the id or the key from the link in the address bar
import { Observable } from 'rxjs';


@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent {

  id:string =''; //in this id we will put the id value of the link in the address bar "key"

  employee : Employee ={
    firstName:"",
      lastName:"",
      email:"",
      country:"",
      city:"",
      phone:0,
      salary:0
  
   }
  hasSalary: boolean = false;
  updateSalaryInput : boolean=false;

 constructor(
  public empserv: EmployeeService,
  public route: Router,
  public activroute : ActivatedRoute,
  public navToEdit : Router
 ){
  

 }
 navigateEditPage() {
  this.navToEdit.navigate(['/edit-employee', this.id]);
  
}
 ngOnInit(){
  this.id = this.activroute.snapshot.params['id'];
  
this.empserv.getEmployeeByKey(this.id).subscribe(empl => {
  console.log(empl)})

this.empserv.getEmployeeByKey(this.id).subscribe(empl => {
  if(empl) {this.employee = empl;}

  });

}

successMessage :string = "";
deleteMessage :string = "";

updateSalary(funID: string) {
  console.log(funID)
  this.empserv.updateEmployee2(funID, this.employee)
  this.successMessage = 'Salary updated successfully!';

 
}
showPopup :boolean= false;

myDelete(DelID :string){
  this.empserv.deleteEmployee(DelID);
 if (confirm("Are you sure!")){
  this.deleteMessage = 'Employee deleted successfully!';
  setTimeout(() => {
    this.deleteMessage = '';
    this.route.navigate(['/employees']);
  }, 1500);
    }
  }
}

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable, from } from 'rxjs';
import { Employee } from '../employee';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  items: AngularFireList<Employee>;

  constructor(private db: AngularFireDatabase) { 
    this.items = this.db.list('/employees') as AngularFireList<Employee>;
  }
  addEmployee(emp:Employee){
    return this.items.push(emp);
  }
//////////get item with key/////////////////
  getItems(): Observable<any> {
    return this.items.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }))
      )
    );
  }


getNumberOfEmployees() {
  return this.db.list('/employees').valueChanges().pipe(
    map((employees: any) => employees.length)
  );
}



getSalaryTotal() {
  return this.db.list('/employees').valueChanges().pipe(
    map((employees: any) => {
      let total = 0;
      for (let employee of employees) {
        total += Number(employee.salary )|| 0;
      }
      return total;
    })
  );
 
   }



getEmployeeByKey(key: string): Observable<Employee|null> {
  const item = this.db.object<Employee>('/employees/' + key);
  return item.valueChanges().pipe(
    map(employee => employee || null))
}


updateEmployee2(id:string, employee: Employee) {
 return this.items.update(id,employee);
  }

  deleteEmployee(id:string){
    this.items.remove(id)
  }

 
}
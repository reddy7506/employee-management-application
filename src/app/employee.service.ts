import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  EmployeeDataLoad= new BehaviorSubject<any>([]);
  searchedEmplyee = new BehaviorSubject<any>(false);
  EmployeeData:any[] = [{id: 1, name: 'Andrew', cname: 'Infrrd', email: 'Andrew@gmail.com', contactno: 7032435643, designation: 'Manager'}]

  constructor() {
    this.EmployeeDataLoad.next([{id: 1, name: 'Andrew', cname: 'Infrrd', email: 'Andrew@gmail.com', contactno: 7032435643, designation: 'Manager'}]);
   }

  addEmployee(data: any) {
    data['id'] = this.EmployeeData.length + 1;
    this.EmployeeData.push(data);
    this.EmployeeDataLoad.next(this.EmployeeData);
  }

  editEmployee(updatedForm: any) {
    this.EmployeeData[this.EmployeeData.findIndex(obj => obj.id === updatedForm.id)] = updatedForm;
    this.EmployeeDataLoad.next(this.EmployeeData);
  }

  getAllEmployees() {
    return this.EmployeeDataLoad.asObservable();

  }
}

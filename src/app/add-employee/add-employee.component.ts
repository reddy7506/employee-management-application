import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})

export class AddEmployeeComponent {

  constructor(private employeeService: EmployeeService, private router: Router) { }
  employeeForm = new FormGroup({
    name: new FormControl(''),
    cname: new FormControl(''),
    email: new FormControl(''),
    contactno: new FormControl(''),
    designation: new FormControl(''),
  });


  submitForm() {
    this.employeeService.addEmployee(this.employeeForm.value);
    this.router.navigate(['/overview'])
  }
}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {
  displayText: boolean = false;
  employeesData: any = [];
  constructor(public employeeService: EmployeeService, private router: Router) { }


  edit(Id: number) {
    this.router.navigate(['/edit', + Id])
  }

  delete(Id: number) {
    alert('Do You Want to delete');
    this.employeeService.EmployeeDataLoad.next(this.employeesData.filter((obj: any) => obj.id !== Id));

  }
  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe((ok) => {
      this.employeesData = ok
    })
  }

}

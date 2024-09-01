import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private employeeService: EmployeeService) { }
  getDesignation(event: any) {
    this.employeeService.searchedEmplyee.next(true);
    this.employeeService.EmployeeDataLoad.next(this.employeeService.EmployeeData.filter(obj => obj.designation === event.target.value));
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  currentEmployeeData: any;

  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService, private route: Router) { }

  employeeForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    cname: new FormControl(''),
    email: new FormControl(''),
    contactno: new FormControl(''),
    designation: new FormControl(''),
  });

  ngOnInit(): void {
    let employeeId = this.activatedRoute.snapshot.params['id'];
    if (employeeId) {
      this.currentEmployeeData = this.employeeService.EmployeeData.filter((obj: any) => obj.id === +(employeeId));
      this.employeeForm.patchValue({
        id: this.currentEmployeeData[0]?.id,
        name: this.currentEmployeeData[0]?.name,
        cname: this.currentEmployeeData[0]?.cname,
        email: this.currentEmployeeData[0]?.email,
        contactno: this.currentEmployeeData[0]?.contactno,
        designation: this.currentEmployeeData[0]?.designation,
      })
    }
  }

  updateForm() {
    this.employeeService.editEmployee(this.employeeForm.value);
    this.route.navigate(['/overview'])
  }
}

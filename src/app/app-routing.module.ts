import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {path: '' , component: EmployeeDashboardComponent},
  {path: 'add' , component: AddEmployeeComponent},
  {path: 'edit/:id' , component: EditComponent},
  {path:'overview', component: EmployeeDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

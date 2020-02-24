import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeDeleteComponent } from './components/employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';


const routes: Routes = [
  
    {path : '',component :EmployeeListComponent},
    {
      path : 'create',component:EmployeeCreateComponent
    },
    {
      path : 'edit' ,component :EmployeeEditComponent
    },
    {
      path : 'delete',component:EmployeeDeleteComponent

    }
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

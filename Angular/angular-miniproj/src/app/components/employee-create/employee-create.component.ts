import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  constructor(private empservice:EmployeeService) { }

  ngOnInit(): void {
  }
onSubmit(data)
{
  this.empservice.createEmployee(data)
  console.log(data)
}
}

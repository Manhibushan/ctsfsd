import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/service/employee.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  public employees: any;
  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    this.empService
      .getEmployees()
      .subscribe(emp => (this.employees = emp.data));
  }
}

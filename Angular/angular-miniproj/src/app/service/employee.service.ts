import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private baseUrl="http://localhost:5000/api/v1/employee"
  constructor(private http : HttpClient) { }
  getEmployees() : Observable<any>{
    return this.http.get<any>(this.baseUrl)
  }
  createEmployee(data)
  {
  this.http.post(this.baseUrl,data)
  }
  updateEmployee()
  {

  }
  deleteEmployee()
  {
    
  }

}



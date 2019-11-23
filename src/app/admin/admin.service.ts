import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  GetAllPayments(){
    return this.http.get("http://localhost:12345/Payment/GetAllPayment");
  }

  GetAllTechnologies(){
    return this.http.get("http://localhost:12345/Technology/GetAllTechnology");
  }

  UpdateTech(object){
    return this.http.put("http://localhost:12345/Technology/UpdateTech",object);
  }

  AddTechnology(object){
    return this.http.post("http://localhost:12345/Technology/AddTech",object);
  }
}

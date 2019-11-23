import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getMethod1(a,b){
    //return this.http.get('http://localhost:12345/User/UserLogin/'+a+'/'+b);
    return this.http.get('http://localhost:12345/Login/Validate/User/'+a+'/'+b);
    
  }

  getMethod2(a,b){
    
    console.log(a+"  "+b+"this is the get method");
    return this.http.get('http://localhost:12345/Login/Validate/Mentor/'+a+'/'+b);
  }

  getMethod3(a,b){
    
    return this.http.get('http://localhost:12345/Login/Validate/Admin/'+a+'/'+b);
  }
}

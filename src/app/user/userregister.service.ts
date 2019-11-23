import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TechnologyClass } from './TechnologyClass';
import { PaymentClass } from './paymentClass';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {

  constructor(private http:HttpClient) { }
  
  GetAllUsers(){
    return this.http.get("http://localhost:12345/User/GetAll");
  }
  userRegister(userData):Observable<string>{
    // const c=new trainerClass(a,b,c,d,e,f);
    console.log(userData); 
    return this.http.post<string>('http://localhost:12345/User/PostUser',userData)
   }

   SearchMentor(a:string,b:number,c:number){
     return this.http.get('http://localhost:12345/Mentor/search/'+a+'/'+b+'/'+c);
   }

   proposeMentor(object){
    console.log("proposed mentor"+object); 
    return this.http.post('http://localhost:12345/Training/AddTraining',object).subscribe(data=>{
      console.log(data+"this is the data which we got from the post of trainng");
    });

   }

   GetAllTrainings(id:number){
    
    var a="current"
    return this.http.get('http://localhost:12345/Training/UserId/'+id+'/'+a);

   }

   GetAllCompletedTrainings(id:number){
    var a="Completed";  
    return this.http.get('http://localhost:12345/Training/UserId/'+id+'/'+a);

   }

   GetAllTechnologiesByName(name:string){
     console.log(name+"this is inside get technology by name");
     return this.http.get("http://localhost:12345/Technology/GetTechnologyByName/"+name);
   }

   GetTechnologies():Observable<TechnologyClass[]>{
     return this.http.get<TechnologyClass[]>("http://localhost:12345/Technology/GetAllTechnology");
   }

   AddPayment(object:PaymentClass){
     
    console.log(object["mentor_Amount"]+" "+object["amount"]+" "+object["userId"]+"payment objecthello");
      return this.http.post("http://localhost:12345/Payment/AddPayment",object).subscribe(
        data=>{
          console.log(data);
        }
      );
   }

   BlockUser(id){
      console.log(id+"inside blockuser");
      //console.log("http://localhost:12345/User/UpdateUserBlock/"+id);
      return this.http.put("http://localhost:12345/User/UpdateUserBlock/"+id,{});
      
   }

   DeleteUser(id){
     return this.http.delete("http://localhost:12345/User/DeleteUser/"+id);
   }
}

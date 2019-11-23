import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trainerClass } from './trainerClass';
import { pipe, Observable } from 'rxjs'; 
import { trainerInterface } from './trainerInterface';
import { NumberSymbol } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
    mentorData:any=[];

  constructor(private http:HttpClient) { }
  
  acknowledge;
  trainerRegister(trainerData):Observable<string>{
   
    return this.http.post<string>('http://localhost:12345/Mentor/MentorPost',trainerData);
  }

  getTrainer(id){
    return this.http.get('http://localhost:8091/api/mentorregister/'+id);
  }

  updateTrainer(object,id){
    console.log("inside update trainer"+object+"   "+id);
    console.log(object+" id:"+id)
     return this.http.put('http://localhost:8091/api/mentorregister/'+id,object).subscribe(data=>{
       console.log("got data from express put trainer");
     },
     err=>{
       console.log(err);
     });
  }

  GetAllTrainings(id:number){
    console.log("get all trainings id"+id);
    var a="Completed"
    return this.http.get("http://localhost:12345/Training/MentorId/"+id+"/"+a);
  }

  GetAllTrainingsCurrent(id:number){
    var a="Not Completed"
    return this.http.get("http://localhost:12345/Training/MentorId/"+id+"/"+a);
  }

  GetAllPayments(id:number){
    return this.http.get("http://localhost:12345/Payment/GetAllPaymentByMentorId/"+id);
  }

  GetAllMentors(){
    return this.http.get("http://localhost:12345/Mentor/MentorGet");
  }

  BlockMentor(id){
    
    console.log("in")
    return this.http.put("http://localhost:12345/Mentor/UpdateMentorBlock/"+id,{});
    
  }

  DeleteMentor(id){
    return this.http.delete("http://localhost:12345/Mentor/DeleteMentor/"+id);
  }

  EditStatusTraining(i:number,status:string,progress:number){
    return this.http.put("http://localhost:12345/Training/UpdateTrainingByID/"+i+"/"+status+"/"+progress,{});
  }
}

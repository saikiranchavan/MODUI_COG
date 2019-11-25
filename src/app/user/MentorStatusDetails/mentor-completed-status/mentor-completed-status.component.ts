import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { UserregisterService } from '../../userregister.service';
import { RegisterService } from 'src/app/mentor/mentor/register.service';
import { LocalStorageService } from 'ngx-webstorage';
import { PaymentClass } from '../../paymentClass';
import { AppModule } from 'src/app/app.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-completed-status',
  templateUrl: './mentor-completed-status.component.html',
  styleUrls: ['./mentor-completed-status.component.css']
})
export class MentorCompletedStatusComponent implements OnInit {

  constructor(private commonService:CommonService,private userService:UserregisterService,private mentorService:RegisterService,private localsto:LocalStorageService,private router:Router) {
    this.payment=new PaymentClass();
  }
  public payment:PaymentClass; 
  mentorIDs:any=[]
  mentorData:any=[];
  length;
  clicked=false;
  i=0;
  Acknowledge;
  a;
  rating;
  SelectCheck:boolean[];
  ngOnInit() {
    this.a=this.localsto.retrieve("user");
    this.userService.GetAllCompletedTrainings(this.a["userID"]).subscribe(data=>{
      if(data==0){
        this.Acknowledge="You dont have any Completed Training";
      }
      else{
        this.mentorData=data;
        this.SelectCheck=new Array(this.mentorData.length);
        this.SelectCheck.forEach(element => {
          element=false;
        });
      }
    });
  }

  paymentAdd(i:number){
    
    
    this.payment.mentorID=(this.mentorData[i]).mentorID;
    
    this.payment.uID=this.a["userID"];
    
    this.userService.GetAllTechnologiesByName((this.mentorData[i]).technologyName).subscribe(data=>{
      
      this.payment.amount=data["fees"];
    
      this.payment.mentor_Amount=(this.payment.amount)/2;
      
      this.payment.trainingID=(this.mentorData[i]).trainingID;  
      this.userService.AddPayment(this.payment);
       
      
      this.router.navigateByUrl('mentor_status_complete/payment');
    });
    
  }

  RatingMentor(id:number){
    this.userService.AddRating(id,this.rating).subscribe();
  }

  editBool(i){
    this.SelectCheck[i]=true;
  }

}

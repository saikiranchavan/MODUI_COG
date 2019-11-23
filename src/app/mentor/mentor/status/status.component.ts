import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { UserregisterService } from 'src/app/user/userregister.service';
import { RegisterService } from '../register.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private commonService:CommonService,private userService:UserregisterService,private mentorService:RegisterService,private localsto:LocalStorageService) { }
  mentorIDs:any=[]
  mentorData:any=[];
  length;
  clicked=false;
  i=0;
  Acknowledge;
  progress;
  status;
  SelectCheck:boolean[];
  ngOnInit() {
    var a=this.localsto.retrieve("user");
    this.mentorService.GetAllTrainingsCurrent(a["mentorID"]).subscribe(data=>{
      if(data==0){
        this.Acknowledge="There is no Current Training of You";
      }
      console.log(data);
      this.mentorData=data;
      this.SelectCheck=new Array(this.mentorData.length);
      this.SelectCheck.forEach(element => {
        element=false;
      });
    });
  }

  EditProgress(i:number){
    console.log(i+" "+this.status+" "+this.progress);
    if(this.status=="Completed"){
      this.progress=100;
    }
    this.mentorService.EditStatusTraining(i,this.status,this.progress).subscribe(data=>{
      console.log(data);
    });
  }
  editbool(i:number){
    console.log(i+"this is the edit bool");
    this.SelectCheck[i]=true;
  }
}

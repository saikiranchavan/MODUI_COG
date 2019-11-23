import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { UserregisterService } from '../../userregister.service';
import { RegisterService } from 'src/app/mentor/mentor/register.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-mentor-status',
  templateUrl: './mentor-status.component.html',
  styleUrls: ['./mentor-status.component.css']
})
export class MentorStatusComponent implements OnInit {

  constructor(private commonService:CommonService,private userService:UserregisterService,private mentorService:RegisterService,private localsto:LocalStorageService) { }
  mentorIDs:any=[]
  mentorData:any=[];
  length;
  clicked=false;
  i=0;
  Acknowledge;
  ngOnInit() {
    var a=this.localsto.retrieve("user");
    this.userService.GetAllTrainings(a["userID"]).subscribe(data=>{
      if(data==0){
        this.Acknowledge="You dont have any Current Training ";
      }
      this.mentorData=data;
    });
  }
  getMentorStatus(){
    
  }


}

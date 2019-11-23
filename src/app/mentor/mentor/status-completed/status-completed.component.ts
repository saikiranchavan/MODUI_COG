import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { UserregisterService } from 'src/app/user/userregister.service';
import { RegisterService } from '../register.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-status-completed',
  templateUrl: './status-completed.component.html',
  styleUrls: ['./status-completed.component.css']
})
export class StatusCompletedComponent implements OnInit {

  constructor(private commonService:CommonService,private userService:UserregisterService,private mentorService:RegisterService,private localsto:LocalStorageService) { }
  mentorIDs:any=[]
  mentorData:any=[];
  length;
  clicked=false;
  i=0;
  Acknowledge;
  ngOnInit() {
    var a=this.localsto.retrieve("user");
    this.mentorService.GetAllTrainings(a["mentorID"]).subscribe(data=>{
      if(data==0){
        this.Acknowledge="You dont have Completed Training";
      }
      this.mentorData=data;
    });
  }

}

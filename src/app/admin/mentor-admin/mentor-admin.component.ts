import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { UserregisterService } from 'src/app/user/userregister.service';
import { RegisterService } from 'src/app/mentor/mentor/register.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-mentor-admin',
  templateUrl: './mentor-admin.component.html',
  styleUrls: ['./mentor-admin.component.css']
})
export class MentorAdminComponent implements OnInit {

  constructor(private commonService:CommonService,private userService:UserregisterService,private mentorService:RegisterService,private localsto:LocalStorageService) { }
  mentorIDs:any=[]
  userData:any=[];
  length;
  clicked=false;
  i=0;
  Acknowledge;
  BlockBool:boolean[];

  ngOnInit() {
    this.mentorService.GetAllMentors().subscribe(data=>{
      if(data==0){
        this.Acknowledge="There are no Registered User";
      }
      else{
        console.log(data);
        this.userData=data;
        this.BlockBool=new Array(this.userData.length);
        var j=0;
        this.userData.forEach(element => {
          if(element["mentorBlock"]==null){
            this.BlockBool[j++]=false;
          }
          else{
            this.BlockBool[j++]=element["mentorBlock"];
          }
        });
      }
    }
    );
  }

  BlockMentor(i:number){
    
    this.BlockBool[i]=!this.BlockBool[i];
    this.mentorService.BlockMentor((this.userData[i]["mentorID"])).subscribe();
  
  }

  DeleteMentor(id){

    this.mentorService.DeleteMentor((this.userData[id]["mentorID"])).subscribe();
  }

}

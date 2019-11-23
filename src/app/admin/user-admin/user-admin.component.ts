import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { UserregisterService } from 'src/app/user/userregister.service';
import { RegisterService } from 'src/app/mentor/mentor/register.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {

  constructor(private commonService:CommonService,private userService:UserregisterService,private mentorService:RegisterService,private localsto:LocalStorageService) { }
  mentorIDs:any=[]
  userData:any=[];
  length;
  clicked=false;
  i=0;
  Acknowledge;
  BlockBool:boolean[];

  ngOnInit() {
    this.userService.GetAllUsers().subscribe(data=>{
      if(data==0){
        this.Acknowledge="There are no Registered User";
      }
      else{
        console.log(data);
        this.userData=data;
        this.BlockBool=new Array(this.userData.length);
        var j=0;
        this.userData.forEach(element => {
          if(element["userBlock"]==null){
            this.BlockBool[j++]=false;
          }
          else{
            this.BlockBool[j++]=element["userBlock"];
          }
        });
      }
    }
    );
  }

  
  BlockUser(i:number){
    
      this.BlockBool[i]=!this.BlockBool[i];
      console.log("this is inside the blockUser"+(this.userData[i]["uid"]));
      this.userService.BlockUser((this.userData[i]["uid"])).subscribe();
    
  }

  DeleteUser(id){

    this.userService.DeleteUser((this.userData[id]["uid"])).subscribe();
  }

}

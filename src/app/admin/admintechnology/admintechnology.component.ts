import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { UserregisterService } from 'src/app/user/userregister.service';
import { RegisterService } from 'src/app/mentor/mentor/register.service';
import { LocalStorageService } from 'ngx-webstorage';
import { AdminService } from '../admin.service';
import { TechnologyClass } from 'src/app/user/TechnologyClass';

@Component({
  selector: 'app-admintechnology',
  templateUrl: './admintechnology.component.html',
  styleUrls: ['./admintechnology.component.css']
})
export class AdmintechnologyComponent implements OnInit {

  constructor(private commonService:CommonService,private adminService:AdminService,private userService:UserregisterService,private mentorService:RegisterService,private localsto:LocalStorageService) { 
    this.technologyClass=new TechnologyClass();
  }
  
  technologyClass:TechnologyClass
  Data:any=[];
  length;
  clicked=false;
  i=0;
  Acknowledge;
  EditCheck:boolean[];
  ngOnInit() {
    this.adminService.GetAllTechnologies().subscribe(data=>{
      this.Data=data;
      console.log(data);
      this.EditCheck=new Array(this.Data.length);
      this.EditCheck.forEach(element => {
        element=false;
      });
    })
  }

  editbool(i:number){
    this.EditCheck[i]=!this.EditCheck[i]
  }

  EditTech(i:number){
    this.technologyClass.techID=i;
    console.log(this.technologyClass["techID"]+this.technologyClass["duration"]+this.technologyClass["technologyName"]+this.technologyClass["tOC"]+this.technologyClass["fees"])
    this.adminService.UpdateTech(this.technologyClass).subscribe(data=>{
      console.log(data);
    });
  }

  AddTech(){
    //console.log(this.technologyClass["techID"]+this.technologyClass["duration"]+this.technologyClass["technologyName"]+this.technologyClass["tOC"]+this.technologyClass["fees"])
    this.adminService.AddTechnology(this.technologyClass).subscribe(data=>{
      console.log(data);
    });

  }

}

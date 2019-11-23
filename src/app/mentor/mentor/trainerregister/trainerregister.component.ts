import { Component, OnInit } from '@angular/core';
import { trainerClass } from '../trainerClass';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { TechnologyClass } from 'src/app/user/TechnologyClass';
import { UserregisterService } from 'src/app/user/userregister.service';


@Component({
  selector: 'app-trainerregister',
  templateUrl: './trainerregister.component.html',
  styleUrls: ['./trainerregister.component.css']
})
export class TrainerregisterComponent implements OnInit {
  checkPass;
  feesInCom
  trainerData1;
  trainerData:trainerClass;
  Technologies:TechnologyClass[];
  constructor(private service:RegisterService,private router:Router,private userService:UserregisterService) { 
    this.trainerData=new trainerClass();
  }
  
  checkValidate(){
   
    if(this.trainerData.password==this.checkPass){
      
      return true;
    }
    else{
      return false;
    }
  }
  
  acknowledge:any;
  acknow=false;
  submit(){
    this.service.trainerRegister(this.trainerData).subscribe(
      data=>{
        this.acknowledge=data.toString();
        this.acknow=true;
        console.log(data);
        this.router.navigate(['/login']);
      },
      err=>{
        this.acknowledge=err;
        this.acknow=true;
      }
    );
  }
  
  
  
  ngOnInit() {
    this.userService.GetTechnologies().subscribe(data=>{
      this.Technologies=data;
      console.log(this.Technologies);
    }); 
  }

}

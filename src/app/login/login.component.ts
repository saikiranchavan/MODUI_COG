import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router'
import { LoginService } from './login.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { CommonService } from '../common.service';
import { RegisterService } from '../mentor/mentor/register.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private service:LoginService,private localsto:LocalStorageService,
    private sessionSt:SessionStorageService,private commonService:CommonService,private mentorService:RegisterService) { }
  user;
  pass1;
  a;
  username_loc_data=[];
  username_loc=[];
  email_init="";
  data;
  mentorIDs:any=[]
  mentorData:any=[];
  length;
  i=0;
  myObj={'username':this.user,'password':this.pass1}
  @Output() childEvent=new EventEmitter();
  Login(){
    if(this.a==1){
      this.userLogin();
    }
    else if(this.a==2){
      this.trainerLogin();
    }
    else if(this.a==3){
      this.adminLogin();
    }
  }
  
  userLogin(){
    
    
    this.service.getMethod1(this.user,this.pass1).subscribe(data=>{
      console.log(data);
      
      if(data["block"]==true){
        this.data="Your Account Is Blocked By Admin";
      }
      else if(data["message"]=="Invalid User"){
        this.data="There is no User with this email ";
      }
      
      else{
        this.data=data;
        this.localsto.store("user",data);
        this.username_loc_data=this.localsto.retrieve("user");
        this.router.navigate(['/home']);
      }
    },
    err=>{
      
      this.data="No User Found With this Username or Password";
    }
    )
    
  }

  trainerLogin(){
    
    this.service.getMethod2(this.user,this.pass1).subscribe(data=>{
      console.log(data);
      
      this.data=data;
      if(data["block"]==true){
        this.data="Your Account Is Blocked By Admin";
      }
      if(data["message"]=="Invalid User"){
        this.data="There is no Mentor with this email ";
      }
      
      else{
        
        this.localsto.store("user",data);
        this.username_loc_data=this.localsto.retrieve("user");
        this.commonService.check_Mentor_Login=false;
        
        
        this.router.navigate(['/mentorhome']);
      }
    },
    err=>{
      
      this.data="No Mentor Found With this Username or Password";
    }
    )
    
  }

  adminLogin(){
    
    this.service.getMethod3(this.user,this.pass1).subscribe(data=>{
      console.log(data);
      
      this.data=data;
      if(data["message"]=="Invalid Admin"){
        this.data="There is no Admin with this email";
      }
      else{
        
        this.localsto.store("user",data);
        this.username_loc_data=this.localsto.retrieve("user");
        //this.commonService.check_Mentor_Login=false;
      

      this.router.navigate(['/adminhome']);
      }
    },
    err=>{
      
      this.data="No Admin Found With this Username or Password";
    }
    )
  }
  

  ngOnInit() {
  }

}

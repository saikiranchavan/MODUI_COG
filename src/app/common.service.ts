import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private router:Router,private localsto:LocalStorageService,private sessionSt:SessionStorageService) { }
  public username1;
  check_localdata:boolean=false;
  check_Mentor_Login:boolean=true;
  check_Admin_Login:boolean=false;
  username_loc_data=[];
  username_loc_data1=[];
  userObject;
  mentorObject:any=[];
  provideUser(data){
    console.log("inside provide user"+data);
    this.userObject=data;
  }
  getUser(){
    //console.log("inside getUser"+this.userObject.mentorProposal);
    return this.userObject;
  }

  provideMentor(data){
    this.mentorObject=data;

  }

  getMentor(){
    return this.mentorObject;
  }
  provideUserName(data){
    console.log("this is data inside provide User name"+data);
    this.username1=data;
  }
  
  local_storage_data;
  getUserName():string{
    
    if(this.mentorLogin()){
      console.log("from getUsername mentorname"+this.localsto["mentorName"]);
      this.local_storage_data=this.localsto.retrieve("user");
      return this.local_storage_data["name"];
    }
    else if(this.adminLogin()){
      console.log("this is from the admin Login common service");
      this.local_storage_data=this.localsto.retrieve("user");
      return this.local_storage_data["name"];
    }
    else{
      
      this.local_storage_data=this.localsto.retrieve("user");
      //console.log("this is from the getUserName else part"+this.local_storage_data["name"]);
      return this.local_storage_data["name"];
      
    }
      
  }

  checkLocalToken():boolean{
    
    this.username_loc_data=this.localsto.retrieve("user");
    
    if(this.username_loc_data===null){
       this.check_localdata=false;
    }
    else{
       this.check_localdata=true;
    } 
    return this.check_localdata;
    
  }

  LogoutUser(){

    this.localsto.clear("user");

    console.log("the user data is deleted");
    this.router.navigate(['home']);
  }

  mentorLogin():boolean{
    
    if(this.checkLocalToken()&&(this.localsto.retrieve("user"))["mentorID"]!=0&&(this.localsto.retrieve("user"))["userID"]==0&&(this.localsto.retrieve("user"))["id"]==0){
      
      return true;
    }
    else{
      return false;
    }
  }

  adminLogin():boolean{
    if(this.checkLocalToken()&&(this.localsto.retrieve("user"))["id"]!=0&&(this.localsto.retrieve("user"))["mentorID"]==0&&(this.localsto.retrieve("user"))["userID"]==0){
      return true;
    }
    else{
      return false;
    }
  }
}

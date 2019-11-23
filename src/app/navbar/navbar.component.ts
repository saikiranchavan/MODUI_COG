import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username_loc_data=[];
  username;
  check_localdata:boolean;
  title = 'project';
  check:boolean=false;
  constructor(private router:Router,private localsto:LocalStorageService,private sessionSt:SessionStorageService,private commonService:CommonService) { }
  
  checkLocal(event){
    this.check=!this.commonService.checkLocalToken();
    console.log("inside checkLocal")
    this.username_loc_data=this.localsto.retrieve("user");
    this.username=event;
    console.log(this.username_loc_data[0]+" "+this.username_loc_data[1]);
    if(this.username_loc_data.length==0){
      this.check_localdata=false;     
    }
    else{
      this.check_localdata=true;
    }  
  }

  routerCheck(){
    if(this.commonService.check_Mentor_Login==true){
      this.router.navigate(['home']);
    }
    else{
      this.router.navigate(['mentorhome']);
    }
  }
  ngOnInit() {
  }

}

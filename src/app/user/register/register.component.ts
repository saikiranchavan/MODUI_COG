import { Component, OnInit } from '@angular/core';
import { userClass } from '../userRClass';
import { UserregisterService } from '../userregister.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  checkPass;
  acknow;
  acknowledge;
  userData:userClass;
  constructor(private service:UserregisterService,private router:Router) { 
  this.userData=new userClass();
  }
  ngOnInit() {
  }

  checkValidate(){
    console.log("hello from validator");
    if(this.userData.password==this.checkPass){
      
      return true;
    }
    else{
      return false;
    }
  }

  submit(){
    this.service.userRegister(this.userData).subscribe(
      data=>{
        console.log("data"+data);
        this.acknowledge=data;
        this.acknow=true;
        this.router.navigate(['/login']);
      },
      err=>{
        this.acknowledge=err;
        this.acknow=true;
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { RegisterService } from 'src/app/mentor/mentor/register.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminpayment',
  templateUrl: './adminpayment.component.html',
  styleUrls: ['./adminpayment.component.css']
})
export class AdminpaymentComponent implements OnInit {

  constructor(private router:Router,private localsto:LocalStorageService,private sessionSt:SessionStorageService,private mentorservice:RegisterService,private adminservice:AdminService) {}
  Acknowledge;
  
  Pdata:any;
  ngOnInit() {
    var a=this.localsto.retrieve("user");
    
    this.adminservice.GetAllPayments().subscribe(data=>{
      if(data==0){
        this.Acknowledge="There is no Payment Transaction till now";
      }
      console.log(data);
      this.Pdata=data;
    });
  }

}

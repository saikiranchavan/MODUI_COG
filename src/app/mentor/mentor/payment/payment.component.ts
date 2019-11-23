import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { RegisterService } from '../register.service';
import { PaymentClass } from 'src/app/user/paymentClass';
import { Mentorpayments } from '../mentorpayments';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router,private localsto:LocalStorageService,private sessionSt:SessionStorageService,private mentorservice:RegisterService) {
    this.mentorpaymentData=new Mentorpayments();
   }
  Acknowledge;
  mentorpaymentData:Mentorpayments;
  Pdata:any;
  ngOnInit() {
    var a=this.localsto.retrieve("user");
    
    this.mentorservice.GetAllPayments(a["mentorID"]).subscribe(data=>{
      if(data==0){
        this.Acknowledge="There is no Payment Transaction till now";
      }
      console.log(data);
      this.Pdata=data;

    });
  }

}

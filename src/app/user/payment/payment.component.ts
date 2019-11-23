// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }
  progress:number=0;
  b1:boolean=false;
  b2:boolean=false;
  b3:boolean=false;
  b4:boolean=false;
  ngOnInit() {
  }
  changeP(n:number){
    this.progress=n;
    if(n==25){
      this.b1=true;
    }
    else if(n==50){
      this.b2=true;
    }
    else if(n==75){
      this.b3=true;
    }
    else if(n==100){
      this.b4=true;
    }

  }

}
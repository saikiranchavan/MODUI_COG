import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CommonService } from './common.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router:Router,private commonService:CommonService) { }
  canActivate(){
    console.log("iam here to see whether ur logged in");
    if(!this.commonService.checkLocalToken()){
      this.router.navigateByUrl('/login');
    }
    return true;
  }
}

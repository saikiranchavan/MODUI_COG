import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { Router, RouterModule } from '@angular/router';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { MentorAdminComponent } from './mentor-admin/mentor-admin.component';
import { AdminpaymentComponent } from './adminpayment/adminpayment.component';
import { AdmintechnologyComponent } from './admintechnology/admintechnology.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdminComponent,UserAdminComponent,MentorAdminComponent, AdminpaymentComponent, AdmintechnologyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'adminhome',component:AdminComponent,
      children:[
        
        {path:'payment',component:AdminpaymentComponent},
        {path:'technology',component:AdmintechnologyComponent},
        {path:'mentor',component:MentorAdminComponent},
        {path:'user',component:UserAdminComponent},
      ]},
      
    ]),
    FormsModule
  ]
})
export class AdminModule { }

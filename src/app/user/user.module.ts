import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MentorsearchComponent } from './mentorsearch/mentorsearch.component';
import { AuthGuardService } from 'src/app/auth-guard.service';
import { PaymentComponent } from './payment/payment.component';
import { MentorStatusComponent } from './MentorStatusDetails/mentor-status/mentor-status.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { MentorCompletedStatusComponent } from './MentorStatusDetails/mentor-completed-status/mentor-completed-status.component';
import { FormsModule } from '@angular/forms';
//import { MentorCurrentStatusComponent } from './MentorStatusDetails/mentor-current-status/mentor-current-status.component';



@NgModule({
  declarations: [MentorsearchComponent,
  PaymentComponent,
  MentorCompletedStatusComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild([
      {path:'register/user_register',component:RegisterComponent},
      {path:"user/mentor_search",component:MentorsearchComponent},
      {path:"user/mentor_search/pay",component:PaymentComponent,canActivate:[AuthGuardService]},
      {path:'mentor_status/payment',component:PaymentComponent,canActivate:[AuthGuardService]},
      {path:'mentor_status_complete/payment',component:PaymentComponent,canActivate:[AuthGuardService]},
      {path:'mentor_status',component:MentorStatusComponent,
        children:[
          {path:'',redirectTo:'mentor_status',pathMatch:'full'},
          {path:'payment',component:PaymentComponent,canActivate:[AuthGuardService]}
        ]
      
      },
      {path:'mentor_status_complete',component:MentorCompletedStatusComponent,
        children:[
          {path:'',redirectTo:'mentor_status',pathMatch:'full'},
          {path:'payment',component:PaymentComponent,canActivate:[AuthGuardService]}
        ]
      
      },
      
    ])
  ],
  providers: [AuthGuardService]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TrainerregisterComponent } from './trainerregister/trainerregister.component';
import { MentorhomeComponent } from './mentorhome/mentorhome.component';
import { StatusComponent } from './status/status.component';
import { StatusCompletedComponent } from './status-completed/status-completed.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [MentorhomeComponent, StatusComponent, StatusCompletedComponent, PaymentComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'mentorhome',component:MentorhomeComponent,children:
      [
        {path:'User_status',component:StatusComponent},
        {path:'User_status_complete',component:StatusCompletedComponent},
        {path:'payment',component:PaymentComponent}
      ]},
      {path:'register/trainer_register',component:TrainerregisterComponent}
    ])
  ]
})
export class MentorModule { }

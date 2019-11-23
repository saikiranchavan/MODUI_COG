import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './user/home/home.component';
import { TrainerregisterComponent } from './mentor/mentor/trainerregister/trainerregister.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuardService } from './auth-guard.service';
import { UserModule } from './user/user.module';
import { MentorStatusComponent } from './user/MentorStatusDetails/mentor-status/mentor-status.component';
//import { AuthGuardComponent } from './auth-guard/auth-guard.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MentorModule } from './mentor/mentor/mentor.module';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { NavbarComponent } from './navbar/navbar.component'
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TrainerregisterComponent,
    NotfoundComponent,
    MentorStatusComponent,
    NavbarComponent
    
    
  ],
  imports: [
    BrowserModule,
    UserModule,
    FormsModule,
    MentorModule,
    AdminModule,
    AppRoutingModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

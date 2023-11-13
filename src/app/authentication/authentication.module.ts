import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SharedModule } from '../shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MpinComponent } from './mpin/mpin.component';
import { FormsModule } from '@angular/forms';
import { ChangepwdComponent } from './changepwd/changepwd.component'; // Import this line

@NgModule({
  declarations: [
    SigninComponent,
ForgotPasswordComponent,
MpinComponent,
ChangepwdComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AuthenticationRoutingModule,
  
  ],

})
export class AuthenticationModule { }


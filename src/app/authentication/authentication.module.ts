import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SharedModule } from '../shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MpinComponent } from './mpin/mpin.component';
import { FormsModule } from '@angular/forms';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreatempinComponent } from './creatempin/creatempin.component';
import { MpinForgotComponent } from './mpin-forgot/mpin-forgot.component'; // Import this line
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  declarations: [
    SigninComponent,
    ForgotPasswordComponent,
    MpinComponent,
    ChangepwdComponent,
    ResetPasswordComponent,
    CreatempinComponent,
    MpinForgotComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgOtpInputModule,
    AuthenticationRoutingModule,

  ],

})
export class AuthenticationModule { }


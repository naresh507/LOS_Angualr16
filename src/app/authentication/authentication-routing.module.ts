import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MpinComponent } from './mpin/mpin.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreatempinComponent } from './creatempin/creatempin.component';
import { MpinForgotComponent } from './mpin-forgot/mpin-forgot.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'mpin',component:MpinComponent} ,
  { path: 'login', component: SigninComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'changepassword', component: ChangepwdComponent },
  { path: 'resetpasword', component: ResetPasswordComponent },
  { path: 'createMpin', component: CreatempinComponent },
  { path: 'mpinforgot', component: MpinForgotComponent }

//  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  // { path: '', component: SigninComponent, data: { title: 'SignIn'} },
  // { path: 'signup', component: SignupComponent, data: { title: 'SignUp'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

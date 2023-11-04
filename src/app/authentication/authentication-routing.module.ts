import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MpinComponent } from './mpin/mpin.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
 // {path:'',component:MpinComponent} ,
  { path: 'login', component: SigninComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'changepassword', component: ChangepwdComponent }


//  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  // { path: '', component: SigninComponent, data: { title: 'SignIn'} },
  // { path: 'signup', component: SignupComponent, data: { title: 'SignUp'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

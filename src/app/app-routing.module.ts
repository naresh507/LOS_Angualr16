import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './authentication/signin/signin.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { NewapplicationsearchComponent } from './layout/newapplication/newapplicationsearch/newapplicationsearch.component';
import { NewapplicationComponent } from './layout/newapplication/newapplication.component';
import { NewapplicationformComponent } from './layout/newapplication/newapplicationform/newapplicationform.component';
import { AddnewApplicationComponent } from './layout/addnew-application/addnew-application.component';
import { KycComponent } from './layout/layout/kyc/kyc.component';
import { BasicdetailsComponent } from './layout/basicdetails/basicdetails.component';
import { CashflowDetailsComponent } from './layout/cashflow-details/cashflow-details.component';

const routes: Routes = [
  // { path: 'signin', component: SigninComponent },
  // { path: 'forgotpassword', component: ForgotPasswordComponent },

  
  { path: '', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
  //  { path: 'applicationsearch', component: NewapplicationsearchComponent },
  //   { path: 'newapplication', component: NewapplicationComponent },
  //   { path: 'newapplicationform', component: NewapplicationformComponent },
  //   { path: 'addnewClient', component: AddnewApplicationComponent },
  //   {path:'kyc', component:KycComponent},
  //   {path:'details', component:BasicdetailsComponent},
  //   {path:'cashflowdetails', component:CashflowDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
  import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NewapplicationsearchComponent } from './newapplication/newapplicationsearch/newapplicationsearch.component';
import { NewapplicationComponent } from './newapplication/newapplication.component';
import { NewapplicationformComponent } from './newapplication/newapplicationform/newapplicationform.component';
import { KycComponent } from './layout/kyc/kyc.component';
import { AddnewApplicationComponent } from './addnew-application/addnew-application.component';
import { BasicdetailsComponent } from './basicdetails/basicdetails.component';
//import { MemberdetailsComponent } from './memberdetails/memberdetails.component';
import { HouseholddetailsComponent } from './householddetails/householddetails.component';
import { CashflowDetailsComponent } from './cashflow-details/cashflow-details.component';
import { LucCheckComponent } from './luc-check/luc-check.component';
import { LucClientListComponent } from './luc-client-list/luc-client-list.component';
import { LucClientDetailsComponent } from './luc-client-details/luc-client-details.component';
import { FeelistComponent } from './feelist/feelist.component';
import { FeeDetailsComponent } from './fee-details/fee-details.component';
import { CbrejectiondataComponent } from './cbrejectiondata/cbrejectiondata.component';
import { LafCheckComponent } from './laf-check/laf-check.component';
import { LafCheckComponent as LafCheckComponent_ao } from './ao/laf-check/laf-check.component';
import { LafClientDetailsComponent } from './laf-client-details/laf-client-details.component';
import { FaqComponent } from './faq/faq.component';
import { VideoComponent } from './video/video.component';
import { NotificationComponent } from './notification/notification.component';
import { VillageComponent } from './village/village.component';
import { LoandetailsComponent } from './layout/loandetails/loandetails.component';
import { GstdetailsComponent } from './layout/gstdetails/gstdetails.component';
import { ApperiasalCheckComponent } from './ao/apperiasal-check/apperiasal-check.component';
import { ApperiasaldetailsComponent } from './ao/apperiasalDetails/apperiasaldetails.component';
import { AdharotpComponent } from './adharotp/adharotp.component';
import { SamvoterComponent } from './samvoter/samvoter.component';
import { AadharclientpictureComponent } from './aadharclientpicture/aadharclientpicture.component';



const routes: Routes = [
// {path:'',redirectTo:'/dashboard', pathMatch:'full'},

{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: LayoutComponent,
    children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'applicationsearch', component: NewapplicationsearchComponent },
    { path: 'newapplication', component: NewapplicationComponent },
    { path: 'newapplicationform', component: NewapplicationformComponent },
    { path: 'addnewClient', component: AddnewApplicationComponent },
    {path:'kyc', component:KycComponent},
    {path:'details', component:BasicdetailsComponent},
    {path:'cashflow',component:CashflowDetailsComponent},
    {path:'loanDetails',component:LoandetailsComponent},
    {path:'luccheck',component:LucCheckComponent},
    {path:'lucClientlist', component:LucClientListComponent},
    {path:'lucClienetDetails', component:LucClientDetailsComponent },
    {path:'feelist', component:FeelistComponent },
    {path:'feedetails', component:FeeDetailsComponent},
    {path:'cbrejection', component:CbrejectiondataComponent},
    {path:'lafcheck', component:LafCheckComponent},
    {path:'lafcheck-ao', component:LafCheckComponent_ao},
    {path:'lafClienetDetails', component:LafClientDetailsComponent},
    {path:'faq', component:FaqComponent},
    {path:'video', component:VideoComponent},
    {path:'notification', component:NotificationComponent},
    {path:'village', component:VillageComponent},
    {path:'gstdetails',component:GstdetailsComponent},
    
    {path:'apperiasal', component:ApperiasalCheckComponent},
    {path:'apperiaseldetails', component:ApperiasaldetailsComponent},
    {path:'aadharotp', component:AdharotpComponent},

    {path:'voterocr', component:SamvoterComponent},
    {path:'clientpicture', component:AadharclientpictureComponent}
   ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}

export const components = [
 
];

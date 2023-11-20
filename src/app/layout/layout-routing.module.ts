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
    { path: 'dashboard', component: DashboardComponent },      /*completed*/
    { path: 'applicationsearch', component: NewapplicationsearchComponent },   /*completed*/
    { path: 'newapplication', component: NewapplicationComponent },    /*completed*/
    { path: 'newapplicationform', component: NewapplicationformComponent },   /*completed*/
    { path: 'addnewClient', component: AddnewApplicationComponent }, /*completed*/
    {path:'kyc', component:KycComponent},  /*Pending*/
    {path:'details', component:BasicdetailsComponent},    /* all most is completed completed*/
    {path:'cashflow',component:CashflowDetailsComponent}, /*Pending  HH Monthly Income*/
    {path:'loanDetails',component:LoandetailsComponent},   /*Pending   loanDetails Fetch & Insurance Details*/
    {path:'luccheck',component:LucCheckComponent},      /*Pending*/
    {path:'lucClientlist', component:LucClientListComponent},   /*Pending*/
    {path:'lucClienetDetails', component:LucClientDetailsComponent },  /*Pending*/
    {path:'feelist', component:FeelistComponent },   /*Pending*/
    {path:'feedetails', component:FeeDetailsComponent},  /*Pending*/
    {path:'cbrejection', component:CbrejectiondataComponent},  /*Pending*/
    {path:'lafcheck', component:LafCheckComponent},  /*Pending*/
    {path:'lafcheck-ao', component:LafCheckComponent_ao},  /*Pending*/
    {path:'lafClienetDetails', component:LafClientDetailsComponent},   /*Pending*/
    {path:'faq', component:FaqComponent},   /*completed   but not clarity*/
    {path:'video', component:VideoComponent},   /*completed   but not clarity*/
    {path:'notification', component:NotificationComponent},  /*Pending*/
    {path:'village', component:VillageComponent},   /*Pending*/
    {path:'gstdetails',component:GstdetailsComponent},  /*Pending*/
    
    {path:'apperiasal', component:ApperiasalCheckComponent},  /*Pending*/
    {path:'apperiaseldetails', component:ApperiasaldetailsComponent},  /*Pending*/
    {path:'aadharotp', component:AdharotpComponent},  /*completed   design pending*/

    {path:'voterocr', component:SamvoterComponent},  /*completed   design pending*/
    {path:'clientpicture', component:AadharclientpictureComponent}  /*completed   design pending  camera capture api integration is pending*/
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {  LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NewapplicationComponent } from './newapplication/newapplication.component';
import { NewapplicationsearchComponent } from './newapplication/newapplicationsearch/newapplicationsearch.component';
import { NewapplicationformComponent } from './newapplication/newapplicationform/newapplicationform.component';
// import { KycComponent } from './layout/kyc/kyc.component';
import { AddnewApplicationComponent } from './addnew-application/addnew-application.component';
import { BasicdetailsComponent } from './basicdetails/basicdetails.component';
import { HouseholddetailsComponent } from './householddetails/householddetails.component';
import { CashflowDetailsComponent } from './cashflow-details/cashflow-details.component';
import { CashflowformsComponent } from './cashflowforms/cashflowforms.component';
import { HhexpensesComponent } from './hhexpenses/hhexpenses.component';
import { HhliablityComponent } from './hhliablity/hhliablity.component';
import { HhloanComponent } from './hhloan/hhloan.component';
import { LucCheckComponent } from './luc-check/luc-check.component';
import { LucCheckSearchComponent } from './luc-check-search/luc-check-search.component';
import { LucClientListComponent } from './luc-client-list/luc-client-list.component';
import { LucClientDetailsComponent } from './luc-client-details/luc-client-details.component';
import { FeelistComponent } from './feelist/feelist.component';
import { FeeDetailsComponent } from './fee-details/fee-details.component';
import { CbrejectiondataComponent } from './cbrejectiondata/cbrejectiondata.component';
import { LafCheckSearchComponent } from './laf-check-search/laf-check-search.component';
import { LafCheckSearchComponent as LafCheckSearchComponent_ao } from './ao/laf-check-search/laf-check-search.component';
import { LafCheckComponent } from './laf-check/laf-check.component';
import { LafCheckComponent as LafCheckComponent_ao } from './ao/laf-check/laf-check.component';
import { LafClientDetailsComponent } from './laf-client-details/laf-client-details.component';
import { FaqComponent } from './faq/faq.component';
import { VideoComponent } from './video/video.component';
import { NotificationComponent } from './notification/notification.component';
import { VillageComponent } from './village/village.component';
import { LoandetailsComponent } from './layout/loandetails/loandetails.component';
import { GuarantordetailsComponent } from './layout/guarantordetails/guarantordetails.component';
import { InsurancedetailsComponent } from './layout/insurancedetails/insurancedetails.component';
import { BankdetailsComponent } from './layout/bankdetails/bankdetails.component';
import { GstdetailsComponent } from './layout/gstdetails/gstdetails.component';
import { ApperiasalCheckComponent } from './ao/apperiasal-check/apperiasal-check.component';
import { ApperiasalSearchComponent } from './ao/apperiasal-search/apperiasal-search.component';
import { ApperiasaldetailsComponent } from './ao/apperiasalDetails/apperiasaldetails.component';

import { StatisticsGraphComponent } from './statistics-graph/statistics-graph.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { BMDashboardComponent } from './bm-dashboard/bm-dashboard.component';
import { InsightsComponent } from './insights/insights.component';
import { AMDashboardComponent } from './am-dashboard/am-dashboard.component';
import { AdharotpComponent } from './adharotp/adharotp.component';
import { SamvoterComponent } from './samvoter/samvoter.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgOtpInputModule } from 'ng-otp-input';
import { AadharclientpictureComponent } from './aadharclientpicture/aadharclientpicture.component';
import { WebcamModule } from 'ngx-webcam';
import { MemberdetailsComponent } from './memberdetails/memberdetails.component';

import { BmverifyclientdetailsComponent } from './BM/Review/bmverifyclientdetails/bmverifyclientdetails.component';
import { BmbasicdetailsBorrowerComponent } from './BM/Review/BMbasicdetails/bmbasicdetails-borrower/bmbasicdetails-borrower.component';
import { BmearningmemberdetailsComponent } from './BM/Review/BMbasicdetails/bmearningmemberdetails/bmearningmemberdetails.component';
import { BmhouseholddetailsComponent } from './BM/Review/BMbasicdetails/bmhouseholddetails/bmhouseholddetails.component';

import { BmcashflowdetailsComponent } from './BM/Review/CashFlow/bmcashflowdetails/bmcashflowdetails.component';

import { BmhhexpensesComponent } from './BM/Review/CashFlow/bmhhexpenses/bmhhexpenses.component';
import { BmhhliabilityComponent } from './BM/Review/CashFlow/bmhhliability/bmhhliability.component';
import { BmhhloaneligibilityComponent } from './BM/Review/CashFlow/bmhhloaneligibility/bmhhloaneligibility.component';
import { BmGuarantorsdetailsComponent } from './BM/Review/LoanDetails/bm-guarantorsdetails/bm-guarantorsdetails.component';
import { BminsurancedetailsComponent } from './BM/Review/LoanDetails/bminsurancedetails/bminsurancedetails.component';
import { BmbankdetailsComponent } from './BM/Review/LoanDetails/bmbankdetails/bmbankdetails.component';
import { BmloandetailsComponent } from './BM/Review/LoanDetails/bmloandetails/bmloandetails.component';
import { BmcashflowformsComponent } from './BM/Review/CashFlow/bmcashflowforms/bmcashflowforms.component';
import { BmupdateerarningmemberComponent } from './BM/Review/BMbasicdetails/bmupdateerarningmember/bmupdateerarningmember.component';
import { BmUpdateHoulddetailsComponent } from './BM/Review/BMbasicdetails/bm-update-houlddetails/bm-update-houlddetails.component';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
  
    SidebarComponent,
    ContactusComponent,
    NewapplicationComponent,
    NewapplicationsearchComponent,
    NewapplicationformComponent,
    // KycComponent,
    AddnewApplicationComponent,
    BasicdetailsComponent,
    HouseholddetailsComponent,
    MemberdetailsComponent,
    CashflowDetailsComponent,
    CashflowformsComponent,
    HhexpensesComponent,
    HhliablityComponent,
    HhloanComponent,
    LucCheckComponent,
    LucCheckSearchComponent,
    LucClientListComponent,
    LucClientDetailsComponent,
    FeelistComponent,
    FeeDetailsComponent,
    CbrejectiondataComponent,
    LafCheckSearchComponent,
    LafCheckSearchComponent_ao,
    LafCheckComponent,
    LafCheckComponent_ao,
    LafClientDetailsComponent,
    FaqComponent,
    VideoComponent,
    NotificationComponent,
    VillageComponent,
    LoandetailsComponent,
    GuarantordetailsComponent,
    InsurancedetailsComponent,
    BankdetailsComponent,
    GstdetailsComponent,
    ApperiasalCheckComponent,
    ApperiasalSearchComponent,
    ApperiasaldetailsComponent,
  
    StatisticsGraphComponent,
    StaffDashboardComponent,
    BMDashboardComponent,
    AMDashboardComponent,
    InsightsComponent,
  
    BmverifyclientdetailsComponent,
    BmbasicdetailsBorrowerComponent,
    BmearningmemberdetailsComponent,
    BmhouseholddetailsComponent,

    BmcashflowdetailsComponent,
  
    BmhhexpensesComponent,
    BmhhliabilityComponent,
    BmhhloaneligibilityComponent,
    BmGuarantorsdetailsComponent,
    BminsurancedetailsComponent,
    BmbankdetailsComponent,
    BmloandetailsComponent,
    BmcashflowformsComponent,
    BmupdateerarningmemberComponent,
    BmUpdateHoulddetailsComponent,
    
    
    // SamvoterComponent,
    // AadharclientpictureComponent


  ],
  imports: [
    LayoutRoutingModule,
    SharedModule,
    NgApexchartsModule,
    WebcamModule,
    
    CommonModule,
    
  ]
})
export class LayoutModule { }

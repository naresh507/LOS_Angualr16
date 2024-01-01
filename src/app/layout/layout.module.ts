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
import { BmverifyclientdetailsComponent } from './bmverifyclientdetails/bmverifyclientdetails.component';
import { BMBmbasicdetailsComponent } from './bmbmbasicdetails/bmbmbasicdetails.component';
import { BMearningmemberdetailsComponent } from './bmearningmemberdetails/bmearningmemberdetails.component';
import { BMupdateerarningmemberComponent } from './bmupdateerarningmember/bmupdateerarningmember.component';
import { BMhouseholddetailsComponent } from './bmhouseholddetails/bmhouseholddetails.component';
import { BMupdatehoulddetailsComponent } from './bmupdatehoulddetails/bmupdatehoulddetails.component';
import { BMbmcashflowdetailsComponent } from './bmbmcashflowdetails/bmbmcashflowdetails.component';
import { BMbmcashflowHhexpensesComponent } from './bmbmcashflow-hhexpenses/bmbmcashflow-hhexpenses.component';
import { BMbmcashflowHhliablityComponent } from './bmbmcashflow-hhliablity/bmbmcashflow-hhliablity.component';
import { BMbmcashflowHhloanComponent } from './bmbmcashflow-hhloanelgibitty/bmbmcashflow-hhloan.component';
import { BMloandetailsHhloanComponent } from './bmloandetails-hhloan/bmloandetails-hhloan.component';
import { BMloandetailsGuarantordetailsComponent } from './bmloandetails-guarantordetails/bmloandetails-guarantordetails.component';
import { BMloandetailsInsurancedetailsComponent } from './bmloandetails-insurancedetails/bmloandetails-insurancedetails.component';
import { BMloandetailsBankdetailsComponent } from './bmloandetails-bankdetails/bmloandetails-bankdetails.component';
import { Bmcgt1detailsComponent } from './bmcgt1details/bmcgt1details.component';
import { OCRAdharComponent } from './ocradhar/ocradhar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
  
    SidebarComponent,
    ContactusComponent,
    NewapplicationComponent,
    NewapplicationsearchComponent,
    NewapplicationformComponent,
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
    BMBmbasicdetailsComponent,
    BMearningmemberdetailsComponent,
    BMupdateerarningmemberComponent,
    BMhouseholddetailsComponent,
    BMupdatehoulddetailsComponent,
    BMbmcashflowdetailsComponent,
    BMbmcashflowHhexpensesComponent,
    BMbmcashflowHhliablityComponent,
    BMbmcashflowHhloanComponent,
    BMloandetailsHhloanComponent,
    BMloandetailsGuarantordetailsComponent,
    BMloandetailsInsurancedetailsComponent,
    BMloandetailsBankdetailsComponent,
    Bmcgt1detailsComponent,
    // OCRAdharComponent,

  ],
  imports: [
    LayoutRoutingModule,
    SharedModule,
    NgApexchartsModule,
    WebcamModule,
    ImageCropperModule,
    CommonModule,
    
  ]
})
export class LayoutModule { }

// feature.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KycComponent } from './kyc.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { KycRoutingModule } from './kyc-routing.module';
import { KycprofilereviewComponent } from './kycprofilereview/kycprofilereview.component';
import { IdverificationComponent } from './idverification/idverification.component';
import { ClientverificationComponent } from './clientverification/clientverification.component';


@NgModule({
  declarations: [KycComponent, KycprofilereviewComponent, IdverificationComponent, ClientverificationComponent],
  imports: [
    KycRoutingModule,
    CommonModule, SharedModule],
  exports: [KycComponent],  // Export components for use in other modules
})
export class KYCModule { }

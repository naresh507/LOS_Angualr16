import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KycComponent } from './kyc.component';
import { KycprofilereviewComponent } from './kycprofilereview/kycprofilereview.component';
import { IdverificationComponent } from './idverification/idverification.component';
import { ClientverificationComponent } from './clientverification/clientverification.component';

const routes: Routes = [
//  {path:'',redirectTo:'kyc/clientverification', pathMatch:'full'},


  { path: '', component: KycComponent,
    children: [
        { path: '', redirectTo: 'clientverification', pathMatch: 'full' },
    { path: 'clientverification', component: ClientverificationComponent },
     { path: 'idverification', component: IdverificationComponent },
     { path: 'kycprofilereview', component: KycprofilereviewComponent },
    
   ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KycRoutingModule {}

export const components = [
 
];
 
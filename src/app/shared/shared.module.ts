import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { shared, SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { AuthGuard } from './services/auth.guard';
import { MatNativeDateModule } from '@angular/material/core';
import { MobileVideoComponent } from './mobile-video/mobile-video.component';
import { MobilefaqComponent } from './mobilefaq/mobilefaq.component';
import { OtpComponent } from './otp/otp.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    shared,
    MobileVideoComponent,
    MobilefaqComponent,
    OtpComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedRoutingModule,
    MatNativeDateModule,
    ToastrModule.forRoot({
      timeOut: 3000,
     positionClass: 'toast-bottom-center',
     preventDuplicates: true,
      progressBar: true,
    })
  ],
  exports: [
    shared,
    FormsModule,
    ReactiveFormsModule,
     MaterialModule,
   ],
  providers: [AuthGuard],
})
export class SharedModule {}

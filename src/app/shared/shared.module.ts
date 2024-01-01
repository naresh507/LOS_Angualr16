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
import { AadharclientpictureComponent } from '../layout/aadharclientpicture/aadharclientpicture.component';
import { WebcamModule } from 'ngx-webcam';
import { AdharotpComponent } from '../layout/adharotp/adharotp.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { SamvoterComponent } from '../layout/samvoter/samvoter.component';
import { ImageCropperModule } from 'ngx-image-cropper';



@NgModule({
  declarations: [
    shared,
    MobileVideoComponent,
    MobilefaqComponent,
    OtpComponent,
    AadharclientpictureComponent,
    AdharotpComponent,
    SamvoterComponent,
   
   

  ],
  imports: [
    CommonModule, 
    MaterialModule,
    WebcamModule,
    NgOtpInputModule,
    SharedRoutingModule,
    MatNativeDateModule,
    ImageCropperModule,

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
     AadharclientpictureComponent,
     AdharotpComponent,
     SamvoterComponent
   ],
  providers: [AuthGuard],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileVideoComponent } from './mobile-video/mobile-video.component';
import { MobilefaqComponent } from './mobilefaq/mobilefaq.component';

const routes: Routes = [
  { path: 'mobilevideo', component: MobileVideoComponent },
  { path: 'mobilefaq', component: MobilefaqComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}

export const shared: any[] = [
 
];

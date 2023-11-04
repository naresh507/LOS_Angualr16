import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { PagesService } from 'src/app/shared/services/pages.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent  implements OnInit {
  videotypeList:boolean=false
  @ViewChild('enlargedialog') enlargedialog!: TemplateRef<any>; 
  enlargeDialogRef:any;
  userId:any;
  userRole:any;
  VideoData:any;
  youtubeLink:any;
  htmlobj:any;
  constructor( private sanitizer:DomSanitizer, private dialog:MatDialog, private service:PagesService, private authenticationService: AuthenticationService)
  {

  }
  ngOnInit(): void {
    //this.userObj  = this.authenticationService.getUserObj();  
    const userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.userId = parseInt(userObj.UserID);
    this.userRole=userObj.UserRole;
   this.getVideos();
  }
  
  enlarge(videoLink:any)
  {
 //   this.youtubeLink=videoLink;

    this.youtubeLink=  this.sanitizer.bypassSecurityTrustResourceUrl(videoLink)
    console.log(videoLink)
    let unsafeHtml = '<iframe width="100%" height="315" [src]="'+ videoLink +'"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"     allowfullscreen></iframe>';
this.htmlobj=unsafeHtml
console.log(this.htmlobj)
   let trustedHtml: SafeHtml;
  // this.htmlobj = this.sanitizer.bypassSecurityTrustHtml(unsafeHtml);
// this.htmlobj=`  <iframe width="100%" height="315" [src]="youtubeLink" 
// title="" frameborder="0"
// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// allowfullscreen></iframe>`

this.enlargeDialogRef= this.dialog.open(this.enlargedialog,{
  width:'600px'

})
  }


  videostyle(element:any)
  {
    if(element == 'list')
    {
      this.videotypeList=true;
    }
    else
    {
      this.videotypeList=false;
    }
  }
  close()
{
  this.enlargeDialogRef.close();
}




getVideos() {
  const obj=   {
    "UserID":this.userId ,
    "UserRole": this.userRole,

}


    this.service.video(obj).subscribe({
           next: (value: any) => {
          console.log(value) 
       
          // this.staffDashBoardDetails= value.DashBoardDetails[0];
          // console.log(this.staffDashBoardDetails)
             if (value.status == true) {
              this.VideoData=value.VideoData;
           
             } else {
           
             
             }
           },
           error: (err: HttpErrorResponse) => {
           }
         })
       
   }



}

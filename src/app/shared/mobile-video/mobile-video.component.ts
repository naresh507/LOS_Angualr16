import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mobile-video',
  templateUrl: './mobile-video.component.html',
  styleUrls: ['./mobile-video.component.scss']
})
export class MobileVideoComponent {
  videotypeList:boolean=false
  @ViewChild('enlargedialog') enlargedialog!: TemplateRef<any>; 
  enlargeDialogRef:any;

  constructor(private dialog:MatDialog)
  {

  }
  enlarge()
  {
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


}

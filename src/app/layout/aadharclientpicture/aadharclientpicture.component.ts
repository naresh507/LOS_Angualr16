// import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { WebcamImage, WebcamInitError, WebcamUtil, WebcamComponent } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-aadharclientpicture',
  templateUrl: './aadharclientpicture.component.html',
  styleUrls: ['./aadharclientpicture.component.scss']
})
export class AadharclientpictureComponent implements OnInit{
  LosUnique_Id: any = {};
  imageupload: boolean = false;
  imagebase64Data: any = '';
  url: any;
  msg = '';
  photo: string = '';
  videoWidth = 640;
  videoHeight = 480;
  mimeType:any=''
  userObj: any;
  detailsObj = {
    "UserId": ""
  }
  //  Camera Logic start
  stream: any = null;
  status: any = null;
  trigger: Subject<void> = new Subject();
  previewimage: string = '';
  btnLabel: string = 'capture Image'
  opencam: boolean = false;


  imagecaputureData= {
    CapturePhotoLOSRequestsData:
      [{
        "CapturePhoto": "",
        "CapturePhotoName": "",
        "UserID": ""
      }
      ]
  }


  @ViewChild('statusPopup', { static: true })
  statusPopup!: TemplateRef<any>;

  // @Output() imageuploadData: EventEmitter<any> = new EventEmitter();

  // // @ViewChild(WebcamComponent)


  get $trigger(): Observable<void> {
    return this.trigger.asObservable();
  }
  constructor(public dialog: MatDialog, private auth: CrudService, private router: Router) { }

  snap(event: WebcamImage) {
    console.log(event);
    this.previewimage = event.imageAsDataUrl;

    console.log(this.previewimage);
    this.btnLabel = 're Capture image'

  }
  camera() {
    this.opencam = false;
    navigator.mediaDevices.getUserMedia({
      video: {
        width: 500,
        height: 500
      }
    }).then((res) => {
      console.log("response", res);
      this.stream = res;
      this.status = 'my camera is avaialable'
      this.btnLabel = 'capture Image'
    }).catch(error => {
      console.log(error);
      this.status = error;
      if (error?.message === 'Requested device not found approve the Access') {
        this.status = 'not Found Camera';
      } else {
        this.status = "you may not having camera system please proceed with upload"
      }
      this.openErrorDialog();
    })
  }

  openErrorDialog(): void {
    this.dialog.open(this.statusPopup, {
      width: '500px',
    });
  }


  closecameraerror(): void {
    this.dialog.closeAll();
    //this.router.navigateByUrl('/aadharotp')
  }


  captueimage() {
    this.trigger.next();
  }
  //  Camera Logic end


// Upload Image //
  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }
    const file: File = event.target.files[0];

    this.mimeType = file.name; // Get the filename
    var mimeType = file.type; 

    // var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported";
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url = reader.result;
      let sendingData = reader.result?.toString().split(',')[1];
      this.imagebase64Data = sendingData;
      this.imageupload = true;
      
    }
  }

  handleFileInput(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      console.log('File size:', file.size);
      console.log('File type:', file.type);
      console.log('Last modified:', file.lastModified);
    };
    reader.readAsArrayBuffer(file);
  }
  ngOnInit() {
    this.LosUnique_Id = JSON.parse(localStorage.getItem('aadharObj') || '{}');
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
   // this.userObj = localStorage.getItem('userId');
    this.detailsObj['UserId'] = this.userObj;
    console.log('UserID from local storage:', this.userObj);
    console.log('ss')
  }

  userdetailsData() {
    this.userObj = localStorage.getItem('userId');
    this.detailsObj['UserId'] = this.userObj;
    }

// Upload Function //
  Upload() {
    const imageData: any = []
    imageData.push({
      LosUnique_Id: this.LosUnique_Id,
        CapturePhoto: this.imagebase64Data,
        UserID: this.userObj.UserID,
        CapturePhotoName: this.mimeType
      });
    this.imagecaputureData.CapturePhotoLOSRequestsData = [imageData[0]]
    console.log(this.imagecaputureData)
    this.auth.CapturePhotoLOS(this.imagecaputureData).subscribe(Response  => {
    this.status =Response.message;
    this.openErrorDialog();
    
   // this.router.navigateByUrl('/aadharotp')
      console.log(Response);
    });
  }
  
  // Camera Submit Function
  submit() {
    console.log(this.previewimage);
    const imagecaputureData: any = []
    imagecaputureData.push({
        LosUnique_Id: this.LosUnique_Id,
        CapturePhoto: this.previewimage,
        UserID: this.userObj.UserID,
        CapturePhotoName: this.mimeType
      });
      this.auth.CapturePhotoLOS(this.imagecaputureData).subscribe(Response  => {
        this.status =Response.message;
        this.openErrorDialog();
        });
  }
goto()
{
  this.router.navigateByUrl('/kyc/idverification')
}
}


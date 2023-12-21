import { HttpErrorResponse } from '@angular/common/http';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, Observable } from 'rxjs';
import { CrudService } from 'src/app/shared/services/crud.service';
import { WebcamImage, WebcamInitError, WebcamUtil, WebcamComponent } from 'ngx-webcam';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.component.html',
  styleUrls: ['./bankdetails.component.scss']
})
export class BankdetailsComponent {
  @ViewChild('otpdialog') otpdialog!: TemplateRef<any>;
  url: any;
  msg = '';
  mimeType:any='';
  imagebase64Data: any = '';
  
  imageupload: boolean = false;

  stream: any = null;
  status: any = null;
  trigger: Subject<void> = new Subject();
  previewimage: string = '';
  btnLabel: string = 'capture Image'
  opencam: boolean = false;

  searchbankDetails: any;
  form!: FormGroup;
  isform!:FormGroup;
  userObj: any;
  LosUnique_Id: any = {};
  //tpDialogRef:any;
  obj: any = {};
  otpDialogRef: any;
  otpverify: boolean = false
  bankstatus: boolean = false;
  @ViewChild('statusPopup', { static: true })
  statusPopup!: TemplateRef<any>;


  get $trigger(): Observable<void> {
    return this.trigger.asObservable();
  }

  constructor(private dialog: MatDialog, private route: Router,
    private fb: FormBuilder,
    private _crudService: CrudService) {
      this.form = this.fb.group({
        IFSCCode: ['', Validators.required],
      });

      this.isform = this.fb.group({
        AccountHolderType: [''],
        AccountHolderName: [''],
        AccountType: [''],
        AccountNo: [''],
        ConfimAccountNo: [''],
        DigitalPayment: [''],
        UPIID: [''],
        CapturePhoto: [''],
        CapturePhotoName:[''],
      });
  }

  snap(event: WebcamImage) {
    // console.log(event);
    this.url = event.imageAsDataUrl;
    this.previewimage = event.imageAsDataUrl.toString().split(',')[1];

    // console.log(this.previewimage);
    this.btnLabel = 're Capture image'

  }
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

  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.LosUnique_Id = JSON.parse(localStorage.getItem('aadharObj') || '{}');
  }

  camera() {
    this.opencam = false;
    navigator.mediaDevices.getUserMedia({
      video: {
        width: 500,
        height: 500
      }
    }).then((res) => {
      // console.log("response", res);
      this.stream = res;
      this.status = 'my camera is avaialable'
      this.btnLabel = 'capture Image'
    }).catch(error => {
      // console.log(error);
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

  stopCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach((track: MediaStreamTrack) => {
        if (track.readyState === 'live' && track.kind === 'video') {
          track.stop(); // Stop the camera track
        }
      });
      this.stream = null; // Reset the stream reference
    }
  }
  captueimage() {
    this.trigger.next();
    // this.closecameraerror();
    this.stopCamera();
  }
  otppopupshow() {
    this.otpDialogRef = this.dialog.open(this.otpdialog, {
      width: '400px'

    })
  }



  close() {
    this.otpDialogRef.close();
  }




  submitclose() {
    this.otpverify = true;
    this.close();
  }





  bankcheck() {
    Swal.fire({
      width: '300px',
      imageUrl: '../../assets/images/tick.png',
      imageHeight: 80,
      text: 'Bank Check Successfully',
      showCancelButton: false,
      cancelButtonText: 'No',
      confirmButtonText: 'Yes',
      customClass: {
        confirmButton: "filledBtn",
        cancelButton: 'strokedBtn'
      }

    }).then((result) => {
      if (result.isConfirmed) {
        this.bankstatus = true;
      }
      else {
        // console.log('close')
      }
    })
  }


  validateForm(formData: any) {

    // console.log(formData.value)
    let obj = {
      "UserID": this.userObj.UserID,
      "IFSCCode": formData.value.IFSCCode,
      "LosUnique_Id":this.LosUnique_Id
    }
    // console.log(this.obj)
    this._crudService.BankIFSCCodeSubmit(obj).subscribe({
      next: (value: any) => {
        // console.log(value)
        this.searchbankDetails = value.BankIFSCCodeDetils[0];
        if (value.status == true || value.status == 'True') {
          // this.route.navigateByUrl('/gstdetails')
        }
      },

      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    });
  }


  Save(formData: any){
    console.log(formData.value)
    const capturePhoto = this.imagebase64Data; 
    const cameraimage = this.previewimage; 
    // const capturePhoto1 = formData.value.CapturePhoto1 || formData.value.cameraimage || '';

    console.log(capturePhoto);

    // const cameraimage = this.previewimage; 
    formData.value['CapturePhoto'] = capturePhoto;
    formData.value['CapturePhoto'] = cameraimage;
    formData.value['UserID'] = this.userObj.UserID;
    formData.value['LosUnique_Id'] = this.LosUnique_Id;
  
    let obj={
      "AccountData":[{

          AccountHolderType: formData.value.AccountHolderType,
          AccountHolderName: formData.value.AccountHolderName,
          AccountType: formData.value.AccountType,
          AccountNo: formData.value.AccountNo,
          ConfimAccountNo: formData.value.ConfimAccountNo,
          DigitalPayment: formData.value.DigitalPayment,
          UPIID: formData.value.UPIID,
          CapturePhoto: formData.value.capturePhoto || formData.value.cameraimage || '',
          UserID: this.userObj.UserID,
          CapturePhotoName:''
      }]
     }
  
  obj.AccountData=[formData.value]
  // console.log(obj.AccountData)
  
  this._crudService.BankAccountDetails(obj).subscribe({
    next: (value: any) => {
  //  console.log(value)
   if(value.status==true || value.status=='True')
   { 
    this.route.navigateByUrl('/gstdetails')
   }
    },
    
        error: (err: HttpErrorResponse) => {
          // console.log(err)
        }
   })
  }
  gotopage() {
    this.route.navigateByUrl('/gstdetails')
  }
}


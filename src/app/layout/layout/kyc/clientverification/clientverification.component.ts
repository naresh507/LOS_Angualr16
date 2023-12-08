import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientverification',
  templateUrl: './clientverification.component.html',
  styleUrls: ['./clientverification.component.scss']
})
export class ClientverificationComponent implements OnInit{
  @ViewChild('enlargedialog') enlargedialog!: TemplateRef<any>;
  // currentImage: string = '';
  enlargeDialogRef: any;
  LosUnique_Id: any = {};
  ExsitingData:any;
  MemberPhoto:string='';
  voterid_Frontpath:string='';
  voterid_Backpath:string='';
  type: string = '';
  imageresponse:any = '';
  userObj:any;
  AAdharOTP:boolean=true;
  VoterId: boolean = false;
  ClientPicture: boolean = true
  IDVerification: boolean = false;
  OKYCProfileReview: boolean = false;
  @ViewChild('reasondialog') reasondialog!: TemplateRef<any>;
  dialogRef: any;
  constructor(private dialog:MatDialog, private router:Router, private _crudService:CrudService)
  {

  }

  clickDetailstab(element: any) {
    if (element == 'a') {
      this.AAdharOTP = true;
      this.VoterId = false;

    }
    if (element == 'b') {
      this.AAdharOTP = false;
      this.VoterId = true;

    }
   
  }

  clickDetails(element: any) {
    if (element == 'a') {
      this.ClientPicture = true;
      this.IDVerification = false;
      this.OKYCProfileReview = false;
    }
    if (element == 'b') {
      this.ClientPicture = false;
      this.IDVerification = true;
      this.OKYCProfileReview = false;
    }
    if (element == 'c') {
      this.ClientPicture = false;
      this.IDVerification = false;
      this.OKYCProfileReview = true;
    }
  }

  handleExpansionPanelClick(type: string) {
    this.type = type;
    this.getMasterData(type);
  }

  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.LosUnique_Id = JSON.parse(localStorage.getItem('aadharObj') || '{}');
    this.getimageBasicdetails() 
    // this.getMasterData(type);
  }

  getMasterData(type: string) {
    let obj = {
      "UserId": this.userObj.UserID,
      "Type": type,
      "LosUnique_Id": this.LosUnique_Id,

    }
    this._crudService.ExistingData(obj).subscribe({
      next: (value: any) => {
        console.log(value)
        this.ExsitingData = value.ExsitingDataDetails[0];
      
        if (value.status === false) {
          console.error(value.message);
          // Handle the error or show a message to the user
        } else {
          this.ExsitingData = value.ExsitingDataDetails ? value.ExsitingDataDetails[0] : null;
          console.log(this.ExsitingData);
          // Continue with processing the data
        }
      },

      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })
  }

  getimageBasicdetails() {
    let obj = {
      "UserId": this.userObj.UserID,
      "LosUnique_Id": this.LosUnique_Id,
    };
  
    this._crudService.getimageBasicdetails(obj).subscribe(
      (responseimageData) => {
        let imageresponse = responseimageData.OKYCVoterPhotoVIEWDataInfo[0];
        console.log(imageresponse);
       
        this.imageresponse = {
          voterid_Frontpath: imageresponse.voterid_Frontpath || '', 
          voterid_Backpath: imageresponse.voterid_Backpath || '',
          MemberPhoto: imageresponse.MemberPhoto || '',
          PresentAddress : imageresponse.PresentAddress || '',
          ApplicantName  : imageresponse.ApplicantName || '',
          LosUnique_Id: imageresponse.LosUnique_Id || '',
      
        }
        console.log(imageresponse);
      });
  }

  enlarge() {
    // this.currentImage = image;
    this.enlargeDialogRef = this.dialog.open(this.enlargedialog, {
      width: '600px'
    })
    // this.MemberPhoto = this.imageresponse.MemberPhoto;
    // this.voterid_Frontpath = this.imageresponse.voterid_Frontpath;
    // this.voterid_Backpath = this.imageresponse.voterid_Backpath;
  }
  close() {
    this.enlargeDialogRef.close();
  }

reason()
{
  this.dialogRef = this.dialog.open(this.reasondialog, {
  
  });

  this.dialogRef.afterClosed().subscribe((result: any) => {
    console.log('The dialog was closed');
    
  });
}
proceed()
{
  this.router.navigateByUrl('/details')
}

kycProceed()
{
  
    Swal.fire({
      width:'350px',
    imageUrl: '../../assets/images/warining.svg',
    imageHeight: 80,
    text: 'KYC ID 4567890 already exist for Borrower ID 341',  
  showCancelButton:true,
  cancelButtonText:'Okay',
    confirmButtonText:'Raise Request',
    customClass: {
      confirmButton: "filledBtn",
      cancelButton:'strokedBtn'
    }

  }).then((result) => {
    if(result.isConfirmed)
    {
      this.reason()
    //  this.route.navigateByUrl('/newapplicationform')
  //    this.unlinkconfirm()
    }
    else
    {
      console.log('close')
    }
  })
  
  
  
}
onNoClick()
{
  this.dialogRef.close();
}
}

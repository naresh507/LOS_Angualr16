import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.scss']
})
export class KycComponent implements OnInit{
  // VoterOCRData:any;
  ExsitingData:any;
  // VoterEditedData:any;
  // VoterVerifiedData:any;
  // AadharOCRData:any;
  // AadharEditedData:any;
  userObj:any;
  @ViewChild('reasondialog') reasondialog!: TemplateRef<any>;
  dialogRef: any;
  constructor(private dialog:MatDialog, private router:Router, private _crudService:CrudService)
  {

  }

  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.getMasterData();
  }

  getMasterData() {
    let obj = {
      "UserId": this.userObj.UserID,
      "Type": ["ExD", "VOCRD", "VED", "AOCRD", "AED"]

    }
    this._crudService.ExistingData(obj).subscribe({
      next: (value: any) => {
        console.log(value)
        this.ExsitingData= value.ExsitingDataDetails[0];
       
        console.log(this.ExsitingData)
        if (value.status == true) {
        }
      },

      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })
  }

  enlarge()
  {

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

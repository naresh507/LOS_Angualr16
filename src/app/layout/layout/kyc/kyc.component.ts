import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.scss']
})
export class KycComponent {
  @ViewChild('reasondialog') reasondialog!: TemplateRef<any>;
  dialogRef: any;
  constructor(private dialog:MatDialog, private router:Router)
  {

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

import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.component.html',
  styleUrls: ['./bankdetails.component.scss']
})
export class BankdetailsComponent {
  @ViewChild('otpdialog') otpdialog!: TemplateRef<any>;

  otpDialogRef:any;
otpverify:boolean=false
bankstatus:boolean=false;

  constructor(private dialog:MatDialog, private router:Router)
  {

  }
  otppopupshow()
  {
this.otpDialogRef= this.dialog.open(this.otpdialog,{
  width:'400px'

})
  }
  close()
{
  this.otpDialogRef.close();
}

submitclose()
{
  this.otpverify=true;
  this.close();
}

  bankcheck()
  {
    
      Swal.fire({
        width:'300px',
      imageUrl: '../../assets/images/tick.png',
      imageHeight: 80,
      text: 'Bank Check Successfully',  
     showCancelButton:false,
     cancelButtonText:'No',
      confirmButtonText:'Yes',
      customClass: {
        confirmButton: "filledBtn",
        cancelButton:'strokedBtn'
      }
  
    }).then((result) => {
      if(result.isConfirmed)
      {
   this.bankstatus=true;
      }
      else
      {
        console.log('close')
      }
    })
    
    
    
  }
  
gotopage()
{
  this.router.navigateByUrl('/gstdetails')
}
}


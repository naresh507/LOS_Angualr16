import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guarantordetails',
  templateUrl: './guarantordetails.component.html',
  styleUrls: ['./guarantordetails.component.scss']
})
export class GuarantordetailsComponent {
  @ViewChild('otpdialog') otpdialog!: TemplateRef<any>;

  otpDialogRef:any;
otpverify:boolean=false


  constructor(private dialog:MatDialog)
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

  otppopup()
  {
    
      Swal.fire({
        width:'300px',
      imageUrl: '../../assets/images/tick.png',
      imageHeight: 80,
      text: 'OTP Sent Successfully',  
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
      this.otppopupshow()
      //  this.route.navigateByUrl('/newapplicationform')
    //    this.unlinkconfirm()
      }
      else
      {
        console.log('close')
      }
    })
    
    
    
  }
  

}


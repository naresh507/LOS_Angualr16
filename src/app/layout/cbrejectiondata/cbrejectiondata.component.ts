import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cbrejectiondata',
  templateUrl: './cbrejectiondata.component.html',
  styleUrls: ['./cbrejectiondata.component.scss']
})
export class CbrejectiondataComponent {
  @ViewChild('reasondialog') reasondialog!: TemplateRef<any>;
  dialogRef: any;

  @ViewChild('cbreortdialog') cbreortdialog!: TemplateRef<any>;
  cbreortdialogdialogRef: any;

  

  constructor(private route:Router, private dialog:MatDialog)
  {

  }

  gotofeeDetails()
  {
    this.route.navigateByUrl('/feedetails')
  }
  successPopup(){
    Swal.fire({
      width:'350px',
    imageUrl: '../../assets/images/tick.png',
    imageHeight: 80,
    text: 'Rajesh Kumar Rejected Successfully!',  
   
    confirmButtonText:'Okay'
  });
  }

  newformUrl()
  {
    this.route.navigateByUrl('/feedetails')

  }


  reject(){
    Swal.fire({
      width:'350px',
    imageUrl: '../../assets/images/warining.svg',
    imageHeight: 80,
    text: 'Are you sure to reject Rajesh Kumar?',  
   showCancelButton:true,
   cancelButtonText:'Cancel',
    confirmButtonText:'Yes! Reject'
  }).then((result) => {
    if(result.isConfirmed)
    {
    this.successPopup()
    }
    else
    {
      console.log('close')
    }
  })
  
  
  }

  
  unlinkconfirm(){
    Swal.fire({
      width:'350px',
    imageUrl: '../../assets/images/unlink.png',
    imageHeight: 80,
    text: 'Rajesh has been removed from the household successfully',  
   
   
    confirmButtonText:'Okay'
  })
  }

  
reason()
{
  this.dialogRef = this.dialog.open(this.reasondialog, {
   
  });

  this.dialogRef.afterClosed().subscribe((result: any) => {
    console.log('The dialog was closed');
    
  });
}
onNoClick()
{
  this.dialogRef.close();
}


cbReport()
{
  this.cbreortdialogdialogRef = this.dialog.open(this.cbreortdialog, {
   
  });

  this.cbreortdialogdialogRef.afterClosed().subscribe((result: any) => {
    console.log('The dialog was closed');
    
  });
}
onNoClick1()
{
  this.cbreortdialogdialogRef.close();
}


} 




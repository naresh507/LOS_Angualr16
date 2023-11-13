import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-laf-client-details',
  templateUrl: './laf-client-details.component.html',
  styleUrls: ['./laf-client-details.component.scss']
})
export class LafClientDetailsComponent{
  
  @ViewChild('cbreortdialog') cbreortdialog!: TemplateRef<any>;
  cbreortdialogdialogRef: any;

  constructor(private route:Router, private dialog:MatDialog)
  {

  }

  warningPopup(){
    Swal.fire({
      width:'350px',
    imageUrl: '../../assets/images/warining.svg',
    imageHeight: 80,
    text: 'Enrolment Restricted! Contact Administrator.',  
   
    confirmButtonText:'Okay'
  });
  }

  newformUrl()
  {
    this.route.navigateByUrl('/newapplicationform')

  }

  gotosearch()
  {
    this.route.navigateByUrl('/lafcheck')

  }
  unlink(){
    Swal.fire({
      width:'350px',
    imageUrl: '../../assets/images/link.png',
    imageHeight: 80,
    text: 'Are you sure to Unlink Rajesh from the Household?.',  
   showCancelButton:true,
   cancelButtonText:'Cancel',
    confirmButtonText:'Yes! Proceed'
  }).then((result) => {
    if(result.isConfirmed)
    {
      this.unlinkconfirm()
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


  successPopup(){
    Swal.fire({
      width:'350px',
    imageUrl: '../../assets/images/tick.png',
    imageHeight: 80,
    text: 'Rajesh Kumar Rejected Successfully!',  
   
    confirmButtonText:'Okay'
  });
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

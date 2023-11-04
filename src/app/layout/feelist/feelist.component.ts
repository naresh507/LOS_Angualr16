import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feelist',
  templateUrl: './feelist.component.html',
  styleUrls: ['./feelist.component.scss']
})
export class FeelistComponent {
  constructor(private route:Router)
  {

  }

  gotofeeDetails()
  {
    this.route.navigateByUrl('/feedetails')
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
    this.route.navigateByUrl('/feedetails')

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

} 

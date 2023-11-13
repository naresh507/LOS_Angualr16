
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import Swal from 'sweetalert2';

@Component({ 
  selector: 'app-apperiasal-search',
  templateUrl: './apperiasal-search.component.html',
  styleUrls: ['./apperiasal-search.component.scss']
})
export class ApperiasalSearchComponent implements OnInit {
  constructor(
    private route: Router,
   
    
  ) { }

  ngOnInit(): void {
    
   
   
     
  }

searchNew()
{
  this.route.navigateByUrl('/apperiaseldetails')
}
  
  search(){

this.route.navigateByUrl('/apperiaseldetails');

  //   Swal.fire({
  //     width:'350px',
  //   imageUrl: '../../assets/images/no-data.svg',
  //   imageHeight: 80,
  //   text: 'No Records Found Enroll As New Client?',  
  //  showCancelButton:true,
  //  cancelButtonText:'Cancel',
  //   confirmButtonText:'Yes! Proceed'
  // }).then((result) => {
  //   if(result.isConfirmed)
  //   {
  //     this.route.navigateByUrl('/newapplicationform')
  
  //   }
  //   else
  //   {
  //     console.log('close')
  //   }
  // })
  
  
  }
  // search()
  // {




  //   this.route.navigateByUrl('/newapplication')

  // }
  

}

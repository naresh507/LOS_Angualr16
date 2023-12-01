import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newapplicationform',
  templateUrl: './newapplicationform.component.html',
  styleUrls: ['./newapplicationform.component.scss']
})
export class NewapplicationformComponent implements OnInit {
  form!: FormGroup;
  userObj: any;
  MasterPinCodeDetails: any=[];
  mastervillageDetails: any=[];
  
  constructor(
    private route: Router,
    private fb: FormBuilder,
   private _crudService:CrudService
    
  ) {

    this.form = this.fb.group({
      village: ['' , Validators.required],
      pincode: ['', Validators.required]
     
    });


   }

  ngOnInit(): void {
    
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');

    console.log(this.userObj)
   
     
  }




 
 
 searchcode(){

  if(this.form.get('pincode')?.value =='')
  {
    
  } 
  else
  {
  let obj={
     "UserID": this.userObj.UserID,
    "pincode":  this.form.get('pincode')?.value
   // "UserID": "12",
   // "pincode": "761110"

    
  }
 this._crudService.masterPinCode(obj).subscribe({
   next: (value: any) => {
 console.log(value)
 this.MasterPinCodeDetails=value.MasterPinCodeDetails;
   },
   
       error: (err: HttpErrorResponse) => {
         console.log(err)
       }
 })

}
  }
 
 
/* All Data */


 
vilageData(event:any){
  console.log(event)
  const selectedValue = event.value;
  console.log('Selected Value:', selectedValue);
  let obj={
    // "UserID": this.userObj.UserID,
    // "pincode":  this.form.get('pincode')?.value
    "UserID":"12",
    "pincode":"761110",
    "village":selectedValue
  }
 this._crudService.masterVillageCode(obj).subscribe({
   next: (value: any) => {
 console.log(value)
 this.mastervillageDetails=value.MastervillageDetails;
 
   },
   
       error: (err: HttpErrorResponse) => {
         console.log(err)
       }
 })
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

  
  noDataPopup(){
    Swal.fire({
      width:'350px',
    imageUrl: '../../assets/images/no-data.png',
    imageHeight: 80,
    text: 'No Data Available',  
   
    confirmButtonText:'Okay'
  });
  }

  
  noClientPopup(){
    Swal.fire({
      width:'350px',
    imageUrl: '../../assets/images/noclient.png',
    imageHeight: 80,
    text: 'Client is not eligible!',  
   
    confirmButtonText:'Okay'
  });
  }


  newformUrl()
  {
    this.route.navigateByUrl('/addnewClient')

  }
} 








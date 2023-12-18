import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import Swal from 'sweetalert2';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({ 
  selector: 'app-newapplicationsearch',
  templateUrl: './newapplicationsearch.component.html',
  styleUrls: ['./newapplicationsearch.component.scss']
})
export class NewapplicationsearchComponent implements OnInit {
  searchClientDetails: any;
  form!: FormGroup;
  userObj: any;
  Borrower_SearchInfo: any;
  
  constructor(
    private route: Router,
    private fb: FormBuilder,
   private _crudService:CrudService
    
  ) {

    this.form = this.fb.group({
      type: ['', Validators.required],
      details: ['', Validators.required]
     
    });


   }

  ngOnInit(): void {
    
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.getMasterData();
     
  }
  getMasterData() {
    let obj = {

      "UserId": this.userObj.UserID,

    }
    this._crudService.getMasterDetails(obj).subscribe({
      next: (value: any) => {
        console.log(value)
        if (value.status == true) {
          this.Borrower_SearchInfo = value?.Borrower_SearchInfo;

        }
      },

      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })
  }

 // When Cliked on Submit
 submit(formData: any) {
 console.log(formData.value)
 let obj={
  "UserID": "",
  "type": "",
  "Id": ""
}
console.log(this.userObj.UserID)
obj.UserID=this.userObj.UserID;
obj.type=formData.value.type
obj.Id=formData.value.details
this.search(obj)
}


  search(obj:any){


this._crudService.searchClient(obj).subscribe({
  next: (value: any) => {
console.log(value)
this.searchClientDetails=value.SerachClientDetails;

if(this.searchClientDetails.length ==0)
{
  this.alertMessage()
}
  },
  
      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
})
 }



alertMessage()
{
  Swal.fire({
    width:'350px',
  imageUrl: '../../assets/images/no-data.svg',
  imageHeight: 80,
  text: 'No Records Found Enroll As New Client?',  
 showCancelButton:true,
 cancelButtonText:'Cancel',
  confirmButtonText:'Yes! Proceed'
}).then((result) => {
  if(result.isConfirmed)
  {
    this.route.navigateByUrl('/newapplicationform')

  }
  else
  {
    console.log('close')
  }
})
}




  // search()
  // {




  //   this.route.navigateByUrl('/newapplication')

  // }
  

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import Swal from 'sweetalert2';
import { CrudService } from 'src/app/shared/services/crud.service';
import { MatDialog } from '@angular/material/dialog';
import { OtpComponent } from 'src/app/shared/otp/otp.component';

@Component({
  selector: 'app-addnew-application',
  templateUrl: './addnew-application.component.html',
  styleUrls: ['./addnew-application.component.scss']
})
export class AddnewApplicationComponent implements OnInit {

  otp:boolean=false;
  otpattempts:number=1;
  otpattempts1:number=1;
  otp1:boolean=false;
updatescreen:boolean=true;
updatescreen1:boolean=false;
updatescreen2:boolean=false;
mobilescreen1:boolean=true;
signTitle:string='Add New';
  userObj: any;
  form!: FormGroup;
  timer:any=15;
  intervalId: any;
  otpDialogRef: any;
  constructor(
    private route: Router,
    private _crudService:CrudService,
    private fb: FormBuilder,
    private dialog:MatDialog
   
    
  ) { 
    this.form = this.fb.group({
      tag: ['' ],
      name: [''],
      relationship:[''],  
      mobile:[''],
      mobileotp:['']  
    });

  }

  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
  }
  sendOtp()
  {
    
    this.sendOTPService()
  }





  sendOTPService(){
    this.timer=5;
    this.otpattempts -1; 
console.log(this.form.get('mobile')?.value)
    let obj={
       "Phoneno": this.form.get('mobile')?.value,
      "UserId": this.userObj.UserID,
      "OTPNO": "",
       //  "UserId": "16985"  
    }
    this._crudService.OTPVerification(obj).subscribe({
     next: (value: any) => {
    console.log(value)
    if(value.status==true)
    { 
      this.otp= true;
      
      this.intervalId = setInterval(() => {
        this.timer=this.timer -1;
        if(this.timer ==0)
        {
          clearInterval(this.intervalId);
        }
      }, 1000);

      
    }
     },
     
         error: (err: HttpErrorResponse) => {
           console.log(err)
         }
    })
    
    }






  search()
  {


    let obj={
       "Phoneno": this.form.get('mobile')?.value,
      "UserId": this.userObj.UserID,
      "OTPNO": this.form.get('mobileotp')?.value,
     }
    this._crudService.OTPVerification(obj).subscribe({
     next: (value: any) => {
    console.log(value)
    if(value.status==true)
    {
     
      this.saveNext()

      
    }
     },
     
         error: (err: HttpErrorResponse) => {
           console.log(err)
         }
    })


  }









































  update()
  {
    this.mobilescreen1=false;
this.updatescreen2=true;
  

}

  search1(){
    Swal.fire({
      width:'350px',
    imageUrl: '../../assets/images/no-data.svg',
    imageHeight: 80,
    text: 'Client Enrollmet',  
   showCancelButton:true,
   cancelButtonText:'Field',
    confirmButtonText:'Branch',
    customClass: {
      confirmButton: "filledBtn",
      cancelButton:'strokedBtn'
    }

  }).then((result) => {
    if(result.isConfirmed)
    {
      this.route.navigateByUrl('/kyc')
  //    this.unlinkconfirm()
    }
    else
    {
      console.log('close')
    }
  })
  
  
  }
 

  
sucesscenter()
{
  
    Swal.fire({
      width:'350px',
    imageUrl: '../../assets/images/tick.png',
    imageHeight: 80,
    text: 'Mobile Number Updated Successfully',  
   showCancelButton:false,
   
    confirmButtonText:'Okay',
    customClass: {
      confirmButton: "strokedBtn",
     
    }

  }).then((result) => {
    if(result.isConfirmed)
    {
      this.updatescreen1=true;
  this.updatescreen2=false;
  this.route.navigateByUrl('/clientpicture')
    }
    else
    {
      console.log('close')
    }
  })
  
}

cancel(){

  this.updatescreen1=true;
  this.updatescreen2=false;
}




  
saveNext()
{
  
    Swal.fire({
      width:'350px',
    imageUrl: '../../assets/images/tick.png',
    imageHeight: 80,
    text: 'Mobile Number Added Successfully',  
   showCancelButton:false,
   
    confirmButtonText:'Okay',
    customClass: {
      confirmButton: "strokedBtn",
     
    }

  }).then((result) => {
    if(result.isConfirmed)
    {
      this.signTitle='Verify Mobile Number';
      this.updatescreen=false;
      this.updatescreen1=true
      this.updatescreen2=false;
    
    }
    else
    {
      console.log('close')
    }
  })
  
}







/* krishna */


otpclick()
{
  this.otpDialogRef= this.dialog.open(OtpComponent,{
    width:'330px'
  
  })
}




}





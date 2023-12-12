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
  message:string='';
  FamilyTypeDetails: any;
  otp: boolean = false;
  otpattempts: number = 1;
  otpattempts1: number = 1;
  otp1: boolean = false;
  type :string='';
  updatescreen: boolean = true;
  updatescreen1: boolean = false;
  updatescreen2: boolean = false;
  mobilescreen1: boolean = true;
  signTitle: string = 'Add New';
  userObj: any;
  form!: FormGroup;
  formupdate!: FormGroup;
  timer: any = 15;
  intervalId: any;
  otpDialogRef: any;
  mobileNo:any;
  constructor(
    private route: Router,
    private _crudService: CrudService,
    private fb: FormBuilder,
    private dialog: MatDialog


  ) {
    this.form = this.fb.group({
      tag: [''],
      name: [''],
      relationship: [''],
      mobile: [''],
      mobileotp: ['']
    });

    this.formupdate = this.fb.group({
      ExistingMobileNumber: [''],
      NewMobileNumber: [''],
      ConfirmNewMobileNumber: [''],
      UserId: [''],
      OTPNO: ['']
    });
  }

  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');

    this.getMasterData();
  }
  sendOtp() {

    this.sendOTPService()
  }
  sendOTPService() {
    this.timer = 5;
    this.otpattempts - 1;
    console.log(this.form.get('mobile')?.value)
    let obj = {
      "Phoneno": this.form.get('mobile')?.value,
      "UserId": this.userObj.UserID,
      "OTPNO": "",
    }
    this._crudService.OTPVerification(obj).subscribe({
      next: (value: any) => {
        console.log(value)
        if (value.status == true) {
          this.otp = true;

          this.intervalId = setInterval(() => {
            this.timer = this.timer - 1;
            if (this.timer == 0) {
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


  updatesendOTPService(formupdate: any,type:any) {
    this.timer = 5;
    this.otpattempts - 1;
    const existingMobileNumber = this.formupdate.get('ExistingMobileNumber')?.value;
    console.log(existingMobileNumber);
    console.log(this.formupdate.get('ExistingMobileNumber')?.value)
    let obj1 = {
      "ExistingMobileNumber": this.formupdate.get('ExistingMobileNumber')?.value,
      "NewMobileNumber": this.formupdate.get('NewMobileNumber')?.value,
      "ConfirmNewMobileNumber": this.formupdate.get('ConfirmNewMobileNumber')?.value,
      "Phoneno":this.formupdate.get('NewMobileNumber')?.value,
      "UserId": this.userObj.UserID,
      "OTPNO": "",
      "Flag": this.type
    }
    console.log(obj1);
    // this._crudService.VerifyMobileNumber(obj1).subscribe({
    this._crudService.VerifyMobileNumber(obj1).subscribe({

      next: (value: any) => {
        console.log(value)
        if (value.status == true) {
          this.otp1 = true;

          this.intervalId = setInterval(() => {
            this.timer = this.timer - 1;
            if (this.timer == 0) {
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

  getMasterData() {
    let obj = {

      "UserId": this.userObj.UserID,

    }
    this._crudService.getMasterDetails(obj).subscribe({
      next: (value: any) => {
        console.log(value)
        if (value.status == true) {

          this.FamilyTypeDetails = value.FamilyTypeDetails;

        }
      },

      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })
  }




  search() {
    let obj = {
      "Phoneno": this.form.get('mobile')?.value,
      "UserId": this.userObj.UserID,
      "OTPNO": this.form.get('mobileotp')?.value,
    }
    this._crudService.OTPVerification(obj).subscribe({
      next: (value: any) => {
        console.log(value)
        if (value.status == true) {
          this.saveNext()
        }
      },

      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })


  }
  update() {
    this.mobilescreen1 = false;
    this.updatescreen2 = true;
  }

  search1() {

    let obj2 = {
      VerifyMobileNumberData: [
        {
      "Type":this.form.get('tag')?.value,
      "Name": this.form.get('name')?.value,
      "ApplicantName": this.form.get('relationship')?.value,
      "MobileNumber": this.form.get('mobile')?.value,
      "UserID":  this.userObj.UserID,
        }
      ]
    }
    this._crudService.VerifyMobileNumberSubmit(obj2).subscribe({
      next: (value: any) => {
        console.log(value)
      this.message = value.message;
        if (value.status == true) {
       
        }
        // else (value.status == false) {
        //   this.existingclienAlert();
        // }

        this.ClientEnrollmet(value);

        const Unique_Id = value.Unique_Id;
        this._crudService.setAAdharObj(Unique_Id)
        console.log(Unique_Id);
      },

      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })
  }

    ClientEnrollmet(value: any){
    Swal.fire({
      width: '350px',
      imageUrl: '../../assets/images/no-data.svg',
      imageHeight: 80,
      text: this.message,
      // showCancelButton: true,

      // cancelButtonText: 'Field',
      // confirmButtonText: 'Branch',
      // customClass: {
      //   confirmButton: "filledBtn",
      //   cancelButton: 'strokedBtn'
      // }
      showCancelButton: value.status === 'True',
      showConfirmButton: value.status === 'True',
      cancelButtonText: 'Field',
      confirmButtonText: 'Branch',
      customClass: {
        confirmButton: value.status === 'True' ? "filledBtn" : "hiddenBtn",
        cancelButton: value.status === 'True' ? 'strokedBtn' : 'hiddenBtn'
      }

    }).then((result) => {
      if (result.isConfirmed) {
        this.route.navigateByUrl('/kyc')
        // this.unlinkconfirm()
      }
      else {
        console.log('close')
      }
    })
  }

  sucesscenter(type:any) {
    let obj1 = {
      "ExistingMobileNumber": this.formupdate.get('ExistingMobileNumber')?.value,
      "NewMobileNumber": this.formupdate.get('NewMobileNumber')?.value,
      "ConfirmNewMobileNumber": this.formupdate.get('ConfirmNewMobileNumber')?.value,
      "Phoneno":this.formupdate.get('NewMobileNumber')?.value,
      "UserId": this.userObj.UserID,
      "OTPNO": "",
      "Flag": this.type
    }
    this._crudService.VerifyMobileNumber(obj1).subscribe({
      next: (value: any) => {
        console.log(value)
        if (value.status == true) {
          this.otp1 = true;
this.mobileNo=this.formupdate.get('NewMobileNumber')?.value
          this.intervalId = setInterval(() => {
            this.timer = this.timer - 1;
            if (this.timer == 0) {
              clearInterval(this.intervalId);
            }
          }, 1000);


          this.showSuccessAlert();

        }
      },

      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })

  }

  showSuccessAlert() {
    Swal.fire({
      width: '350px',
      imageUrl: '../../assets/images/tick.png',
      imageHeight: 80,
      text: 'Mobile Number Updated Successfully',
      showCancelButton: false,

      confirmButtonText: 'Okay',
      customClass: {
        confirmButton: "strokedBtn",

      }

    }).then((result) => {
      if (result.isConfirmed) {
        this.updatescreen2 = false;
        this.mobilescreen1 = true;
      }
      else {
        console.log('close')
      }
    })

  }



  cancel() {

    this.updatescreen1 = true;
    this.updatescreen2 = false;
  }

  saveNext() {

    Swal.fire({
      width: '350px',
      imageUrl: '../../assets/images/tick.png',
      imageHeight: 80,
      text: 'Mobile Number Added Successfully',
      showCancelButton: false,

      confirmButtonText: 'Okay',
      customClass: {
        confirmButton: "strokedBtn",

      }

    }).then((result) => {
      if (result.isConfirmed) {
        this.signTitle = 'Verify Mobile Number';
        this.updatescreen = false;
        this.updatescreen1 = true
        this.updatescreen2 = false;

      }
      else {
        console.log('close')
      }
    })

  }

  /* krishna */


  otpclick() {
    this.otpDialogRef = this.dialog.open(OtpComponent, {
      width: '330px'

    })
  }

}





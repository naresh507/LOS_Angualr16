import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-adharotp',
  templateUrl: './adharotp.component.html',
  styleUrls: ['./adharotp.component.css']
})
export class AdharotpComponent implements OnInit{
  showOtpInput: boolean = false; 
  showAadharDetails:boolean= false;
  showAadharphoto:boolean= false;
  resData3:any={};
  aadhaarNo: string = '';
  accessKey:string='';
  address:string='';
  dob:string='';
  fatherName:string='';
  gender:string='';
  state:string='';
  district:string='';
  houseNumber:string='';
  pincode:string='';
  maskedAadhaarNumber:string='';
  name:string='';
  image:string='';
  data:string='';
  isLoading: boolean = false;
  resendCooldown: number = 0;
  remainingAttempts: number = 3;
  otp: string[] = ['', '', '', '', '', ''];
  // otp: string = ''
  isValidOTP: boolean = false;
  error: string = '';
  dobString:any='';

  adhardetails: any = {
    aadhaarNo: '',
    consent:'Y'
  };
  checkValidOTP(event:any) {
    console.log(event)
   this.otp=event;
    this.isValidOTP = this.otp.length === 6;
    console.log('OTP Changed:', this.otp);
  }
  
  constructor(private auth: CrudService, private router: Router) {}

  ngOnInit(): void {
  }
  sendotp() {
    
    if (!this.adhardetails.aadhaarNo) {
      this.error = 'Please provide both AAdhar Number';
      return;
    }
    this.isLoading = true;
    this.error = '';

    this.auth.EAdhar(this.adhardetails).subscribe(
      (Response) => {
        this.showOtpInput= true;
        this.resendCooldown = 120;
        this.startCooldownTimer();
        this.accessKey=Response.requestId;
      },
      (error) => {
        this.error = 'An error occurred while sending OTP.';
        this.isLoading = false;
      }
    );
  }

  startCooldownTimer() {
    const interval = setInterval(() => {
      this.resendCooldown -= 1;
      if (this.resendCooldown === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

  resendotp() {

    if (this.resendCooldown > 0) {
      return;
    }

    //  resend OTP logic
    this.isLoading = true;
    this.error = '';

    this.auth.EAdhar(this.adhardetails).subscribe(
      () => {
        this.resendCooldown = 120;
        this.startCooldownTimer();
      },
      (error) => {
        this.error = 'An error occurred while resending OTP.';
        this.isLoading = false;
      }
    );
  }

  Verifyandnext() {
    // if (this.otp.some(digit => !digit)) {
    //   this.error = 'Please enter the complete OTP.';
    //   return;
    // }
  
    // const OTP = this.otp.join('');
    // console.log('OTP:', OTP); 
  
    // if (OTP.length !== 6) {
    //   this.error = 'Please enter a valid OTP.';
    //   return;
    // }
    if (!this.isValidOTP) {
      console.error('Please enter a valid OTP.');
      return;
    }

    //const OTP = this.otp.join('');
    //console.log('OTP:', OTP);
  
    const additionalData = {
      aadhaarNo: this.adhardetails.aadhaarNo,
      otp: this.otp,
      accessKey: this.accessKey,
      consent: 'Y'
    };
    this.auth.EAdharfile(additionalData).subscribe(
      (responseData) => {
       
        const resData2=JSON.parse(responseData['ResponseString']);
      
        let response= resData2.result.dataFromAadhaar
        console.log(response);
        this.resData3 = {
          address: response.address.combinedAddress,
          dob: response.dob,
          fatherName: response.fatherName,
          gender: response.gender,
          maskedAadhaarNumber: response.maskedAadhaarNumber,
          name: response.name ,
          state: response.address.splitAddress.state,
          district: response.address.splitAddress.district,
          houseNumber: response.address.splitAddress.houseNumber,
          pincode: response.address.splitAddress.pincode,

        }
        this.showAadharphoto=true;
        this.showAadharDetails=true;
        // if (this.resData3.dob) {
        //   const dobString = this.resData3.dob;
        //   const dob = new Date(dobString);
        //   const today = new Date();
        //   const age = today.getFullYear() - dob.getFullYear();
        //   if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        //     age--;
        //   }
        //   this.resData3.age = age;
        // }
  

        if (resData2.result && resData2.result.dataFromAadhaar.image) {
          this.name = resData2.result.dataFromAadhaar.name;
          this.maskedAadhaarNumber = resData2.result.dataFromAadhaar.maskedAadhaarNumber;
            this.image= `data:image/png;base64,${resData2.result.dataFromAadhaar.image}`;
            console.log("Successfully verified and displayed the image");
        } else {
          console.error('Missing or invalid dataFromAadhaar property in JSON data');
        }
      },
      (error) => {
        console.error('Error sending additional data:', error);
      }
    );
  }
}

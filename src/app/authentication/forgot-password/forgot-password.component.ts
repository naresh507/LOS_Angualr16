import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  UserID: any;
  isLastDigitEntered: boolean= false;
  hide = true;
  otp:boolean=false;
  resendCooldown: number = 0;
  remainingAttempts: number = 2;
  sendotpresponse:string='';

  ForgotDetails: any = {
    UserID: '',
    MoblieNumber: '',
    OTP: '',
    Flag:'U'
  
  };


  checkOtpLength() {
    const enteredOtp = this.ForgotDetails.OTP;
    if (enteredOtp && enteredOtp.length == 6) {
      const lastChar = enteredOtp.slice(-1); 
      this.isLastDigitEntered = !isNaN(parseInt(lastChar));
    } else {
      this.isLastDigitEntered = false;
    }
  }
  constructor(
    private router: Router,private auth:AuthenticationService
    
  ) { }

  ngOnInit(): void {

  }

  chcekValue(event: any): boolean {
    const code = (event.which) ? event.which : event.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
      return false
    }
    return true;
  }
login()
{
  this.router.navigateByUrl('/login')
}

  simpleAlert(){
      const additionalData = {
        UserID: this.ForgotDetails.UserID,
        MoblieNumber: this.ForgotDetails.MoblieNumber,
        OTP: this.ForgotDetails.OTP,
        Flag:"O"
      };
      this.auth.sendOtp(additionalData).subscribe(
        (response) => {
          if (response && response.status && response.status === true && response.message === 'Data Fetch Successfully') {
            this.sendotpresponse = response.ForgotPasswordMoblieNumberInfo[0].Message;
            this.auth.setForgotCredentials(this.ForgotDetails.UserID);

            //this.auth.clearForgotCredentials();

            Swal.fire({
              imageUrl: '../../assets/images/warining.svg',
              imageHeight: 80,
              text: this.sendotpresponse,
            });
      }
     
            this.router.navigate(['/resetpasword']);
          }
        //    else {
            
           
        // }
      );
  }

  resendotp() {

    if (this.resendCooldown > 0 || this.remainingAttempts === 0) {
      if (this.remainingAttempts === 0) {
        Swal.fire({
          imageUrl: '../../assets/images/warining.svg',
          imageHeight: 80,
          text: 'Maximum attempts reached. Please try after a while',
        });
      }
      return; 
    }
    this.auth.sendOtp(this.ForgotDetails).subscribe(
      () => {
        this.resendCooldown = 90;
        this.startCooldownTimer();
        this.otp = true;
      }
    );

    this.remainingAttempts--;
   
  
    Swal.fire({
      width: '350px',
      imageUrl: '../../assets/images/tick.png',
      imageHeight: 80,
      text: 'Resend OTP Sent Successfully',
      showCancelButton: false,
      confirmButtonText: 'Okay',
      customClass: {
        confirmButton: 'strokedBtn',
      }
    }).then((result) => {
      if (!result.isConfirmed) {
        console.log('close');
      }
    });
  }


  sucessOTP() {
    this.auth.sendOtp(this.ForgotDetails).subscribe(
      (response) => {
        this.sendotpresponse = response.ForgotPasswordMoblieNumberInfo[0].Message;
        console.log(this.sendotpresponse);
        Swal.fire({
          width: '350px',
          imageUrl: '../../assets/images/tick.png',
          imageHeight: 80,
          text: this.sendotpresponse,
          showCancelButton: false,
          confirmButtonText: 'Okay',
          customClass: {
            confirmButton: 'strokedBtn',
          }
        }).then((result) => {
          if (!result.isConfirmed) {
            console.log('close');
          }
        });
        this.resendCooldown = 90;
        this.startCooldownTimer();
        this.otp = true;
      },
      (error) => {
        console.error('Error sending OTP:', error);
        // Handle error if needed
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

  
}

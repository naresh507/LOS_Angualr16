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

  isLastDigitEntered: boolean= false;
  hide = true;
  otp:boolean=false;
  resendCooldown: number = 0;
  remainingAttempts: number = 2;


  ForgotDetails: any = {
    UserId: '',
    Phoneno: '',
    OTPNO: '',
    Flag:'U'
  
  };


  checkOtpLength() {
    const enteredOtp = this.ForgotDetails.OTPNO;
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
login()
{
  this.router.navigateByUrl('/login')
}

  simpleAlert(){
      const additionalData = {
        UserId: this.ForgotDetails.UserId,
        Phoneno: this.ForgotDetails.Phoneno,
        OTPNO: this.ForgotDetails.OTPNO,
        Flag:"O"
      };
      this.auth.sendOtp(additionalData).subscribe(
        (response) => {
          if (response && response.status && response.status === true && response.message === 'OTP Successfully Verified') {
            this.router.navigate(['/resetpasword']);
          } else {
            
            Swal.fire({
                  imageUrl: '../../assets/images/warining.svg',
                  imageHeight: 80,
                  text: response.message,
                });
          }
        }
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
      () => {
        this.resendCooldown = 90;
        this.startCooldownTimer();
        this.otp = true;
      },
      (error) => {
        console.error('Error sending OTP:', error);
        // Handle error if needed
      }
    );
  
    Swal.fire({
      width: '350px',
      imageUrl: '../../assets/images/tick.png',
      imageHeight: 80,
      text: 'OTP Sent Successfully',
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

  startCooldownTimer() {
    const interval = setInterval(() => {
      this.resendCooldown -= 1;
      if (this.resendCooldown === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

  
}

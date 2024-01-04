import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  forgotuserObj: any;
  UserID:any;
  resetResponse:string='';
  errorMessage: string = ''; 
  passwordsMatch: boolean = false;
  // UserID: any;
  NewPassword:string='';
  ConfirmPassword:string='';
  validationMessage = '';
  passwordMismatchError = false;
  isNewPassword = true;
  isConfirmPassword = true;



  reset: any = {
    NewPassword:'',
    ConfirmPassword:'',
    UserID: '',
    OTP: "",
    MoblieNumber: "",
    Oldpassword: ""
  };

  validatePasswordCriteria(){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    this.validationMessage = regex.test(this.reset.NewPassword)
      ? ''
      : 'Please enter a minimum 8-character password with at least 1 upper case, 1 lower case, 1 numeric and 1 special character.';

  }

  checkPasswordMatch(){

    this.passwordMismatchError = this.reset.NewPassword !==this.reset.ConfirmPassword;
    // this.passwordMismatchError = !this.passwordsMatch;
    this.passwordsMatch = true;

  }
  constructor(private router: Router,
    private auth: AuthenticationService
    
  ) { }



  ngOnInit(): void {
    //this.forgotuserObj = JSON.parse(localStorage.getItem('userObj') || '{}');

    this.forgotuserObj = JSON.parse(localStorage.getItem('ForgotUserid') || '{}');
    this.reset.UserID = this.forgotuserObj.userId;

    console.log(this.forgotuserObj);
    console.log(this.forgotuserObj.userId);
  }

  chcekValue(event: any): boolean {
    const code = (event.which) ? event.which : event.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
      return false
    }
    return true;
  }
  savepassword(){
    this.auth.resetPassword(this.reset).subscribe(
      (response) => {
        console.log(response);
        if (response && response.status && response.status === true) {
          this.resetResponse= response.RestPasswordDetails[0].Message;
          Swal.fire({
            imageUrl: '../../assets/images/warining.svg',
            imageHeight: 80,
            text: this.resetResponse,
          });
          this.router.navigateByUrl('/login')
        } else {
          this.errorMessage = response.message || 'An error occurred while resetting the password.';
        
        }
      }
  
    )
  }
  }

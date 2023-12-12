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
  resetResponse:string='';
  errorMessage: string = ''; 
  passwordsMatch: boolean = false;
  UserID: any;
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
    OTP: "418645",
    MoblieNumber: "8500567429",
    Oldpassword: "An@123"

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
    const userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.UserID = parseInt(userObj.UserID);
    this.reset.UserID=this.UserID;
    
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

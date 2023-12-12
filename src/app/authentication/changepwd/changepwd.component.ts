import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.scss']
})
export class ChangepwdComponent implements OnInit {
  changeResponse:string='';
  passwordsMatch: boolean = false;
  UserID: any;
  isOldPassword = true;
  isNewPassword = true;
  isConfirmPassword = true;
  OldPassword: string = '';
  NewPassword: string = '';
  ConfirmPassword: string = '';
  validationMessage = '';
  passwordMismatchError = false;


  
  changeDetails: any = {
    OldPassword:'',
    NewPassword:'',
    ConfirmPassword:'',
    UserID: ''
  };

  validatePassword(){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    this.validationMessage = regex.test(this.changeDetails.NewPassword)
      ? ''
      : 'Please enter a minimum 8-character password with at least 1 upper case, 1 lower case, 1 numeric and 1 special character.';

  }


  PasswordMatch(){
    this.passwordMismatchError =
    this.changeDetails.NewPassword !==
    this.changeDetails.ConfirmPassword;
    this.passwordsMatch = true;

  }

  constructor(private auth:AuthenticationService,
    private router: Router) { }


  ngOnInit(): void {
    const userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.UserID = parseInt(userObj.UserID);
    this.changeDetails.UserID=this.UserID;
  }


  save(){
    this.auth.ChangePassword(this.changeDetails).subscribe(
      (response) => {
        console.log(response);
        if (response && response.status && response.status === true && response.message === 'Data Fetch Successfully') {
          this.changeResponse= response.ChangePasswordData[0].Message;
          Swal.fire({
            imageUrl: '../../assets/images/warining.svg',
            imageHeight: 80,
            text: this.changeResponse,
            
          });
          console.log(this.changeResponse);
          this.router.navigateByUrl('/login')
        } else {
          // Swal.fire({
          //   imageUrl: '../../assets/images/warining.svg',
          //   imageHeight: 80,
          //   text: this.changeResponse,
            
          // });
      
        }
      }
     
      //this.router.navigateByUrl('/login')
    )
  }

  simpleAlert(){
    Swal.fire({
    imageUrl: '../../assets/images/warining.svg',
    imageHeight: 80,
    text: 'Incorrect Match!',  
  });
  }

}

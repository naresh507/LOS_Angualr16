import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  userId:any;
  Password:any;
  hide = true;
  loginForm!: FormGroup;
  rememberPassword: boolean = false;

  userObj= {
    UserID: '',
    BranchId: '',
    BrachName: '',
    UserRole: '',
    Type:'',
    EmpCode:''
  }


  constructor(
    private router: Router,private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
    
  ) {

    
   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      Password: ['', Validators.required],
      rememberPassword: [false] 
    });

    const rememberedCredentials = this.authenticationService.getRememberedCredentials();
    if (rememberedCredentials) {
      this.loginForm.patchValue({
        userId: rememberedCredentials.userId,
        Password: rememberedCredentials.Password,
        rememberPassword: true 
      });
    }
    else{
    this.loginForm = new FormGroup({
      userId: new FormControl(''),
      Password: new FormControl(''),
      MACID: new FormControl(''),
      Version:new FormControl(''),
      rememberPassword:new FormControl('')
    })
  }
     
  }

  rememberpwd(){

  }

forgotpwd()
{
  this.router.navigateByUrl('/forgotpassword')
}
  
logIn() {
 
      if (this.loginForm.valid) {

        const data = {
          UserId: this.loginForm.get('userId')?.value,
          Password: this.loginForm.get('Password')?.value
        }
        if (this.loginForm.get('rememberPassword')?.value) {
          this.userId = this.loginForm.get('userId')?.value;
          this.Password = this.loginForm.get('Password')?.value;
          this.authenticationService.setRememberedCredentials(this.userId, this.Password);
        } else {
          this.authenticationService.clearRememberedCredentials();
        }
         this.authenticationService.login(data).subscribe({
          next: (value: any) => {
            if (value.status == true) {
              this.authenticationService.clearToken();
              this.authenticationService.setToken(value.data.token);
              
              this.userObj.UserID=value.EmpId;
              this.userObj.EmpCode=value.EmpCode;

              const obj=   {
                "UserID":value.EmpCode
              }
                this.authenticationService.userRoleDetails(obj).subscribe({
                       next: (value: any) => {
                      console.log(value)
                      this.userObj.UserRole=value.UserRole;
                      this.authenticationService.setUserObj(JSON.stringify(this.userObj))
                       },
                       error: (err: HttpErrorResponse) => {
                       }
                     })

              this.router.navigateByUrl('/dashboard')
              
            } else {
              this.warningPopup('The Username or Password is Incorrect.')
            
            }
          },
          error: (err: HttpErrorResponse) => {
            
  this.warningPopup(err.error.Message)
        
          }
        })
      }
     
  }
  

  warningPopup(msg:any){
    Swal.fire({
   imageUrl: '../../assets/images/warining.svg',
    imageHeight: 80,
    text: msg,  
  });
  }
  sucessPopup(msg:any){
    Swal.fire({
    imageUrl: '../../assets/images/warining.svg',
    imageHeight: 80,
    text: msg,  
  });
  }
}

import { Component, OnInit, ElementRef, ViewChild, Renderer2, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { NgOtpInputConfig, NgOtpInputModule } from 'ng-otp-input';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-creatempin',
  templateUrl: './creatempin.component.html',
  styleUrls: ['./creatempin.component.scss']
})
export class CreatempinComponent implements OnInit {
 
  userId: any = "";
  userRole: any = "";
  newMPINValues: string = '';
  confirmMPINValues: string = '';
  validationMessage = '';
  passwordMismatchError = false;


   @ViewChildren('inputElement') inputElements!: QueryList<ElementRef<HTMLInputElement>>;
  //  @ViewChild(NgxOtpInputModule, { static: false}) ngInput:NgxOtpInputModule;
  

    PasswordMatch(){
      this.passwordMismatchError =
      this.newMPINValues !==
      this.confirmMPINValues;
    }
  

    checkValidOTP(event: any, target: 'newMPINValues' | 'confirmMPINValues') {
      const inputValue = event.replace(/\D/g, '');
    this[target] = inputValue;
    // this[target] = event;
    console.log(event)
    console.log('OTP Changed:', this.newMPINValues, this.confirmMPINValues);
  }
  constructor(private renderer: Renderer2,
    private router: Router,
    private authenticationService: AuthenticationService

  ) { }

  ngAfterViewInit() {
    // Focus on the first input element initially
    setTimeout(() => {
      this.focusInput(0);
    });
  }

  onInputKeyUp(event: KeyboardEvent, index: number) {
    if (!isNaN(Number(event.key))) {
      this.focusInput(index + 1);
    }
  }

  focusInput(index: number) {
    const inputs = this.inputElements.toArray();
    if (index >= 0 && index < inputs.length) {
      inputs[index].nativeElement.focus();
    }
  }
  ngOnInit(): void {
    const userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.userId = parseInt(userObj.UserID);
    this.userRole = userObj.UserRole;
  }
  save() {
    const requestBody = {
      "UserID": this.userId.toString(),
      // "NewMPIN": this.newMPINValues.join(''),
      "NewMPIN": this.newMPINValues,
      // "ConfirmMPIN": this.confirmMPINValues.join(''),
      "ConfirmMPIN": this.confirmMPINValues,
      "OLDMPIN": "",
      "Flag": "I"
    };
    this.authenticationService.mpinandforgotandcreate(requestBody).subscribe(
      (Response) => {
      this.router.navigateByUrl('./mpin');
    })
  }


  password() {

  }

}



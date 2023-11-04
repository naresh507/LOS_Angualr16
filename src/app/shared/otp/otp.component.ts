import { Component } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent {
  otp: string[] = ['', '', '', '', '', ''];
  combinedOtp:any;
  constructor() { }

  ngOnInit(): void {
  }
  onInputChange(index: number, value: string) {
    if (value.match(/^[0-9]$/)) {
      console.log('yes')
      this.otp[index] = value;

      
      this.combinedOtp = this.otp.join(''); // Combine OTP values

      if (index < 5) {
        console.log('ano')
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        // Focus the next input box
        if (nextInput) {
          console.log('yes inside')
          nextInput.focus();
        }
      }
    }
  }
}

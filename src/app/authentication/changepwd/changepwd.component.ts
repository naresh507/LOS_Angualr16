import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.scss']
})
export class ChangepwdComponent  {
  hide = true;
  otp:boolean=false;
  constructor(
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    

   
     
  }
login()
{
  this.router.navigateByUrl('/signin')
}

  simpleAlert(){
    Swal.fire({
    imageUrl: '../../assets/images/warining.svg',
    imageHeight: 80,
    text: 'Incorrect Match!',  
  });
  }

  resendotp(){
    Swal.fire({
    imageUrl: '../../assets/images/warining.svg',
    imageHeight: 80,
    text: 'Maxmum Attepts Reached',  
  });
  }
  sucessOTP()
  {
    
      Swal.fire({
        width:'350px',
      imageUrl: '../../assets/images/tick.png',
      imageHeight: 80,
      text: 'OTP Sent Successfully',  
     showCancelButton:false,
     
      confirmButtonText:'Okay',
      customClass: {
        confirmButton: "strokedBtn",
       
      }
  
    }).then((result) => {
      if(result.isConfirmed)
      {
       this.otp=true;
      
      }
      else
      {
        console.log('close')
      }
    })
    
  }
  
}

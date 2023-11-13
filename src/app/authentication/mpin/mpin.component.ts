
import { Component, OnInit,ElementRef, ViewChild, Renderer2, ViewChildren, QueryList} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-mpin',
  templateUrl: './mpin.component.html',
  styleUrls: ['./mpin.component.scss']
})
export class MpinComponent implements OnInit {
  hide = true;
  loginForm!: FormGroup
 
  @ViewChildren('inputElement') inputElements!: QueryList<ElementRef<HTMLInputElement>>;
  inputValues: string[] = ['', '', '', ''];

  constructor(private renderer: Renderer2,
    private router: Router,
    private authenticationService: AuthenticationService
    
  ) { }

  ngOnInit(): void {
   
    this.loginForm = new FormGroup({
      userId: new FormControl(''),
      Password: new FormControl(''),
      MACID: new FormControl(''),
      Version:new FormControl('')
    })
   
     
  }


  password() {
    this.router.navigateByUrl('/signin')
    }
  
logIn() {
  this.router.navigateByUrl('/dashboard')
  }
  

  warningPopup(){
    Swal.fire({
    imageUrl: '../../assets/images/warining.svg',
    imageHeight: 80,
    text: 'Something went wrong!',  
  });
  }
  sucessPopup(){
    Swal.fire({
    imageUrl: '../../assets/images/warining.svg',
    imageHeight: 80,
    text: 'Suceess!',  
  });
  }


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

}

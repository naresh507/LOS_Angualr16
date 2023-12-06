import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mpin-forgot',
  templateUrl: './mpin-forgot.component.html',
  styleUrls: ['./mpin-forgot.component.scss']
})
export class MpinForgotComponent {
  userId: any;
  hide = true;
  otp:boolean=false;
  constructor(
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    
  }
  save(){
    this.router.navigateByUrl('/createMpin');
  }
}

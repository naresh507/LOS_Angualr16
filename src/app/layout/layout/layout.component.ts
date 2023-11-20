import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactusComponent } from '../contactus/contactus.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {


  isDrawerOpen = false;

  userId:any="";
  EmpCode:any;
  userRole:any="";
  userDetails:any;
  constructor(public dialog: MatDialog, private router:Router,  private authenticationService:AuthenticationService) {}

  ngOnInit(): void {
    const userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.userId = parseInt(userObj.UserID);
    this.userRole=userObj.UserRole;
    this.EmpCode=userObj.EmpCode
    this.getUserRole()
    
  }

  toggleDrawer() {
    this.isDrawerOpen = true;
  }

  closeDrawer() {
    this.isDrawerOpen = false;
  }


  openDialog(): void {
    this.dialog.open(ContactusComponent, {
      width: '450px',
    
    });
  }



  
  logout(){


    Swal.fire({
      width:'350px',
    imageUrl: '../../assets/images/warining.svg',
    imageHeight: 80,
    text: 'Are you sure to logout Confirm.',  
   showCancelButton:true,
   cancelButtonText:'Cancel',
    confirmButtonText:'Yes'
  }).then((result)=>{
   
    if(result.isConfirmed)
    {
      localStorage.removeItem('userObj');
      this.router.navigateByUrl('/login')

    }
    else
    {
      console.log('close')
    }
   
    // function when confirm button clicked
 });
  }

  faq()
  {
    this.router.navigateByUrl('/faq')
  }

  video()
  {
    this.router.navigateByUrl('/video')
  }
  notification()
  {
    this.router.navigateByUrl('/notification')
  }
  changepwd()
  {
    this.router.navigateByUrl('/changepassword')
  }
  resetpwd()
  {
    this.router.navigateByUrl('/resetpasword')
  }




  getUserRole() {
    const obj=   {
      "UserID":this.EmpCode ,
    }
      this.authenticationService.userRoleDetails(obj).subscribe({
             next: (value: any) => {
            console.log(value) 
            this.userDetails=value;
        this.userRole=value.UserRole;
             },
             error: (err: HttpErrorResponse) => {
             }
           })
         
     }


}
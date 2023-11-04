import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import Swal from 'sweetalert2';
interface userObjType {
  UserID: string,
  BranchId: string,
  BrachName: string,
  UserRole?: string,
  Type:string
}

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.scss']
})
export class StaffDashboardComponent implements OnInit {
show:boolean=false;
userId:any="";
userRole:any="";
BrachName:any="";
BranchId:any="";
Type:any="";

branchDetails:any=[];
  dateIconclick()
  {
this.show=true
  }

  constructor(private route:Router, private authenticationService:AuthenticationService)
  {

  }
  ngOnInit(): void {
  //this.userObj  = this.authenticationService.getUserObj();  
  const userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
  this.userId = parseInt(userObj.UserID);
  this.userRole=userObj.UserRole;
  this.getDashoardDetails();
  
}
 


//DashBoardDetails
     getDashoardDetails() {
      const obj=   {
        "UserID":this.userId ,
        "UserRole": this.userRole,

    }
        this.authenticationService.DashboardDetails(obj).subscribe({
               next: (value: any) => {
              console.log(value) 
              this.branchDetails=value.BrachDashboardDetails[0];
              console.log(this.branchDetails)  
              // this.staffDashBoardDetails= value.DashBoardDetails[0];
              // console.log(this.staffDashBoardDetails)
                 if (value.status == true) {
                
                
                 } else {
               
                 
                 }
               },
               error: (err: HttpErrorResponse) => {
               }
             })
           
       }
     


  warningPopup(){
    Swal.fire({
      width:'350px',
    imageUrl: '../../assets/images/warining.svg',
    imageHeight: 80,
    text: 'Enrolment Restricted! Contact Administrator.',  
   
    confirmButtonText:'Okay'
  });
  }


  pageLink(url:string)
  {
    this.route.navigateByUrl(url)

  }
}

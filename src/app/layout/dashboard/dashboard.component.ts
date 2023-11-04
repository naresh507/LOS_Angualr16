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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  userObj:any;
empCode:any="";
userRole:any="";

 

  constructor(private route:Router, private authenticationService:AuthenticationService)
  {

  }
  ngOnInit(): void {
  
  //this.userRole=userObj.UserRole;
  console.log(this.userRole)
  setTimeout(() => {
    this.getUserRole();
  }, 2000);
  
  
  
}


     getUserRole() {
      this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
  this.empCode = parseInt(this.userObj.EmpCode);
      this.empCode = parseInt(this.userObj.EmpCode);
      console.log(this.userObj)
      const obj=   {
        "UserID":this.empCode ,
      }
        this.authenticationService.userRoleDetails(obj).subscribe({
               next: (value: any) => {
              console.log(value) 
          this.userRole=value.UserRole;
               },
               error: (err: HttpErrorResponse) => {
               }
             })
           
       }
     


}

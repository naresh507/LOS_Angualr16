import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent {
  userId:any="";
  userRole:any="";
  Type:any="";
  dashBoardDetails:any;
  constructor(private route:Router, private authenticationService:AuthenticationService)
  {

  }
  ngOnInit(): void {
  //this.userObj  = this.authenticationService.getUserObj();  
  const userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
  this.userId = parseInt(userObj.UserID);
  this.userRole=userObj.UserRole;
  
  this.getDashoardInsights('MTD');
}


  getDashoardInsights(type:any) {
    this.Type=type
    const obj=   {
      "UserID":this.userId ,
      "BranchId": "",
      "BrachName": "",
      "UserRole": this.userRole,
      "Type": type
  }
      this.authenticationService.dashboardInsights(obj).subscribe({
             next: (value: any) => {
            console.log(value)   
            this.dashBoardDetails= value.DashBoardDetails[0];
            console.log(this.dashBoardDetails)
               if (value.status == true) {
              
              
               } else {
             
               
               }
             },
             error: (err: HttpErrorResponse) => {
             }
           })
         
     }

}

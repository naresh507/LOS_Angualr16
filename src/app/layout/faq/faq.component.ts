import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { PagesService } from 'src/app/shared/services/pages.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit{
userId:any;
userRole:any;
FaqReqData:any;
constructor(private service:PagesService, private authenticationService: AuthenticationService){}
ngOnInit(): void {
  //this.userObj  = this.authenticationService.getUserObj();  
  const userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
  this.userId = parseInt(userObj.UserID);
  this.userRole=userObj.UserRole;
  this.getFaq();
 //this.getuserObj()
}

//DashBoardDetails
getFaq() {
  const obj=   {
    "UserID":this.userId ,
    "UserRole": this.userRole,

}


    this.service.faq(obj).subscribe({
           next: (value: any) => {
                      if (value.status == true) {
            
            this.FaqReqData=value.FaqReqData;
            console.log(this.FaqReqData)
             } else {
           
             
             }
           },
           error: (err: HttpErrorResponse) => {
           }
         })
       
   }

}

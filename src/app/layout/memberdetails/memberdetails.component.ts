import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-memberdetails',
  templateUrl: './memberdetails.component.html',
  styleUrls: ['./memberdetails.component.scss']
})
export class MemberdetailsComponent  implements OnInit{
  MainEarningBasicDetails: boolean = true
  EarningbasicDetails: boolean = true;
  form!:FormGroup;
  userObj:any;
  dialogRef: any;
  CasteCategoryDetails:any;
  FamilyTypeDetails:any;
  LOCALITYDetails:any;
  OwnershipDetails:any;
  ProdctDetails:any;
  PurposeDetails:any;
  ReligionCommunityDetails:any;
  TypeofRoofDetails:any;

  @Output() gotonext = new EventEmitter()

  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.getMasterData();
  }
 

  constructor(
    private dialog: MatDialog,
    private _fb:FormBuilder,
    private _crudService:CrudService,
    private toastr: ToastrService,
    private router:Router
    ) {
      this.form=this._fb.group({
        MemberName:['', Validators.required],
        InstitutionType:[''],
        InstitutionName:[''],
        LoanAccountNO:[''],
        OutstandingBalance:[''],
        EMI:[''],
        Preclosure:[''],
        AccountStatus:[''],
        
      })
    }

  

    MemberDataSubmitData(formData: any) {
    console.log(formData.value)
  formData.value['UserId']=this.userObj.UserID;
  console.log(formData.value) 
    let obj={
      "MemberDataSubmit":[{}]
     }
  
  obj.MemberDataSubmit=[formData.value]
  
    this._crudService.EaringMemberDetailsSubmit(obj).subscribe({
      next: (value: any) => {
     console.log(value)
     if(value.status==true || value.status=='True')
     {
      
    
      this.toastr.success('Member Data Added Successfully');
      this.dialogRef.close();
       
     }
      },
      
          error: (err: HttpErrorResponse) => {
            console.log(err)
          }
     })
  
    
  }
  

  getMasterData()
  {
    let obj={
    
     "UserId": this.userObj.UserID,
     
   }
    this._crudService.getMasterDetails(obj).subscribe({
      next: (value: any) => {
     console.log(value)
     if(value.status==true)
     {
      this.FamilyTypeDetails=value.FamilyTypeDetails;
      this.TypeofRoofDetails=value.TypeofRoofDetails;
      this.OwnershipDetails=value.OwnershipDetails;
      this.LOCALITYDetails=value.LOCALITYDetails;
      this.CasteCategoryDetails=value.CasteCategoryDetails;
      this.ReligionCommunityDetails=value.ReligionCommunityDetails
     }
      },
      
          error: (err: HttpErrorResponse) => {
            console.log(err)
          }
     })
  }
  addearningMember(){
    this.router.navigateByUrl('/addnewClient')
  }
}

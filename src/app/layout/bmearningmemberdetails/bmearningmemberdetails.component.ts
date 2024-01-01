import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/shared/services/crud.service';


@Component({
  selector: 'app-bmearningmemberdetails',
  templateUrl: './bmearningmemberdetails.component.html',
  styleUrls: ['./bmearningmemberdetails.component.scss']
})
export class BMearningmemberdetailsComponent {
  
  @Output() gotonext = new EventEmitter()
  addmember: boolean = false;
  response:any;
  LosUnique_Id: any = {};
  dialogref:any;
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
  isImagesEnabled:boolean=false;




  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');

    console.log( this.userObj);
    this.LosUnique_Id = JSON.parse(localStorage.getItem('aadharObj') || '{}');
    // this.getMasterData();
    this.EarningMembersDataFetch();
  }
 

  constructor(
    private dialog: MatDialog,
    private _fb:FormBuilder,
    private _crudService:CrudService,
    private toastr: ToastrService,
    private router:Router,private Dialog:MatDialog
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

  EarningMembersDataFetch()
  {
    let obj={
     "UserId": this.userObj.UserID,
     "LosUnique_Id" :this.LosUnique_Id,
   }
    this._crudService.BMEarningMembersData(obj).subscribe({
      next: (value: any) => {
   
     if(value.status==true && value.BMEarningMembersDataInfo.length >= 1)
     {
      this.response = value.BMEarningMembersDataInfo;
     }
      },
          error: (err: HttpErrorResponse) => {
           
          }
     })
  }
  

  
  addearningMember(){

  }
  

  Next(){
    this.gotonext.emit();
  }

toggleImagesSection(){
this.isImagesEnabled=!this.isImagesEnabled;
}

enlarge(){

}
}
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from 'src/app/shared/services/crud.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-hhliablity',
  templateUrl: './hhliablity.component.html',
  styleUrls: ['./hhliablity.component.scss']
})
export class HhliablityComponent implements OnInit{
  LosUnique_Id: any = {};
  form!:FormGroup;
  userObj:any;
  dialogRef: any;
  HHLiability:any;

  @ViewChild('addmember', { static: true })
  addmember!: TemplateRef<any>;
  constructor(
    private dialog: MatDialog,
    private _fb:FormBuilder,
    private _crudService:CrudService,
    private toastr: ToastrService,
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

    ngOnInit(): void {
      this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
      this.LosUnique_Id = JSON.parse(localStorage.getItem('aadharObj') || '{}');
      this.getMasterData();
    }

    getMasterData() {
      let obj = {
        "UserId": this.userObj.UserID,
        "LoanID" :this.userObj.LoanID,
       " LosUnique_Id":this.LosUnique_Id
      }
      this._crudService.HHLiabilityFetchSub(obj).subscribe({
        next: (value: any) => {
          console.log(value)
          this.HHLiability= value.HHLiabilityFetchataDetails[0];

          console.log(this.HHLiability)
          if (value.status == true) {
          }
        },
  
        error: (err: HttpErrorResponse) => {
          console.log(err)
        }
      })
    }

    
    openAddMember(): void {
    
    this.dialogRef = this.dialog.open(this.addmember, {
      width: '350px',
    
    });
    this.dialogRef.afterClosed().subscribe((_result: any) => {
      console.log('The dialog was closed', _result);
      if (_result == 'Yes') {
      }
    });
  }

  onNoClick(e: any): void {
    this.dialogRef.close(e);
  }


  

  addliablityDetails(formData: any) {
    console.log(formData.value)
  formData.value['UserId']=this.userObj.UserID;
  formData.value['LosUnique_Id']=this.LosUnique_Id;
  console.log(formData.value) 
    let obj={
      "HouseHoldLiabilityData":[{}]
     }
  
  obj.HouseHoldLiabilityData=[formData.value]
  
    this._crudService.addHouseHoldLiabilitySubmit(obj).subscribe({
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
  

}

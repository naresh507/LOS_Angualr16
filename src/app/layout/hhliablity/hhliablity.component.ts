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
 form1!:FormGroup;
  userObj:any;
  dialogRef: any;
  HHLiability:any;

  houseHoldLiabilities: any[] = [];

  @ViewChild('addmember', { static: true })
  addmember!: TemplateRef<any>;
  public obj={
      MemberName:'',
      InstitutionType:'',
      InstitutionName:'',
      LoanAccountNo:'',
      OutstandingBalance:'',
      EMI:'',
      Preclosure:'',
      AccountStatus:'',
      BlanceTransfer: "",
      UserID: ""

      }
      public objattr=JSON.parse(JSON.stringify(this.obj))
  public HHLiabilityInfo:any=[]
  constructor(
    private dialog: MatDialog,
    private _fb:FormBuilder,
    private _crudService:CrudService,
    private toastr: ToastrService,
    ) {
      // this.form=this._fb.group({
      //   MemberName:['', Validators.required],
      //   InstitutionType:[''],
      //   InstitutionName:[''],
      //   LoanAccountNO:[''],
      //   OutstandingBalance:[''],
      //   EMI:[''],
      //   Preclosure:[''],
      //   AccountStatus:[''],
        
      // })

      this.form1=this._fb.group({
        ForceClouser:['', Validators.required],
        
        AccountStatus:[''],
        BalanceTransfer:[''],
      })
    }

    ngOnInit(): void {
      this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
      this.obj.UserID= this.userObj.UserID;

      this.LosUnique_Id = JSON.parse(localStorage.getItem('aadharObj') || '{}');
      this.getMasterData();
    }

   
    save(formData:any){

    }

    addmember1(){
      this.HHLiabilityInfo.push(this.obj);
      this.onNoClick('No')
    }

    getMasterData() {
      let objHH = {
        "UserId": this.userObj.UserID,
        "LoanID" :this.userObj.LoanID,
       " LosUnique_Id":this.LosUnique_Id
      }

    
      this._crudService.HHLiabilityFetchSub(objHH).subscribe({
        next: (value: any) => {
          console.log(value)
          this.HHLiability= value.HHLiabilityFetchataDetails;

          console.log(this.HHLiability)
          if (value.status == true) {
          }
          for (let obj1 of this.HHLiability){
            let hhobj={
              MemberName:obj1.MemberName,
              InstitutionType:obj1.InstitutionType,
              InstitutionName:obj1.InstitutionName,
              LoanAccountNo:obj1.LoanAccountNo,
              OutstandingBalance:obj1.OutstandingBalance,
              EMI:obj1.EMI,
              Preclosure:'',
              AccountStatus:'',
              BlanceTransfer: "",
              UserID:  this.userObj.UserID
              }
              this.HHLiabilityInfo.push(hhobj)
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
    this.obj =JSON.parse(JSON.stringify(this.objattr))
  }


  

  addliablityDetails() {
    console.log(this.HHLiabilityInfo)
  // formData.value['UserId']=this.userObj.UserID;
  // formData.value['LosUnique_Id']=this.LosUnique_Id;

  // const combinedFormData = {
  //   ...this.form.value,
  //   ...this.form1.value
  // };
  // console.log(formData.value) 
    let obj={
      HouseHoldLiabilityData: this.HHLiabilityInfo
     }
 
  
  // obj.HouseHoldLiabilityData=[formData]

  console.log(obj);
 
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

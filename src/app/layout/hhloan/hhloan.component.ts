import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { CrudService } from 'src/app/shared/services/crud.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hhloan',
  templateUrl: './hhloan.component.html',
  styleUrls: ['./hhloan.component.scss']
})
export class HhloanComponent implements OnInit {
  LosUnique_Id: any = {};
  form!:FormGroup;
  userObj:any;
  HLoan:any;

constructor(private router:Router, private _crudservce:CrudService, private _fb:FormBuilder, private toastr: ToastrService)
{
  this.form=this._fb.group({
    MemberName:['', Validators.required],
    MemberLoanCycle:[''],
    ROL:[''],
    EMIEligbility:[''],
    Tenure:[''],
    HouseHoldIncome:[''],
    HouseHoldExpenditure:[''],
    UserID:[''],
    LosUnique_Id:[]

    
  })
}


// Get Data from LoanEligbiltyget  function

getData() {
  let obj = {
    "UserId": this.userObj.UserID,
    "LosUnique_Id":this.LosUnique_Id
    
  }
  this._crudservce.LoanEligbiltyget(obj).subscribe({
    next: (value: any) => {
      console.log(value)
      this.HLoan= value.LoanEligibilityFechDataInfo[0];

      console.log(this.HLoan);
      if (value.status == true) {
      }
    },

    error: (err: HttpErrorResponse) => {
      console.log(err)
    }
  })
}

// Check Loan Eligibility  Function

  loanCheck(){
    Swal.fire({
      width:'350px',
    imageUrl: '../../assets/images/tick.png',
    imageHeight: 80,
    text: 'Loan Eligibility Check done Successful!',  
   
    confirmButtonText:'Okay'
  });
  }

  
  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.LosUnique_Id = JSON.parse(localStorage.getItem('aadharObj') || '{}');
    this.getData();
  }

// Saving the Data  Function

submit(formData: any)
{
  formData.value['UserID'] = this.userObj.UserID;
  formData.value['LosUnique_Id'] = this.LosUnique_Id;

  let hLoanData = this.HLoan;
  let obj = {
    "LoanEligbiltyData": [{}]
  };
  // console.log(formData.value)
  // formData.value['UserId']=this.userObj.UserID;
  // formData.value['LosUnique_Id']=this.LosUnique_Id;
  // console.log(formData.value) 

  // let hLoanData = this.HLoan; 
  //   let obj={
  //     "LoanEligbiltyData":[{hLoanData}]
  //    }
  
  obj.LoanEligbiltyData=[hLoanData]
  
    this._crudservce.LoanEligbiltySubmit(obj).subscribe({
      next: (value: any) => {
     console.log(value)
     if(value.status==true || value.status=='True')
     {
      this.toastr.success('Member Data Added Successfully');
     }
      },
      
          error: (err: HttpErrorResponse) => {
            console.log(err)
          }
     })
  
     this.router.navigateByUrl('/loanDetails')
  }

}

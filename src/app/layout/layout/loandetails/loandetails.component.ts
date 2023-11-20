

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from 'src/app/shared/services/crud.service';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./loandetails.component.scss']
})
  export class LoandetailsComponent implements OnInit{
  LoanDetails:any;
  userObj:any;
  form!:FormGroup;
  @ViewChild('reasondialog') reasondialog!: TemplateRef<any>;
  @ViewChild('enlargedialog') enlargedialog!: TemplateRef<any>;
  addmember:boolean=false;
  dialogRef: any;
  enlargeDialogRef:any;
  
  basicDetails:boolean=true;
  mainbasicDetails:boolean=true
  memberDetails:boolean=false;
  householdDetails:boolean=false;

  loanDetails:boolean=true;
  guarantordetails:boolean=false;
  insurancedetails:boolean=false;
  bankdetails:boolean=false;



  constructor(private dialog:MatDialog, private _crudService:CrudService, private fb:FormBuilder, private toastr: ToastrService)
  {
    this.form=this.fb.group({
      MemberName:['', Validators.required],
      LoanType:[''],
      LoanPurpose:[''],
      LoanProdct:[''],
      LoanProdctCode:[''],
      AppliedAmt:[''],
      Tenure:[''],
      RecommendedAmt:[''],
      ChoiceOfRepayment_1:[''],
      ClientpoliticallyExposedPerson:[''],
      ClientRelatedPoliticallyExposedPerson:[''],
      JITLoanOptIn:[''],
      JITAppliedAmount:[''],
      JITTenure:[''],
      
    })
  }

  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.getMasterLoanDetailsData();
  }

  getMasterLoanDetailsData() {
    let obj = {
      "UserId": this.userObj.UserID,
      "LoanID" :this.userObj.LoanID,
    }
    this._crudService.LoanDetailsget(obj).subscribe({
      next: (value: any) => {
        console.log(value)
        this.LoanDetails= value.LoanDetailFetchFCODataInfo[0];

        console.log(this.LoanDetails)
        if (value.status == true) {
        }
      },

      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })
  }

  enlarge()
  {
this.enlargeDialogRef= this.dialog.open(this.enlargedialog,{
  width:'600px'

})
  }

  addnewcenter()
{
  this.dialogRef = this.dialog.open(this.reasondialog, {
    width:'400px'
   
  });

  this.dialogRef.afterClosed().subscribe((result: any) => {
    console.log('The dialog was closed');
    
  });
}



onNoClick()
{
  this.sucesscenter();
  this.dialogRef.close();
}
close()
{
  this.enlargeDialogRef.close();
}




sucesscenter()
{
  
    Swal.fire({
      width:'350px',
    imageUrl: '../../assets/images/tick.png',
    imageHeight: 80,
    text: 'Darkrang C2 Center created successfully!',  
   showCancelButton:false,
   
    confirmButtonText:'Okay',
    customClass: {
      confirmButton: "strokedBtn",
     
    }

  }).then((result) => {
    if(result.isConfirmed)
    {
    
    
    }
    else
    {
      console.log('close')
    }
  })
  
}

clickDetails(element:any)
{
  if(element == 'a')
  {
    this.loanDetails=true;
    this.guarantordetails=false;
    this.insurancedetails=false;
    this.bankdetails=false
  }
  if(element == 'b')
  {
    this.loanDetails=false;
    this.guarantordetails=true;
    this.insurancedetails=false;
    this.bankdetails=false
  }
  if(element == 'c')
  {
    this.loanDetails=false;
    this.guarantordetails=false;
    this.insurancedetails=true;
    this.bankdetails=false
  }
  if(element == 'd')
  {
    this.loanDetails=false;
    this.guarantordetails=false;
    this.insurancedetails=false;
    this.bankdetails=true
  }
}



warningpopup()
{
  
    Swal.fire({
      width:'350px',
    imageUrl: '../../assets/images/warining.svg',
    imageHeight: 80,
    text: 'The Client is a politically Exposed Person/Related to a Politically Exposed Person therefore the proposal shall be subjected to scrutiny by Higher Authorities, Do you wish to continue?',  
   showCancelButton:true,
   cancelButtonText:'No',
    confirmButtonText:'Yes',
    customClass: {
      confirmButton: "filledBtn",
      cancelButton:'strokedBtn'
    }

  }).then((result) => {
    if(result.isConfirmed)
    {
    
    //  this.route.navigateByUrl('/newapplicationform')
  //    this.unlinkconfirm()
    }
    else
    {
      console.log('close')
    }
  })
}

  
  Submit(formData: any) {
    let obj={
      "UserID": "",
      "type": "",
      "Id": ""
    }
  
    this._crudService.LoanDetailsSubmit(obj).subscribe({
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



// }

import { HttpErrorResponse } from '@angular/common/http';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/shared/services/crud.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-gstdetails',
  templateUrl: './gstdetails.component.html',
  styleUrls: ['./gstdetails.component.scss']
})
export class GstdetailsComponent{
  @ViewChild('reasondialog') reasondialog!: TemplateRef<any>;
  @ViewChild('enlargedialog') enlargedialog!: TemplateRef<any>;
  form!: FormGroup;
  userObj: any;
  LosUnique_Id: any = {};
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



  constructor(private dialog: MatDialog, private toastr: ToastrService,
    private router: Router, private _crudService: CrudService, private fb: FormBuilder)
  {
    this.form = this.fb.group({
      CompanyKnowledge: ['', Validators.required],
      GroupOrientationResponsibilty: [''],
      ProdcrtKnowledge: [''],
      GrievanceRedressalMechanism: [''],
      LoanRecoveryProcess: [''],
      InsuranceKnowlege: [''],
      AwarenessFinancialLiterancy: [''],
      AwarenessFinancialMalpractices: [''],
      Remarks: [''],
    })
  }

  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.LosUnique_Id = JSON.parse(localStorage.getItem('aadharObj') || '{}');
   
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

submit(formData: any) {
  console.log(formData.value)
  formData.value['UserID'] = this.userObj.UserID;
  formData.value['LosUnique_Id'] = this.LosUnique_Id;
  console.log(formData.value)
  let obj = {
    "CGTDetailsData": [{}]
  }
  obj.CGTDetailsData = [formData.value]

  this._crudService.CGTDetailsSubmit(obj).subscribe({
    next: (value: any) => {
      console.log(value)
      if (value.status == true || value.status == 'True') {


        this.toastr.success('Member Data Added Successfully');
        //this.dialogRef.close();

      }
    },

    error: (err: HttpErrorResponse) => {
      console.log(err)
    }
  })

}

}

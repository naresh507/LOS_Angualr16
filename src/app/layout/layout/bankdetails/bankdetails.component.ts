import { HttpErrorResponse } from '@angular/common/http';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/shared/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.component.html',
  styleUrls: ['./bankdetails.component.scss']
})
export class BankdetailsComponent {
  @ViewChild('otpdialog') otpdialog!: TemplateRef<any>;
  searchbankDetails: any;
  form!: FormGroup;
  isform!:FormGroup;
  userObj: any;
  LosUnique_Id: any = {};
  //tpDialogRef:any;
  obj: any = {};
  otpDialogRef: any;
  otpverify: boolean = false
  bankstatus: boolean = false;

  constructor(private dialog: MatDialog, private route: Router,
    private fb: FormBuilder,
    private _crudService: CrudService) {
      this.form = this.fb.group({
        IFSCCode: ['', Validators.required],
      });

      this.isform = this.fb.group({
        AccountHolderType: [''],
        AccountHolderName: [''],
        AccountType: [''],
        AccountNo: [''],
        ConfimAccountNo: [''],
        DigitalPayment: [''],
        UPIID: [''],
        CapturePhoto: [''],
        CapturePhotoName:[''],
      });
  }

  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.LosUnique_Id = JSON.parse(localStorage.getItem('aadharObj') || '{}');
  }

  otppopupshow() {
    this.otpDialogRef = this.dialog.open(this.otpdialog, {
      width: '400px'

    })
  }



  close() {
    this.otpDialogRef.close();
  }




  submitclose() {
    this.otpverify = true;
    this.close();
  }





  bankcheck() {
    Swal.fire({
      width: '300px',
      imageUrl: '../../assets/images/tick.png',
      imageHeight: 80,
      text: 'Bank Check Successfully',
      showCancelButton: false,
      cancelButtonText: 'No',
      confirmButtonText: 'Yes',
      customClass: {
        confirmButton: "filledBtn",
        cancelButton: 'strokedBtn'
      }

    }).then((result) => {
      if (result.isConfirmed) {
        this.bankstatus = true;
      }
      else {
        console.log('close')
      }
    })
  }


  validateForm(formData: any) {

    console.log(formData.value)
    let obj = {
      "UserID": this.userObj.UserID,
      "IFSCCode": formData.value.IFSCCode,
      "LosUnique_Id":this.LosUnique_Id
    }
    console.log(this.obj)
    this._crudService.BankIFSCCodeSubmit(obj).subscribe({
      next: (value: any) => {
        console.log(value)
        this.searchbankDetails = value.BankIFSCCodeDetils[0];
        if (value.status == true || value.status == 'True') {
          // this.route.navigateByUrl('/gstdetails')
        }
      },

      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    });
  }


  Save(formData: any){
    console.log(formData.value)
    formData.value['UserID'] = this.userObj.UserID;
    formData.value['LosUnique_Id'] = this.LosUnique_Id;
  
    let obj={
      "AccountData":[{

        AccountHolderType: formData.value.AccountHolderType,
        AccountHolderName: formData.value.AccountHolderName,
        AccountType: formData.value.AccountType,
        AccountNo: formData.value.AccountNo,
        ConfimAccountNo: formData.value.ConfimAccountNo,
        DigitalPayment: formData.value.DigitalPayment,
        UPIID: formData.value.UPIID,
        UserId: this.userObj.UserID,
        CapturePhotoName:''
      }]
     }
  
  obj.AccountData=[formData.value]
  
  this._crudService.BankAccountDetails(obj).subscribe({
    next: (value: any) => {
   console.log(value)
   if(value.status==true || value.status=='True')
   { 
    this.route.navigateByUrl('/gstdetails')
   }
    },
    
        error: (err: HttpErrorResponse) => {
          console.log(err)
        }
   })
  }
  gotopage() {
    this.route.navigateByUrl('/gstdetails')
  }
}


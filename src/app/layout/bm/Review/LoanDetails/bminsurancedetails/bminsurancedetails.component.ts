import { HttpErrorResponse } from '@angular/common/http';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/shared/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bminsurancedetails',
  templateUrl: './bminsurancedetails.component.html',
  styleUrls: ['./bminsurancedetails.component.scss']
})
export class BminsurancedetailsComponent {
  @ViewChild('otpdialog') otpdialog!: TemplateRef<any>;
  form!: FormGroup;
  LosUnique_Id: any = {};
  userObj: any;
  otpDialogRef: any;
  otpverify: boolean = false


  constructor(private dialog: MatDialog, private toastr: ToastrService,
    private router: Router, private _crudService: CrudService, private fb: FormBuilder) {
    this.form = this.fb.group({
      Nominee: ['', Validators.required],
      Select: [''],
      NomineeName: [''],
      Relationship: [''],
      DateofBirth: [''],
      NomineeAge: [''],
      NomineeGuardianName: [''],
      SumAssured: [''],
      NomineeInsurance: [''],
      TotalInsuranceAmount: [''],
    })
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

  otppopup() {

    Swal.fire({
      width: '300px',
      imageUrl: '../../assets/images/tick.png',
      imageHeight: 80,
      text: 'OTP Sent Successfully',
      showCancelButton: false,
      cancelButtonText: 'No',
      confirmButtonText: 'Yes',
      customClass: {
        confirmButton: "filledBtn",
        cancelButton: 'strokedBtn'
      }

    }).then((result) => {
      if (result.isConfirmed) {
        this.otppopupshow()
        //  this.route.navigateByUrl('/newapplicationform')
        //    this.unlinkconfirm()
      }
      else {
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
      "InsuranceDetailsSubmitInfo": [{}]
    }
    obj.InsuranceDetailsSubmitInfo = [formData.value]

    this._crudService.InsuranceSubmit(obj).subscribe({
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

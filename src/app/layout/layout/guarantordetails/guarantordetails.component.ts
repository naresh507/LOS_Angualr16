import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/shared/services/crud.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-guarantordetails',
  templateUrl: './guarantordetails.component.html',
  styleUrls: ['./guarantordetails.component.scss']
})
export class GuarantordetailsComponent implements OnInit {
  @ViewChild('otpdialog') otpdialog!: TemplateRef<any>;
  form!:FormGroup;
  userObj: any;
  LosUnique_Id: any = {};
  otpDialogRef:any;
otpverify:boolean=false;

@Output() guarantor = new EventEmitter()


  constructor(private toastr: ToastrService, private dialog:MatDialog, private router:Router, private _crudService:CrudService,private fb: FormBuilder )
  {
    this.form=this.fb.group({
      MemberName:['', Validators.required],
      Select:[''],
      GuarantorName:[''],
      DateofBirth:[''],
      GuarantorAge:[''],
      Gender:[''],
      MaritalStatus:[''],
      Spouse:[''],
      Father:[''],
      MobileNumber:[''],
      PrimaryKYC:[''],
      KYCNo:[''],
      GuarantorOccupation:[''],
      PresentAddress:[''],
      //UserID:['']
    })
  }
  otppopupshow()
  {
this.otpDialogRef= this.dialog.open(this.otpdialog,{
  width:'400px'

})
  }
  close()
{
  this.otpDialogRef.close();
}

submitclose()
{
  this.otpverify=true;
  this.close();
}

  otppopup()
  {
    
      Swal.fire({
        width:'300px',
      imageUrl: '../../assets/images/tick.png',
      imageHeight: 80,
      text: 'OTP Sent Successfully',  
     showCancelButton:false,
     cancelButtonText:'No',
      confirmButtonText:'Yes',
      customClass: {
        confirmButton: "filledBtn",
        cancelButton:'strokedBtn'
      }
  
    }).then((result) => {
      if(result.isConfirmed)
      {
      this.otppopupshow()
      //  this.route.navigateByUrl('/newapplicationform')
    //    this.unlinkconfirm()
      }
      else
      {
        console.log('close')
      }
    })
    
    
    
  }

  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.LosUnique_Id = JSON.parse(localStorage.getItem('aadharObj') || '{}');
   
  }
  

  next(formData: any) {
      console.log(formData.value)
      formData.value['UserID'] = this.userObj.UserID;
      formData.value['LosUnique_Id'] = this.LosUnique_Id;
    console.log(formData.value) 
      let obj={
        "GuarantorsDetailsData":[{}]
       }
    
    obj.GuarantorsDetailsData=[formData.value]
    
      this._crudService.GuarantorsSubmit(obj).subscribe({
        next: (value: any) => {
       console.log(value)
       if(value.status==true || value.status=='True')
       {
        
      
        this.toastr.success('Member Data Added Successfully');
        //this.dialogRef.close();
         
       }
       this.guarantor.emit();
        },
        
            error: (err: HttpErrorResponse) => {
              console.log(err)
            }
       }) 
  
  }
  

}


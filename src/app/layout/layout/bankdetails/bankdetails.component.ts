import { HttpErrorResponse } from '@angular/common/http';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
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
  userObj: any;
//tpDialogRef:any;
otpDialogRef:any;
otpverify:boolean=false
bankstatus:boolean=false;

  constructor(private dialog:MatDialog,  private route: Router,
    private fb: FormBuilder,
   private _crudService:CrudService)
  {
    this.form = this.fb.group({
    
      IFSCCode: ['', Validators.required]
     
    });
  }

  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
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





  bankcheck()
  {
      Swal.fire({
        width:'300px',
      imageUrl: '../../assets/images/tick.png',
      imageHeight: 80,
      text: 'Bank Check Successfully',  
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
   this.bankstatus=true;
      }
      else
      {
        console.log('close')
      }
    }) 
  }

  
  validateForm(formData: any){

    console.log(formData.value)
 let obj={
  "UserID": "",
  "IFSCCode": "",
}
console.log(this.userObj.UserID)
obj.UserID=this.userObj.UserID;
obj.IFSCCode=formData.value.IFSCCode
this.search(obj)
}


  search(obj:any){


    this._crudService.BankIFSCCodeSubmit(obj).subscribe({
      next: (value: any) => {
     console.log(value)
     this.searchbankDetails=value.BankIFSCCodeDetils[0];
     if(value.status==true || value.status=='True')
     {
      this.route.navigateByUrl('/gstdetails')
     }
      },
      
          error: (err: HttpErrorResponse) => {
            console.log(err)
          }
     });


  }
  
gotopage()
{
  this.route.navigateByUrl('/gstdetails')
}
}


import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/services/crud.service';
import Swal from 'sweetalert2';
//import { CashflowformsComponent } from '../cashflowforms/cashflowforms.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.scss']
})
export class CashFlowComponent {
  @ViewChild('reasondialog') reasondialog!: TemplateRef<any>;
  @ViewChild('enlargedialog') enlargedialog!: TemplateRef<any>;

  
  @ViewChild('BMexpensesButton')
  BMexpensesButton!: ElementRef;
  
  @ViewChild('BMLiabilityButton')
  BMLiabilityButton!: ElementRef;

  @ViewChild('BMLoanEligibilityButton')
  BMLoanEligibilityButton!: ElementRef;

  form!: FormGroup
  hide:boolean=false;
  userObj: any;
  addmember: boolean = false;
  addmember1: boolean = false;
  dialogRef: any;
  enlargeDialogRef: any;

  basicDetails: boolean = true;
  mainbasicDetails: boolean = true
  memberDetails: boolean = false;
  householdDetails: boolean = false;

  hhmonthly: boolean = true;
  hhexpense: boolean = false;
  hhliabilty: boolean = false;
  hhLoan: boolean = false;



  constructor(private route: Router,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private _crudService: CrudService) {

  }

  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
  }
  enlarge() {
    this.enlargeDialogRef = this.dialog.open(this.enlargedialog, {
      width: '600px'

    })
  }

  addnewcenter() {
    this.dialogRef = this.dialog.open(this.reasondialog, {
      width: '400px'

    });

    this.dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');

    });
  }


  kycProceed() {

    Swal.fire({
      width: '350px',
      imageUrl: '../../assets/images/earn-member.png',
      imageHeight: 80,
      text: 'Proceed with Single Earning Member?',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Yes',
      customClass: {
        confirmButton: "filledBtn",
        cancelButton: 'strokedBtn'
      }

    }).then((result) => {
      if (result.isConfirmed) {
        this.basicDetails = false
        // this.reason()
        //  this.route.navigateByUrl('/newapplicationform')
        //    this.unlinkconfirm()
      }
      else {
        console.log('close')
      }
    })

  }
  onNoClick() {
    this.sucesscenter();
    this.dialogRef.close();
  }
  close() {
    this.enlargeDialogRef.close();
  }




  sucesscenter() {

    Swal.fire({
      width: '350px',
      imageUrl: '../../assets/images/tick.png',
      imageHeight: 80,
      text: 'Darkrang C2 Center created successfully!',
      showCancelButton: false,

      confirmButtonText: 'Okay',
      customClass: {
        confirmButton: "strokedBtn",

      }

    }).then((result) => {
      if (result.isConfirmed) {


      }
      else {
        console.log('close')
      }
    })

  }

  clickDetails(element: any) {
    if (element == 'a') {
      this.hhmonthly = true;
      this.hhexpense = false;
      this.hhliabilty = false;
      this.hhLoan = false
    }
    if (element == 'b') {
      this.hhmonthly = false;
      this.hhexpense = true;
      this.hhliabilty = false;
      this.hhLoan = false
    }
    if (element == 'c') {
      this.hhmonthly = false;
      this.hhexpense = false;
      this.hhliabilty = true;
      this.hhLoan = false
    }
    if (element == 'd') {
      this.hhmonthly = false;
      this.hhexpense = false;
      this.hhliabilty = false;
      this.hhLoan = true
    }
  }
  BMhhexpencesSave() {
  
    const earnbutton: any = this.BMLiabilityButton.nativeElement;
    
    earnbutton.click();
    console.log('save data')
    // // this.clickDetails('c')
    // this.hhmonthly = false;   
    // this.hhexpense = false;
    // this.hhliabilty = true;
    // this.hhLoan = false;
  }
  
  BMhhliabiltySave(){
    const BMhhliabilt: any = this.BMLoanEligibilityButton.nativeElement;
    
    BMhhliabilt.click();
    console.log('save data')
  }

  save(formData: any) {
    formData.value['UserId'] = this.userObj.UserID;
  }
  public savedData:any=[]
  applicantsaveCashFlowData(data: any){
  this.savedData.push(data)
  }

  addmoresaveCashFlowData(data: any){
    this.savedData.push(data)
  }

  earningaddmoresaveCashFlowData(data: any){
    this.savedData.push(data)
  }
  saveCashFlowData(data: any) {
    let obj={
      MemberData: this.savedData
     }
 
    console.log( this.savedData)
    this._crudService.HHMothlyIncome(obj).subscribe({
      next: (value: any) => {
     console.log(value)
     if(value.status==true || value.status=='True')
     {
      
    
   //   this.toastr.success('Member Data Added Successfully');
      this.dialogRef.close();
       
     }
      },
      
          error: (err: HttpErrorResponse) => {
            console.log(err)
          }
     })
this.hhmonthly = false;
      this.hhexpense = true;
      this.hhliabilty = false;
      this.hhLoan = false
    console.log('Received cash flow data:', data);

  }
}

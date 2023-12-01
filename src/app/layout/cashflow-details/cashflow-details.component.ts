
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/services/crud.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cashflow-details',
  templateUrl: './cashflow-details.component.html',
  styleUrls: ['./cashflow-details.component.scss']
})
export class CashflowDetailsComponent implements OnInit {
  @ViewChild('reasondialog') reasondialog!: TemplateRef<any>;
  @ViewChild('enlargedialog') enlargedialog!: TemplateRef<any>;
  form!: FormGroup

  userObj: any;
  addmember: boolean = false;
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
  hhexpencesSave() {
    console.log('save data')
    this.clickDetails('c')
  }

  save(formData: any) {
    formData.value['UserId'] = this.userObj.UserID;
  }


  saveCashFlowData(data: any) {
this.hhmonthly = false;
      this.hhexpense = false;
      this.hhliabilty = true;
      this.hhLoan = false
    console.log('Received cash flow data:', data);

  }

}

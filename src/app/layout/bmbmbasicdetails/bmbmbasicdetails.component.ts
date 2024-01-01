import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from 'src/app/shared/services/crud.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-bmbmbasicdetails',
  templateUrl: './bmbmbasicdetails.component.html',
  styleUrls: ['./bmbmbasicdetails.component.scss']
})
export class BMBmbasicdetailsComponent {
  @ViewChild('reasondialog') reasondialog!: TemplateRef<any>;
  @ViewChild('enlargedialog') enlargedialog!: TemplateRef<any>;
  LosUnique_Id: string | undefined;
  res:any ='';
  userObj: any;
  // LosUnique_Id: any = {};
  LoanPurposeInfo:any;
  isImagesEnabled:boolean= false;
  voterid_Frontpath: any='';
  MemberPhoto: any='';
  voterid_Backpath:any ='';
  dialogRef: any;
  enlargeDialogRef: any;
  basicDetails: boolean = true;
  mainbasicDetails: boolean = true
  memberDetails: boolean = false;
  householdDetails: boolean = false;
  // userObj: any;
  response:any;
  imageresponse:any;
  form!: FormGroup;
  form1!: FormGroup;
  form2!: FormGroup;
  MasterPinCodeDetails: any;
  mastervillageDetails: any;

  CenterSerchDetails:any;


  @ViewChild('BMearningButton')
  BMearningButton!: ElementRef;
  
  @ViewChild('BMhouseholdButton')
  BMhouseholdButton!: ElementRef;



  constructor(private dialog: MatDialog, private _crudService: CrudService,
    private fb: FormBuilder, private router:Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      pan: [''],
      loanpurpose: [''],
      amount: [''],

    });


    this.form1 = this.fb.group({
      village: ['', Validators.required],
      pincode: ['', Validators.required],
      center: ['']
    });

    this.form2 = this.fb.group({
      day: ['', Validators.required],
      week: ['', Validators.required],

    });

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.LosUnique_Id = params['LosUnique_Id'];
      this._crudService.setAAdharObj(this.LosUnique_Id);

    });
    
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    //this.LosUnique_Id = JSON.parse(localStorage.getItem('aadharObj') || '{}');
    // this.getimageBasicdetails();
    this.getBasicdetails();
    this.getMasterData();
  }

  toggleImagesSection() {
    this.isImagesEnabled = !this.isImagesEnabled;
  }
  enlarge() {
    this.enlargeDialogRef = this.dialog.open(this.enlargedialog, {
      width: '600px'
    })
    this.MemberPhoto = this.imageresponse.MemberPhoto;
    this.voterid_Frontpath = this.imageresponse.voterid_Frontpath;
    this.voterid_Backpath = this.imageresponse.voterid_Backpath;
  }


  addnewcenter() {
    this.dialogRef = this.dialog.open(this.reasondialog, {
      width: '400px'

    });

    this.dialogRef.afterClosed().subscribe((result: any) => {


    });
  }


  showmemberpopup() {

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

      }
      else {
        
        console.log('close')
      }
    })

  }
  cancelNewCenter() {

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
      text: 'Center created successfully!',
      showCancelButton: false,

      confirmButtonText: 'Okay',
      customClass: {
        confirmButton: "strokedBtn",

      }

    }).then((result) => {
      if (result.isConfirmed) {
        this.cancelNewCenter()

      }
      else {
        console.log('close')
      }
    })

  }

  clickDetails(element: any) {
    if (element == 'a') {
      this.mainbasicDetails = true;
      this.memberDetails = false;
      this.householdDetails = false;
    }
    if (element == 'b') {
      this.mainbasicDetails = false;
      this.memberDetails = true;
      this.householdDetails = false;
    }
    if (element == 'c') {
      this.mainbasicDetails = false;
      this.memberDetails = false;
      this.householdDetails = true;
    }
  }




  basicDetailsbrrower() {
    this.mainbasicDetails = false;
    this.memberDetails = true;
    this.householdDetails = false;

  }






  searchcode() {
   
      let obj = {
      
        "UserID": this.userObj.UserID,
        "pincode":  this.form1.get('pincode')?.value

      }
      this._crudService.masterPinCode(obj).subscribe({
        next: (value: any) => {
         
          this.res = value.message;
          if(value.status == true)
          {
            this.MasterPinCodeDetails = value.MasterPinCodeDetails;
          }
          else{
            Swal.fire({
              imageUrl: '../../assets/images/warining.svg',
              imageHeight: 80,
              text: this.res,
            });
          }
        
        },

        error: (err: HttpErrorResponse) => {

        }
      })

    // }
  }


  CenterDataSerch(){
  
    
        let obj = {
         
          "UserID": this.userObj.UserID,
          "village":  this.form1.get('village')?.value,
          "pincode":  this.form1.get('pincode')?.value,
          // "CenterName":'',
  
        }
        this._crudService.CenterDataSerch(obj).subscribe({
          next: (value: any) => {
            
            this.res = value.message;
            
            if(value.status == true)
            {
              this.CenterSerchDetails = value.CenterSerchDetails;
            }
            else{
              Swal.fire({
                imageUrl: '../../assets/images/warining.svg',
                imageHeight: 80,
                text: this.res,
              });
            }
          
          },
  
          error: (err: HttpErrorResponse) => {
       
          }
        })
  
      // }


  }


  centerdatasubmit() {

    let obj = {
      // "UserID": this.userObj.UserID,
      // "pincode":  this.form.get('pincode')?.value
      "CenterCreateSubmitDetails": [
        {
          "PinCode": this.form1.get('pincode')?.value,
          "Village": this.form1.get('village')?.value,
          "CenterName":this.form1.get('center')?.value,
          "UserID":this.userObj.UserID,
        }
      ]

    }

    this._crudService.centerdatasubmit(obj).subscribe({
      next: (value: any) => {

        this.mainbasicDetails = false;
        this.memberDetails = false;
        this.householdDetails = true;

      },

      error: (err: HttpErrorResponse) => {
      
      }
    })
  }

  addnewcenterfn() {

    let obj = {
      "UserID": this.userObj.UserID,
      "pincode":  this.form.get('pincode')?.value,
      "CenterCreateData": [
        {
          "MettingDay": this.form2.get('day')?.value,
          "MettingWeek": this.form2.get('week')?.value,
          "Village": this.form1.get('village')?.value,
          // "UserID": this.userObj.UserID
        }
      ]

    }



    this._crudService.newcenter(obj).subscribe({
      next: (value: any) => {
    
        if (value.status == true || value.status == 'True') {
          this.sucesscenter();
        }
      },

      error: (err: HttpErrorResponse) => {

      }
    })

  }

  getBasicdetails() {
    let obj = {
      "UserId": this.userObj.UserID,
      "LosUnique": this.LosUnique_Id,
    };
  
    this._crudService.BMProfileREVIEW(obj).subscribe(
      (responseData) => {
       
        this.response = responseData.BMProfileREVIEWDataInfo[0];

      });
  }

 

  getMasterData()
{
  let obj={
  
   "UserId": this.userObj.UserID,
   "LosUnique_Id": this.LosUnique_Id,
   
 }
  this._crudService.getMasterDetails(obj).subscribe({
    next: (value: any) => {

   if(value.status==true)
   {
   

     this.LoanPurposeInfo=value.LoanPurposeInfo;
 

     
   }
    },
    
        error: (err: HttpErrorResponse) => {

        }
   })
}

addearningMember(){

  const refIds = this.LosUnique_Id

  
  
  this._crudService.seRefId(refIds)

      this.router.navigateByUrl('/addnewClient')
    }


clicktonext(){
  const earnbutton: any = this.BMhouseholdButton.nativeElement;
  earnbutton.click();

  
}

}
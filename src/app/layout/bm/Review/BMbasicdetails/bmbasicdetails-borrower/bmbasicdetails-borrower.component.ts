import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from 'src/app/shared/services/crud.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bmbasicdetails-borrower',
  templateUrl: './bmbasicdetails-borrower.component.html',
  styleUrls: ['./bmbasicdetails-borrower.component.scss']
})
export class BmbasicdetailsBorrowerComponent {
  @ViewChild('reasondialog') reasondialog!: TemplateRef<any>;
  @ViewChild('enlargedialog') enlargedialog!: TemplateRef<any>;
  res:any =''
  LosUnique_Id: any = {};
  LoanPurposeInfo:any;
  voterid_Frontpath: any='';
  MemberPhoto: any='';
  voterid_Backpath:any ='';
  dialogRef: any;
  enlargeDialogRef: any;
  basicDetails: boolean = true;
  mainbasicDetails: boolean = true
  memberDetails: boolean = false;
  householdDetails: boolean = false;
  userObj: any;
  response:any;
  imageresponse:any;
  form!: FormGroup;
  form1!: FormGroup;
  form2!: FormGroup;
  MasterPinCodeDetails: any;
  mastervillageDetails: any;

  CenterSerchDetails:any;
  constructor(private dialog: MatDialog, private _crudService: CrudService,
    private fb: FormBuilder, private router:Router) {
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
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.LosUnique_Id = JSON.parse(localStorage.getItem('aadharObj') || '{}');
    this.getimageBasicdetails();
    this.getBasicdetails();
    this.getMasterData();
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
      console.log('The dialog was closed');

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


    let obj = {
      "BasicDetailsBrrowerDetails": [
        {
          "PanId": this.form.get('pan')?.value,
          "LoanPurpose": this.form.get('loanpurpose')?.value,
          "AppliedAmount": this.form.get('amount')?.value,
          "UserId": this.userObj.UserID,
          "LosUnique_Id": this.LosUnique_Id,
        }
      ]


      // "UserId": this.userObj.UserID,

    }
    this._crudService.basicDetailsBrrower(obj).subscribe({
      next: (value: any) => {
        console.log(value)
        if (value.status == true || value.status == 'True') {

          this.showmemberpopup();


        } else {

        }
      },

      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })


  }






  searchcode() {
    console.log(this.form1.get('pincode')?.value)
    // if (this.form1.get('pincode')?.value == '') {

    // }
    // else {
      let obj = {
        //  "UserID": this.userObj.UserID,
        // "pincode":  this.form1.get('pincode')?.value
        "UserID": this.userObj.UserID,
        "pincode":  this.form1.get('pincode')?.value

      }
      this._crudService.masterPinCode(obj).subscribe({
        next: (value: any) => {
          console.log(value)
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
          console.log(err)
        }
      })

    // }
  }


  CenterDataSerch(){
      console.log(this.form1.get('village')?.value)
      // if (this.form1.get('village')?.value == '') {
  
      // }
      // else {
        let obj = {
         
          "UserID": this.userObj.UserID,
          "village":  this.form1.get('village')?.value,
          "pincode":  this.form1.get('pincode')?.value,
          // "CenterName":'',
  
        }
        this._crudService.CenterDataSerch(obj).subscribe({
          next: (value: any) => {
            console.log(value)
            this.res = value.message;
            console.log(this.res);
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
          
            console.log('center : ', this.CenterSerchDetails)
          },
  
          error: (err: HttpErrorResponse) => {
            console.log(err)
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
        console.log(value)
        this.mainbasicDetails = false;
        this.memberDetails = false;
        this.householdDetails = true;

      },

      error: (err: HttpErrorResponse) => {
        console.log(err)
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
        console.log(value)
        if (value.status == true || value.status == 'True') {
          this.sucesscenter();
        }
      },

      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })

  }

  getBasicdetails() {
    let obj = {
      "UserId": this.userObj.UserID,
      "LosUnique_Id": this.LosUnique_Id,
    };
  
    this._crudService.basicdetails(obj).subscribe(
      (responseData) => {
        let response = responseData && responseData.BasicBrowwerFetchDetails && responseData.BasicBrowwerFetchDetails[0];
        console.log(response);
       
        this.response = {
          Name: response.Name || '', 
          Spouse: response.Spouse || '',
          Father: response.Father || '',
          Mother  : response.Mother || '',
          MoblieNumber: response.MoblieNumber || '',
          POIKYCTYPE: response.POIKYCTYPE || '',
          POIKYCID: response.POIKYCID || '',
          EarningMember: response.EarningMember || '',
        }
        console.log(response);
      });
  }

  getimageBasicdetails() {
    let obj = {
      "UserId": this.userObj.UserID,
      "LosUnique_Id": this.LosUnique_Id,
    };
  
    this._crudService.getimageBasicdetails(obj).subscribe(
      (responseimageData) => {
        let imageresponse = responseimageData && responseimageData.OKYCVoterPhotoVIEWDataInfo && responseimageData.OKYCVoterPhotoVIEWDataInfo[0];
        console.log(imageresponse);
       
        this.imageresponse = {
          voterid_Frontpath: imageresponse.voterid_Frontpath || '', 
          voterid_Backpath: imageresponse.voterid_Backpath || '',
         MemberPhoto: imageresponse.MemberPhoto || '',
          PresentAddress : imageresponse.PresentAddress || '',
          ApplicantName  : imageresponse.ApplicantName || '',
          LosUnique_Id: imageresponse.LosUnique_Id || '',
      
        }
        console.log(imageresponse);
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
   console.log(value)
   if(value.status==true)
   {
   

     this.LoanPurposeInfo=value.LoanPurposeInfo;
 

     
   }
    },
    
        error: (err: HttpErrorResponse) => {
          console.log(err)
        }
   })
}

addearningMember(){

  const refIds = this.LosUnique_Id

  console.log(refIds);
  
  this._crudService.seRefId(refIds)

      this.router.navigateByUrl('/addnewClient')
    }

}
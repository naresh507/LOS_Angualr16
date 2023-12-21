import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from 'src/app/shared/services/crud.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bmverifyclientdetails',
  templateUrl: './bmverifyclientdetails.component.html',
  styleUrls: ['./bmverifyclientdetails.component.scss']
})
export class BmverifyclientdetailsComponent {
  @ViewChild('reasondialog') reasondialog!: TemplateRef<any>;
  @ViewChild('enlargedialog') enlargedialog!: TemplateRef<any>;
  response:any;
  enlargeDialogRef: any;
  imageresponse:any;
  userObj: any;
  LosUnique_Id:any;
  voterid_Frontpath: any='';
  MemberPhoto: any='';
  voterid_Backpath:any ='';
  MasterPinCodeDetails: any;
  
  constructor(private dialog: MatDialog, private _crudService: CrudService,
    private fb: FormBuilder, private router:Router) {
    
  }


  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.LosUnique_Id = JSON.parse(localStorage.getItem('aadharObj') || '{}');
    this.getimageBasicdetails();
    // this.getBasicdetails();
    // this.getMasterData();
  }

  addnewcenter(){

  }

  centerdatasubmit(){

  }

  
  enlarge() {
    this.enlargeDialogRef = this.dialog.open(this.enlargedialog, {
      width: '600px'
    })
    this.MemberPhoto = this.imageresponse.MemberPhoto;
    this.voterid_Frontpath = this.imageresponse.voterid_Frontpath;
    this.voterid_Backpath = this.imageresponse.voterid_Backpath;
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
  close() {
    this.enlargeDialogRef.close();
  }

}

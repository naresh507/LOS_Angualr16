import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-idverification',
  templateUrl: './idverification.component.html',
  styleUrls: ['./idverification.component.scss']
})
export class IdverificationComponent implements OnInit{
  @ViewChild('enlargedialog') enlargedialog!: TemplateRef<any>;

  @ViewChild('VoterIdButton')
  VoterIdButton!: ElementRef;

  @ViewChild('AAdharOCRButton')
  AAdharOCRButton!: ElementRef;

  // @ViewChild('AAdharOTPButton')
  // AAdharOTPButton!: ElementRef;

  


  // currentImage: string = '';
  enlargeDialogRef: any;
  LosUnique_Id: any = {};
  ExsitingData:any;
  MemberPhoto:string='';
  voterid_Frontpath:string='';
  voterid_Backpath:string='';
  type: string = '';
  imageresponse:any = '';
  userObj:any;
  AAdharOTP:boolean=true;
  AAdharocr:boolean=false;
  VoterId: boolean = false;
  ClientPicture: boolean = true
  IDVerification: boolean = false;
  OKYCProfileReview: boolean = false;
  @ViewChild('reasondialog') reasondialog!: TemplateRef<any>;
  dialogRef: any;
  constructor(private dialog:MatDialog, private router:Router, private _crudService:CrudService)
  {

  }

  clickDetailstab(element: any) {
    if (element == 'a') {
      this.AAdharOTP = true;
      this.VoterId = false;
      this.AAdharocr = false;

    }
    if (element == 'b') {
      this.AAdharOTP = false;
      this.VoterId = false;
      this.AAdharocr = true;

    }

    if (element == 'c') {
      this.AAdharOTP = false;
      this.VoterId = true;
      this.AAdharocr = false;

    }
   
   
  }


  // VoterIdSave(){

  //     const VoterIdtailss: any = this.AAdharOTPButton.nativeElement;
  //     AAdharOTPButton.click();
  //     console.log('save data')


  // }
  AAdharOTPSave(){
    const VoterIdtailss: any = this.AAdharOCRButton.nativeElement;
    VoterIdtailss.click();
    console.log('save data')
  }

  AAdharOCRSave(){
    const VoterIdtails: any = this.VoterIdButton.nativeElement;
    VoterIdtails.click();
    console.log('save data')
  }



  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.LosUnique_Id = JSON.parse(localStorage.getItem('aadharObj') || '{}');
  
  }

}

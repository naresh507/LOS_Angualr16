import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
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

    }
    if (element == 'b') {
      this.AAdharOTP = false;
      this.VoterId = true;

    }
   
  }


  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.LosUnique_Id = JSON.parse(localStorage.getItem('aadharObj') || '{}');
  
  }

}

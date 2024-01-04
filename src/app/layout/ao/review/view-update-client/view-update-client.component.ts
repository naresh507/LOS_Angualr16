import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from 'src/app/shared/services/crud.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { filter } from 'rxjs';

@Component({
  selector: 'app-view-update-client',
  templateUrl: './view-update-client.component.html',
  styleUrls: ['./view-update-client.component.scss']
})
export class ViewUpdateClientComponent {
  @ViewChild('reasondialog') reasondialog!: TemplateRef<any>;
  @ViewChild('enlargedialog') enlargedialog!: TemplateRef<any>;
  basicdetails: any; 
  response:any;
  enlargeDialogRef: any;
  imageresponse:any;
  userObj: any;
  type: string = '';
  Village:any;
  mvid:any='';
  FCONAME:any='';
  centerName:any='';
  Centerid:any = '';
  fco:any;
  res:any =''
  form1!: FormGroup;
  LosUnique_Id:any;
  voterid_Frontpath: any='';
  MemberPhoto: any='';
  voterid_Backpath:any ='';
  
  constructor(private dialog: MatDialog, private _crudService: CrudService,
    private fb: FormBuilder, private router:Router) {
      this.form1 = this.fb.group({
        MVI_id: ['', Validators.required],
        Centerid: ['', Validators.required],
        FCOName: ['', Validators.required],
        center: ['']
      });
    
  }

  
 


  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.LosUnique_Id = JSON.parse(localStorage.getItem('aadharObj') || '{}');
    // this.getimageBasicdetails();
    // this.getBasicdetails();
    // this.getMasterData();
  }

  addnewcenter(){
    this.form1.get('MVI_id')?.setValue('');
    this.form1.get('Centerid')?.setValue('');
    this.form1.get('FCOName')?.setValue('');

  }

  centerdatasubmit(){

    let obj1 = {
      "UserID": this.userObj.UserID,
      // "VillageName": this.form1.get('MVI_id')?.value,
      "VillageName": this.mvid,
      // "CenterName": this.form1.get('Centerid')?.value,
      "CenterName":this.centerName,
      // "FCOName": this.form1.get('FCOName')?.value,
      "FCOName": this.FCONAME,
    };


    console.log(obj1);
    this._crudService.VerifyClientDetailsBM(obj1).subscribe({
      next: (value: any) => {
        console.log(value)
        this.basicdetails= value?.FCODetailsDataInfo;
        console.log(this.basicdetails)
      }
    });
  }

  
  enlarge() {
    this.enlargeDialogRef = this.dialog.open(this.enlargedialog, {
      width: '600px'
    })
    this.MemberPhoto = this.imageresponse.MemberPhoto;
    this.voterid_Frontpath = this.imageresponse.voterid_Frontpath;
    this.voterid_Backpath = this.imageresponse.voterid_Backpath;
  }

 
  close() {
    this.enlargeDialogRef.close();
  }

  searchVillage(type: string) {
    this.type = type;
    
    console.log(this.form1.get('MVI_id')?.value);
      let obj = {
        "UserID": this.userObj.UserID,
        "MVI_id": this.mvid,
        "Centerid": this.centerName,
        // "Centerid": "30",
        "Flag": this.type
      };
      this._crudService.VerifyClientListBM(obj).subscribe({
        next: (value: any) => {
          console.log(value)
          this.res = value.message;
     
          if(value.status == true)
          {
            if(type=='V'){
             
              this.Village = value.VerifyClientListBMInfo;

              
             
       

            }else if(type=='C'){
           
             
              this.Centerid = value.VerifyClientListBMInfo;
               console.log('nareshLog:',this.Centerid);
            }

            else if(type=='F'){
            
              this.fco = value.VerifyClientListBMInfo;
            }
           
            // this.CenterDataInfo = value.VerifyClientListBMInfo;

            // console.log(this.CenterDataInfo);
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
  navigatetodetails(LosUnique_Id:string){
  
    // this.router.navigateByUrl('/Bmbasicdetails/' + LosUnique_Id);

    this.router.navigateByUrl('/Bmbasicdetails/' + LosUnique_Id)
  }

  onOptioncenterSelected(event:any){
    console.log(event.option.value);
    console.log(this.Centerid);

    let centerdata :any=this.Centerid.filter((item:any)=>{
      return item.CenterName.includes(event.option.value);
    })
    this.centerName = centerdata[0].ID;
    console.log(this.centerName);
  }

  onOptionSelected(event: any) {
    console.log(event.option.value);
    console.log(this.Village);
    
    let filteredData: any = this.Village.filter((item: any) => {
      return item.VillageName.includes(event.option.value);
    });
    this.mvid = filteredData[0].ID;
    console.log(this.mvid);
  }
  
  onOptionFCOSelected(event: any) {
    console.log(event.option.value);
    console.log(this.fco);
    
    let filteredData: any = this.fco.filter((item: any) => {
      return item.EMPLOYEENAME.includes(event.option.value);
    });
    this.FCONAME = filteredData[0].ID;
    console.log(this.FCONAME);
  }

}

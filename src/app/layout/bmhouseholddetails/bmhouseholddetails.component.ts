import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-bmhouseholddetails',
  templateUrl: './bmhouseholddetails.component.html',
  styleUrls: ['./bmhouseholddetails.component.scss']
})
export class BMhouseholddetailsComponent {
  addmember: boolean = false;
  public savedData: any = [];
  response: any = '';
  responses:any='';
  hide: boolean = false;
  LosUnique_Id: any = {};
  userObj: any;
  dialogRef: any;
  LivestockInfo: any;
  VehicleInfo: any;
  CasteCategoryDetails: any;
  FamilyTypeDetails: any;
  LOCALITYDetails: any;
  OwnershipDetails: any;
  ProdctDetails: any;
  PurposeDetails: any;
  ReligionCommunityDetails: any;
  TypeofRoofDetails: any;
  form!: FormGroup;
  lpg: boolean = false;
  land: boolean = false;
  ele: boolean = false;
  lsv: boolean = false;
  vev: boolean = false;
  vehicleList: boolean = false;
  constructor(private router: Router, private _crudService: CrudService, private fb: FormBuilder, private toastr: ToastrService,) {
    this.form = this.fb.group({

      // MemberName: ['', Validators.required],
      FamilyType: ['', Validators.required],

      NonEaringMembers: [''],
      TotalHouseholdFamilyMembers: [''],
      NoOfunmarriedchildren: [''],
      NoOfDependents: [''],



      TypeOfRoof: [''],
      TypeofOwnership: [''],
      Locality: [''],
      Community: [''],
      Category: [''],
      Electricty: [''],
      // CoustomerID: [''],
      Water: [''],
      Toilet: [''],
      Land: [''],
      LandUnit: [''],
      sewage: [''],
      LPG: [''],
      Furniture: [''],
      LPGConsumerNo: [''],
      Livestock: [''],
      TypeOfLivestock: [''],
      // Count: [''],
      vehicle: [''],
      SmartPhone: [''],
      ElectronicItems: ['']

    });

  }

  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.LosUnique_Id = JSON.parse(localStorage.getItem('aadharObj') || '{}');
    this.getMasterData();
   // this.getMasterDataotherdeatils();
  }

  earningaddmoresaveCashFlowData(data: any) {
    // this.savedData.push(data)
    this.savedData = data;
  }

  OtherDetailsHosehold(data: any) {
    // this.savedData.push(data)
    this.savedData = data;
  }

  saveCashFlowData(data: any) {


    console.log(this.savedData)
    this._crudService.BMHouseHoldDetailsSubmitData(this.savedData).subscribe({
      next: (value: any) => {
        this.hide = true;
        console.log(value)
        if (value.status == true || value.status == 'True') {


        }

      },

      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })

    console.log('Received cash flow data:', data);

  }



  save() {
    console.log(this.savedData)
    this._crudService.BMHouseHoldDetailsSubmitData(this.savedData).subscribe({
      next: (value: any) => {

        console.log(value)
        if (value.status == true || value.status == 'True') {
          this.router.navigateByUrl('bmcashflow');

        }

      },

      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })

    // this.router.navigateByUrl('bmcashflow')
  }



  // getMasterDataotherdeatils() {
  //   let obj = {
  //     Flag: 'O',
  //     UserId: this.userObj.UserID,
  //     LosUnique_Id: this.LosUnique_Id,

  //   }
  //   this._crudService.BMHouseHoldFetchData(obj).subscribe({
  //     next: (value: any) => {
  //       console.log(value)
  //       this.response = value.BMHouseHoldDetailsFetchDataInfo[0];
  //       this.form.patchValue(this.response);
  //       console.log(this.response);
  //       if (value.status == true) {

  //       }
  //     },

  //     error: (err: HttpErrorResponse) => {
  //       console.log(err)
  //     }
  //   })
  // }




  getMasterData() {
    let obj = {
      Flag: 'V',
      UserId: this.userObj.UserID,
      LosUnique_Id: this.LosUnique_Id,

    }
    this._crudService.BMHouseHoldFetchData(obj).subscribe({
      next: (value: any) => {
        console.log(value)
        this.response = value?.BMHouseHoldDetailsFetchDataInfo[0];
        this.form.patchValue(this.responses);
        console.log(this.responses);
        if (value.status == true) {

        }
      },

      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })
  }









  eleData(e: any) {

    this.ele = e.value == 'yes' ? true : false

  }
  landData(e: any) {

    this.land = e.value == 'yes' ? true : false
  }
  lpgData(e: any) {

    this.lpg = e.value == 'yes' ? true : false
  }
  livestockData(e: any) {
    this.lsv = e.value == 'yes' ? true : false
  }
  vehicleListData(e: any) {
    this.vehicleList = e.value == 'yes' ? true : false
  }



}

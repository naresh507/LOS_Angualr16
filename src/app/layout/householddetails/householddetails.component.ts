import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-householddetails',
  templateUrl: './householddetails.component.html',
  styleUrls: ['./householddetails.component.scss']
})
export class HouseholddetailsComponent implements OnInit {
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

      MemberName: ['', Validators.required],
      FamilyType:[''],
     
   
      TypeOfRoof:[''],
      TypeofOwnership:[''],
      Locality:[''],
      Community:[''],
      Category:[''],
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
    this.getMasterData();
  }

  getMasterData() {
    let obj = {

      "UserId": this.userObj.UserID,

    }
    this._crudService.getMasterDetails(obj).subscribe({
      next: (value: any) => {
        console.log(value)
        if (value.status == true) {


          this.LivestockInfo = value.LivestockInfo;
          this.VehicleInfo = value.VehicleInfo;


          this.FamilyTypeDetails = value.FamilyTypeDetails;
          this.TypeofRoofDetails = value.TypeofRoofDetails;
          this.OwnershipDetails = value.OwnershipDetails;
          this.LOCALITYDetails = value.LOCALITYDetails;
          this.CasteCategoryDetails = value.CasteCategoryDetails;
          this.ReligionCommunityDetails = value.ReligionCommunityDetails


        }
      },

      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })
  }

  proceed() {
    this.router.navigateByUrl('/cashflow')
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

  submit(formData: any) {

    formData.value['UserId']=this.userObj.UserID;

  let obj={
    "HouseHoldDetailsSubmitDataInfo":[{}]
   }

  obj.HouseHoldDetailsSubmitDataInfo=[formData.value]
 
    console.log(obj.HouseHoldDetailsSubmitDataInfo);

    // obj.HouseHoldDataSubmit = [formData.value]

    // this._crudService.saveHouseHoldDetail(obj).subscribe({
      this._crudService.saveHouseHoldDetailsubmit(obj).subscribe({
      next: (value: any) => {
        console.log(value)
        if (value.status == true || value.status == 'True') {

          this.router.navigateByUrl('cashflow')
        }
      },

      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })


  }

}

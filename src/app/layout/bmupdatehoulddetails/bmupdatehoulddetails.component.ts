import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-bmupdatehoulddetails',
  templateUrl: './bmupdatehoulddetails.component.html',
  styleUrls: ['./bmupdatehoulddetails.component.scss']
})
export class BMupdatehoulddetailsComponent {
  @Input() earningMemberData: any;
  @Output() cashFlowData: EventEmitter<any> = new EventEmitter<any>();
  LosUnique_Id: any = {};
  userObj: any;
  dialogRef: any;
  LivestockInfo: any;
  VehicleInfo: any;
  CasteCategoryDetails: any;
  ElectronicitemsInfo:any;
  FamilyTypeDetails: any;
  WaterinfoInfo:any;
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

      FamilyType:['', Validators.required],
     
      NonEaringMembers:[''],
      TotalHouseholdFamilyMembers:[''],
      NoOfunmarriedchildren:[''],
      NoOfDependents:[''],
      Flag: "S",
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
      ElectronicItems: [''],
      UserID: "",
      LosUnique_Id:"",
      
    });

  }

  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.LosUnique_Id = JSON.parse(localStorage.getItem('aadharObj') || '{}');
     this.getMasterData();
  }

  getMasterData() {
    let obj = {

      "UserId": this.userObj.UserID,
      LosUnique_Id: this.LosUnique_Id,

    }
    this._crudService.getMasterDetails(obj).subscribe({
      next: (value: any) => {
        console.log(value)
        if (value.status == true) {


          this.LivestockInfo = value?.LivestockInfo;
          this.VehicleInfo = value?.VehicleInfo;
          this.ElectronicitemsInfo = value?.ElectronicitemsInfo;
          this.WaterinfoInfo = value?.WaterinfoInfo;
          this.FamilyTypeDetails = value?.FamilyTypeDetails;
          this.TypeofRoofDetails = value?.TypeofRoofDetails;
          this.OwnershipDetails = value?.OwnershipDetails;
          this.LOCALITYDetails = value?.LOCALITYDetails;
          this.CasteCategoryDetails = value?.CasteCategoryDetails;
          this.ReligionCommunityDetails = value?.ReligionCommunityDetails


        }
      },

      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })
  }

  // proceed() {
  //   this.router.navigateByUrl('/cashflow')
  // }

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

  submit() {
    // if (this.form.valid) {
        const formData = this.form.value; 
      
        this.cashFlowData.emit(formData);
    }
 
}

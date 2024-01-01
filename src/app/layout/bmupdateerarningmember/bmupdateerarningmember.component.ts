import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-bmupdateerarningmember',
  templateUrl: './bmupdateerarningmember.component.html',
  styleUrls: ['./bmupdateerarningmember.component.scss']
})
export class BMupdateerarningmemberComponent {
  response:any='';
  hide:boolean=false;
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
      FamilyType:['', Validators.required],
     
      NonEaringMembers:[''],
      TotalHouseholdFamilyMembers:[''],
      NoOfunmarriedchildren:[''],
      NoOfDependents:[''],


      
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
    this.LosUnique_Id = JSON.parse(localStorage.getItem('aadharObj') || '{}');
    this.getMasterData();
  }
  getMasterData() {
    let obj = {
      Flag:'V',
      UserId: this.userObj.UserID,
      LosUnique_Id: this.LosUnique_Id,
      FamilyType:'',
      TypeOfRoof:'',
      TypeofOwnership:'',
      NoOfunmarriedchildren:'',
      TotalHouseholdFamilyMembers:'',
      NoOfDependents:'',
      Locality:'',
      Community:'',
      Category:'',
      NonEaringMembers:'',
      NonofnonEaringMembers:'',
    }
    this._crudService.BMHouseHoldDetailsSubmitionFetch(obj).subscribe({
      next: (value: any) => {
        console.log(value)
        this.response = value?.BMHouseHoldDetailsSubmitionFetchDataInfo[0];

         console.log(this.response);
        

        if (value.status == true) {
// this.response =value.HouseHoldDetailsSubmitionFetchDataInfo[0];

// console.log(this.response);

         


        }
      },

      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })
  }


}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
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
  @Input() earningMemberData: any;
  @Output() cashFlowData: EventEmitter<any> = new EventEmitter<any>();
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
      FamilyType:['', Validators.required],
      Flag: "S",
      NonEaringMembers:[''],
      TotalHouseholdFamilyMembers:[''],
      NoOfunmarriedchildren:[''],
      NoOfDependents:[''],
      TypeOfRoof:[''],
      TypeofOwnership:[''],
      Locality:[''],
      Community:[''],
      Category:[''],
      LosUnique_Id: "",
      UserID: "",

    });

  }

 ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.LosUnique_Id = JSON.parse(localStorage.getItem('aadharObj') || '{}');
    // this.getMasterData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['earningMemberData'] && changes['earningMemberData'].currentValue) {
      this.patchFormValues();
    }
  }

  patchFormValues(){
    if (this['earningMemberData']) {
      this.form.patchValue({
        LosUnique_Id: this.LosUnique_Id || "",

        UserID: this.userObj.UserID||"",

        FamilyType: this['earningMemberData'].FamilyTypeDetails?.[0]?.ID || '',
 
        NonEaringMembers: this['earningMemberData'].NonEaringMembers || '',
        TotalHouseholdFamilyMembers: this['earningMemberData'].TotalHouseholdFamilyMembers || '',
        TypeOfRoof: this['earningMemberData']?.TypeOfRoof || '' ,

        NoOfunmarriedchildren: this['earningMemberData']?.NoOfunmarriedchildren || '',
        NoOfDependents: this['earningMemberData'].NoOfDependents || '',
        Community: this['earningMemberData'].Community || '',
      });
    }
  }

  saveData() {
    // if (this.form.valid) {
        const formData = this.form.value; 
      
        this.cashFlowData.emit(formData);
    }
}

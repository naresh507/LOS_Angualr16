import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-householddetails',
  templateUrl: './householddetails.component.html',
  styleUrls: ['./householddetails.component.scss']
})  
export class HouseholddetailsComponent implements OnInit {
  userObj: any;
  LivestockInfo: any;
  VehicleInfo:any;
  CasteCategoryDetails:any;
  LOCALITYDetails:any;
  form!: FormGroup;
  lpg:boolean=false;
  land:boolean=false;
  ele:boolean=false;
    lsv:boolean=false;
    vev:boolean=false;
    vehicleList:boolean=false;
constructor(private router:Router, private _crudService:CrudService,private fb: FormBuilder  )
{ this.form = this.fb.group({
  Electricty:[''],
  CoustomerID: ['' ],
 Water:[''],
 Toilet:[''],  
 Land:[''],
 LandUnit: [''],
 sewage:[''],
LPG:[''],
LPGConsumerNo:[''],  
Livestock:[''],
  TypeOfLivestock:[''],
  Count:[''],
  vehicle:[''],
  TypeoOfVehicle:[''],
  SmartPhone:[''],
  ElectronicItems:[''],

  furnitureVal:[''],
  vehiclecount:[''],

 
});

}

ngOnInit(): void {
  this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
  this.getMasterData();
}

getMasterData()
{
  let obj={
  
   "UserId": this.userObj.UserID,
   
 }
  this._crudService.getMasterDetails(obj).subscribe({
    next: (value: any) => {
   console.log(value)
   if(value.status==true)
   {
   

    this.LivestockInfo=value.LivestockInfo;
    this.VehicleInfo=value.VehicleInfo;

     
   }
    },
    
        error: (err: HttpErrorResponse) => {
          console.log(err)
        }
   })
}

proceed()
{
  this.router.navigateByUrl('/cashflow')
}

eleData(e:any)
{

  this.ele=e.value=='yes' ? true : false
  
}
landData(e:any)
{

  this.land=e.value=='yes' ? true : false
}
lpgData(e:any)
{

  this.lpg=e.value=='yes' ? true : false
}
livestockData(e:any)
{
  this.lsv=e.value=='yes' ? true : false
}
vehicleListData(e:any)
{
  this.vehicleList=e.value=='yes' ? true : false
}

submit(formData: any) {
  console.log(formData.value)
formData.value['UserId']=this.userObj.UserID;
console.log(formData.value) 
  let obj={
    "HouseHoldDataSubmit":[{}]
   }

obj.HouseHoldDataSubmit=[formData.value]

  this._crudService.saveHouseHoldDetail(obj).subscribe({
    next: (value: any) => {
   console.log(value)
   if(value.status==true || value.status=='True')
   {
    
  this.router.navigateByUrl('cashflow')

     
   }
    },
    
        error: (err: HttpErrorResponse) => {
          console.log(err)
        }
   })

  
}


}

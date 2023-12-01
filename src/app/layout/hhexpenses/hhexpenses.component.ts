import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-hhexpenses',
  templateUrl: './hhexpenses.component.html',
  styleUrls: ['./hhexpenses.component.scss']
})
export class HhexpensesComponent {
  userObj: any;
  form!: FormGroup;
  irform!:FormGroup;
  
  regularexp:boolean=true;
  @Output() hhexpences = new EventEmitter();
  constructor(private router:Router, private _crudService:CrudService,private fb: FormBuilder  )
{ 
  this.form = this.fb.group({
  AccommodationRent:[''],
  FoodCookingfuel: ['' ],
  Cothes:[''],
  RegularEducationExpenses: ['' ],
  ElectricityphoneDataCable:[''],
  RegularMedicalCosts: ['' ],
  Transport:[''],
  EntertainmentSocialobligations: ['' ],
  Saving:[''],
  Other: ['' ],
  TotalIrregularExpenseMothly:[''],
  TotalIrregularExpenseAnnually: ['' ],
  UserID:[''],
 });

this.irform=this.fb.group({
  MedicalHeath:[''],
  HouseRenovation:[''],
  PurchaseOfHouseHoldGoods:[''],
  Functions:[''],
  Education:[''],
  Others:[''],
  TotalIrregularExpenseMothly:[''],
  TotalIrregularExpenseAnnually:[''],
})


}

ngOnInit(): void {
  this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
 
}

submit(formData: any) {
formData.value['UserId']=this.userObj.UserID;

  let obj={
    "RegularExpensesMothlyData":[{}]
   }

obj.RegularExpensesMothlyData=[formData.value]

this._crudService.submitRegularExpensesMothlySubmit(obj).subscribe({
  next: (value: any) => {
 console.log(value)
 if(value.status==true || value.status=='True')
 { 
  this.regularexp=false;


 }
  },
  
      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
 })
}



submitirregular(formData: any) {
  formData.value['UserId']=this.userObj.UserID;
  
    let obj={
      "IrRegularExpensesAnnuallyData":[{}]
     }
  
  obj.IrRegularExpensesAnnuallyData=[formData.value]
  
  this._crudService.submitIrRegularExpensesAnnuallySubmit(obj).subscribe({
    next: (value: any) => {
   console.log(value)
   if(value.status==true || value.status=='True')
   { 
    this.hhexpences.emit();
   }
    },
    
        error: (err: HttpErrorResponse) => {
          console.log(err)
        }
   })
  }
  popup()
  {}
}



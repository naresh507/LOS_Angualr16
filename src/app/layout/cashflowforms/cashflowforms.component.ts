import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-cashflowforms',
  templateUrl: './cashflowforms.component.html',
  styleUrls: ['./cashflowforms.component.scss']
})
export class CashflowformsComponent implements OnInit {
  form!: FormGroup;
  userObj: any;
  property: boolean = false;

  @Output() cashFlowData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private route: Router,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private _crudService: CrudService) {


    this.form = this.fb.group({
      Name: ['', Validators.required],
      Relationship: [''],
      TypeOfSource: [''],
      AvgDailyTranscation: [''],
      NoOfDaysInMonth: [''],
      MothlyGrossSale: [''],

      RawMaterialsConsume: [''],
      ReantForShop: [''],
      Labour: [''],
      Electricity: [''],
      Maintenace: [''],
      otherManufacturing: [''],
      AdminandOperatingExpenses: [''],
      TotalBusinessExpenses: [''],
      AvgDailyExpenlture: [''],

      AvgNetProfitDaily: [''], IncomeFrequency: [''],
      NetBussinessIncomeMothly: [''],
      NetBussinessIncomemothlyMargin: [''],
      AnnualIncome: [''], ApplicanteType: [''],
    });
    // this.form=this.fb.group({
    //   Name: ['', Validators.required],
    //   Relationship: [''],
    //   TypeOfSource: [''],
    //   AvgDailyTranscation: [''],
    //   NoOfDaysInMonth: [''],
    //   MothlyGrossSale: [''],

    //   RawMaterialsConsume: [''],  
    //   ReantForShop: [''],
    //   Labour: [''],
    //   Electricity: [''],
    //   Maintenace: [''],
    //   otherManufacturing: [''],  
    //   AdminandOperatingExpenses: [''],
    //   TotalBusinessExpenses: [''],
    //   AvgDailyExpenlture: [''],

    //   AvgNetProfitDaily: [''],  IncomeFrequency: [''],
    //   NetBussinessIncomeMothly: [''],
    //   NetBussinessIncomemothlyMargin: [''],
    //   AnnualIncome: [''],  ApplicanteType: [''],
    // })
  }

  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || ' {}')
  }

  saveData() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.cashFlowData.emit(formData);
    }
  }

}

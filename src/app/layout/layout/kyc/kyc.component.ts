    import { HttpErrorResponse } from '@angular/common/http';
    import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
    import { MatDialog } from '@angular/material/dialog';
    import { Router } from '@angular/router';
    import { CrudService } from 'src/app/shared/services/crud.service';
    import Swal from 'sweetalert2';

    @Component({
      selector: 'app-kyc',
      templateUrl: './kyc.component.html',
      styleUrls: ['./kyc.component.scss']
    })
    export class KycComponent implements OnInit{
      ExsitingData:any;
      type: string = '';
      userObj:any;
      @ViewChild('reasondialog') reasondialog!: TemplateRef<any>;
      dialogRef: any;
      constructor(private dialog:MatDialog, private router:Router, private _crudService:CrudService)
      {

      }

      handleExpansionPanelClick(type: string) {
        this.type = type;
        this.getMasterData(type);
      }

      ngOnInit(): void {
        this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
        // this.getMasterData(type);
      }

      getMasterData(type: string) {
        let obj = {
          "UserId": this.userObj.UserID,
          "Type": type

        }
        this._crudService.ExistingData(obj).subscribe({
          next: (value: any) => {
            console.log(value)
            this.ExsitingData = value.ExsitingDataDetails[0];
          
            if (value.status === false) {
              console.error(value.message);
              // Handle the error or show a message to the user
            } else {
              this.ExsitingData = value.ExsitingDataDetails ? value.ExsitingDataDetails[0] : null;
              console.log(this.ExsitingData);
              // Continue with processing the data
            }
          },

          error: (err: HttpErrorResponse) => {
            console.log(err)
          }
        })
      }

      enlarge()
      {

      }

    reason()
    {
      this.dialogRef = this.dialog.open(this.reasondialog, {
      
      });

      this.dialogRef.afterClosed().subscribe((result: any) => {
        console.log('The dialog was closed');
        
      });
    }
    proceed()
    {
      this.router.navigateByUrl('/details')
    }

    kycProceed()
    {
      
        Swal.fire({
          width:'350px',
        imageUrl: '../../assets/images/warining.svg',
        imageHeight: 80,
        text: 'KYC ID 4567890 already exist for Borrower ID 341',  
      showCancelButton:true,
      cancelButtonText:'Okay',
        confirmButtonText:'Raise Request',
        customClass: {
          confirmButton: "filledBtn",
          cancelButton:'strokedBtn'
        }

      }).then((result) => {
        if(result.isConfirmed)
        {
          this.reason()
        //  this.route.navigateByUrl('/newapplicationform')
      //    this.unlinkconfirm()
        }
        else
        {
          console.log('close')
        }
      })
      
      
      
    }
    onNoClick()
    {
      this.dialogRef.close();
    }
    }

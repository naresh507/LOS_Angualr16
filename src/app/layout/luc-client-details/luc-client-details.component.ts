import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-luc-client-details',
  templateUrl: './luc-client-details.component.html',
  styleUrls: ['./luc-client-details.component.scss']
})
export class LucClientDetailsComponent{
  @ViewChild('reasondialog') reasondialog!: TemplateRef<any>;
  @ViewChild('enlargedialog') enlargedialog!: TemplateRef<any>;
  dialogRef: any;
  enlargeDialogRef:any;
  basicDetails:boolean=true;
  mainbasicDetails:boolean=true
  memberDetails:boolean=false;
  householdDetails:boolean=false;
  constructor(private dialog:MatDialog)
  {

  }
  enlarge()
  {
this.enlargeDialogRef= this.dialog.open(this.enlargedialog,{
  width:'600px'

})
  }

  addnewcenter()
{
  this.dialogRef = this.dialog.open(this.reasondialog, {
    width:'400px'
   
  });

  this.dialogRef.afterClosed().subscribe((result: any) => {
    console.log('The dialog was closed');
    
  });
}


submit()
{
  
    Swal.fire({
      width:'350px',
    imageUrl: '../../assets/images/tick.png',
    imageHeight: 80,
    text: 'LUC Data Submitted Successfully!',  
   showCancelButton:true,
   cancelButtonText:'Cancel',
    confirmButtonText:'Okay',
    customClass: {
      confirmButton: "filledBtn",
      cancelButton:'strokedBtn'
    }

  }).then((result) => {
    if(result.isConfirmed)
    {
      this.basicDetails=false
     // this.reason()
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
  this.sucesscenter();
  this.dialogRef.close();
}
close()
{
  this.enlargeDialogRef.close();
}




sucesscenter()
{
  
    Swal.fire({
      width:'350px',
    imageUrl: '../../assets/images/tick.png',
    imageHeight: 80,
    text: 'Darkrang C2 Center created successfully!',  
   showCancelButton:false,
   
    confirmButtonText:'Okay',
    customClass: {
      confirmButton: "strokedBtn",
     
    }

  }).then((result) => {
    if(result.isConfirmed)
    {
    
    
    }
    else
    {
      console.log('close')
    }
  })
  
}

clickDetails(element:any)
{
  if(element == 'a')
  {
    this.mainbasicDetails=true;
    this.memberDetails=false;
    this.householdDetails=false;
  }
  if(element == 'b')
  {
    this.mainbasicDetails=false;
    this.memberDetails=true;
    this.householdDetails=false;
  }
  if(element == 'c')
  {
    this.mainbasicDetails=false;
    this.memberDetails=false;
    this.householdDetails=true;
  }
}


}

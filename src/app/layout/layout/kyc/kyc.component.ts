    import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
    import { MatDialog } from '@angular/material/dialog';
    import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
    import { CrudService } from 'src/app/shared/services/crud.service';
    

    @Component({
      selector: 'app-kyc',
      templateUrl: './kyc.component.html',
      styleUrls: ['./kyc.component.scss']
    })
    export class KycComponent implements OnInit{
    currenturl:any;
      MemberPhoto:string='';
     type: string = '';
     fillClass:any;
     fillClient:boolean=false;
     fillId:boolean=false;
     fillreview:boolean=false;
     
      constructor(private dialog:MatDialog, private router:Router,private activatedRoute: ActivatedRoute, private _crudService:CrudService)
      {
      

        this.router.events.pipe(
          filter((event:any) => event instanceof NavigationEnd)
        ).subscribe(() => {
          this.currenturl=this.router.url;
          console.log(this.router.url);
if(this.currenturl== '/kyc/clientverification')
{
this.fillClient=false;
this.fillId=false;
this.fillreview=false;

} else if(this.currenturl== '/kyc/idverification')

{
  this.fillClient=true;
  this.fillId=false;
  this.fillreview=false;
}
else if(this.currenturl== '/kyc/kycprofilereview')
{
  this.fillClient=true;
  this.fillId=true;
  this.fillreview=false;
}

        });

      }

     


      ngOnInit(): void {
      
        
      
      }

    
    }

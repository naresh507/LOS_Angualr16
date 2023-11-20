import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/services/crud.service';


@Component({
  selector: 'app-apperiasal-check',
  templateUrl: './apperiasal-check.component.html',
  styleUrls: ['./apperiasal-check.component.scss']
})
export class ApperiasalCheckComponent implements OnInit{



  constructor( private route: Router,  private _crudService :CrudService){

  }

  ngOnInit(): void {
    
  }

}

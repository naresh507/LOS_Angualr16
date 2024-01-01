import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bmbmcashflow-hhliablity',
  templateUrl: './bmbmcashflow-hhliablity.component.html',
  styleUrls: ['./bmbmcashflow-hhliablity.component.scss']
})
export class BMbmcashflowHhliablityComponent {

  @Output() BMhhliabilty = new EventEmitter();
  next(){

    this.BMhhliabilty.emit();
  }
}

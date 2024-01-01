import { Component, EventEmitter, Output,  OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-ocradhar',
  templateUrl: './ocradhar.component.html',
  styleUrls: ['./ocradhar.component.scss']
})
export class OCRAdharComponent {
  @Output() AAdharOCR = new EventEmitter();

}
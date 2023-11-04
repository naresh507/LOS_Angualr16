import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.scss']
})
export class VillageComponent {



  warningPopup(){
    Swal.fire({
    imageUrl: '../../assets/images/warining.svg',
    imageHeight: 80,
    text: 'Distance is exceeding Geo Policy! Mapping not possible',  
  });
  }

}

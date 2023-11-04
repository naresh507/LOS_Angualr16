import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hhloan',
  templateUrl: './hhloan.component.html',
  styleUrls: ['./hhloan.component.scss']
})
export class HhloanComponent {

constructor(private router:Router)
{

}

  
  loanCheck(){
    Swal.fire({
      width:'350px',
    imageUrl: '../../assets/images/tick.png',
    imageHeight: 80,
    text: 'Loan Eligibility Check done Successful!',  
   
    confirmButtonText:'Okay'
  });
  }
save()
{
this.router.navigateByUrl('/loanDetails')
}
}

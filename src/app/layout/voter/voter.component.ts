import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

import { Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImagefront: any = '';
  croppedImageBack: any = '';
  showCroppedImage: boolean = false;
  image: any = '';
  croppedImage: any = '';
  imagebase64data: any = '';
  public response: any = {};
  selectedImage: string = '';
  showUpload: boolean = false;
  showpopup: boolean = false;
  selecttypepopp: boolean = false;
  selectedImageType: string = '';
  name: string = '';
  voterid: string = '';
  dob: string = '';
  gender: string = '';
  relation: string = '';
  BackResponse: string = '';
  city: String = '';
  district: String = '';
  houseNumber: String = '';
  landmark: String = '';
  line1: String = '';
  line2: String = '';
  locality: String = '';
  pin: String = '';
  state: String = '';
  street: String = '';
  constructor(private auth: CrudService) { }

  imageTypes: { value: string, label: string }[] = [
    { value: 'VF', label: 'FrontImage' },
    { value: 'VB', label: 'BackImage' }
  ];

  ngOnInit(): void { }


  SelectType() {
    this.selecttypepopp = true;
  }
  SelectTypeFront() {
    this.selectedImageType = 'VF';
    this.selecttypepopp = true;
  }
  SelectTypeBack() {
    this.selectedImageType = 'VB';
    this.selecttypepopp = true;
  }
  fileChangeEvent(event: any, imageType: string): void {
    this.imageChangedEvent = event;
    this.selectedImageType = imageType;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.objectUrl;
    this.showCroppedImage = true;
    fetch(this.croppedImage)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result) {
            this.imagebase64data = reader.result.toString().split(',')[1];
            console.log(this.imagebase64data);
          } else {
            console.error('Failed to read the image data.');
          }
        };
        reader.readAsDataURL(blob);
      })
      .catch(error => {
        console.error('Error fetching or converting the image:', error);
      });
    this.showCroppedImage = true;
  }

  imageLoaded() {
    this.image = this.imageChangedEvent.target.files[0];
    this.croppedImage = this.image;
  }

  cropperReady() {

  }

  loadImageFailed() {

  }

  cancelCrop() {
    this.croppedImagefront = '';
    this.croppedImageBack = '';
    this.showCroppedImage = false;
    this.imageChangedEvent = null;
  }

  confirmCrop(selectedImage: string) {
    console.log('fileB64 confirmCrop:', this.imagebase64data);

    if (this.imagebase64data) {
      const docType = selectedImage;
      const dataImage = {
        docType: docType,
        fileB64: this.imagebase64data,
      };
      this.auth.voterocr(dataImage).subscribe(
        (responseData) => {
           let response = responseData.result[0].details;
          //let response = responseData.result[0];
          console.log(response);
          this.response = {
           // name: response.name !=undefined?response.name.value:'',
            voterid: response.voterid!= undefined?response.voterid.value:'',
            gender: response.gender !=undefined?response.gender.value:'',
            relation: response.relation!=undefined?response.relation.value:'',
            dob: response.dob!= undefined?response.dob.value:'',
            address: response.address!= undefined?response.address.value:'',
            pin: response.pin!= undefined?response.pin.value:'',
            date: response.date!= undefined?response.date.value:'',
            age: response.age!= undefined?response.age.value:'',
            houseNumber:response.addressSplit.houseNumber ||'',
            city:response.addressSplit.city ||'',
            line1:response.addressSplit.line1||'',
            line2: response.addressSplit.line2||'',
            street: response.street!= undefined?response.addressSplit.street:'',
            landmark:response.addressSplit.landmark||'',
            district: response.addressSplit.district||'',
             state: response.addressSplit.state||'',
            locality:response.addressSplit.locality||''
          }
          console.log(this.response);
        },
        // (error) => {
        //   console.error(error);
        // }
      );
    } else {
      console.error('Image base64 data is empty. Ensure that it is set in the imageCropped function.');
    }
  }
}
      // this.auth.voterocr(frontDataimage).subscribe(
      //   (responseData) => {
      //     if (selectedImage === 'VF') {
      //       this.response = responseData.result[0].details;
      //       console.log(this.response);
          //   this.name = response.name.value;
          //   this.voterid = response.voterid.value;
          //   this.gender = response.gender.value;
          //   this.relation = response.relation.value;
          //   this.dob = response.dob.value;
          // } else if (selectedImage === 'VB') {
          //   let backResponse = responseData.result[0].details.addressSplit;
          //   console.log(backResponse);
          //   this.city = backResponse.city;
          //   this.district = backResponse.district;
          //   this.houseNumber = backResponse.houseNumber;
          //   this.landmark = backResponse.landmark;
          //   this.line1 = backResponse.line1;
          //   this.line2 = backResponse.line2;
          //   this.locality = backResponse.locality;
          //   this.pin = backResponse.pin;
          //   this.state = backResponse.state;
          //   this.street = backResponse.street;
    //       } else {
    //         console.error('Unknown image type: ' + selectedImage);
    //       }
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   );
    // } else {
    //   console.error('Image base64 data is empty. Ensure that it is set in the imageCropped function.');
    // }
  // }
// }
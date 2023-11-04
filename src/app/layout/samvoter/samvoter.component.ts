import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-samvoter',
  templateUrl: './samvoter.component.html',
  styleUrls: ['./samvoter.component.css']
})
export class SamvoterComponent {
  name = 'Angular';
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imagebase64data: any = '';
  showCroppedImage: boolean = false;
  selectedImageType: string = '';
  isFrontImage: boolean = true;
  selecttypepopp: boolean = false;
  public response: any = {};
  city:string='';
  district:string='';
  houseNumber:string='';
  landmark:string='';
  line1:string='';
  line2:string='';
  locality:string='';
  pin:string='';
  state:string='';
  street:string='';
  imagedisable:boolean=true;

  constructor(private auth: CrudService) { }

  ngOnInit(): void {
  }
  SelectType() {
    this.selecttypepopp = true;
  }

  selectImage(imageType: string) {
    this.selectedImageType = imageType;
    this.selecttypepopp = true;
    
    
  }

  fileChangeEvent(event: any, docType: string) {
    this.imageChangedEvent = event;
    this.selectedImageType = docType;
    this.imagedisable=false;
    
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.objectUrl;
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

  }

  cropperReady() {

  }

  loadImageFailed() {

  }

  cancelCrop() {
    this.croppedImage = '';
    this.showCroppedImage = false;
    this.imageChangedEvent = null;
  }

  confirmCrop() {
    console.log('fileB64 confirmCrop:', this.imagebase64data);
    if (this.imagebase64data) {
      const docType = this.selectedImageType;
      const dataImage = {
        docType: docType,
        fileB64: this.imagebase64data
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
import { Component, OnInit, Input } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/services/crud.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-samvoter',
  templateUrl: './samvoter.component.html',
  styleUrls: ['./samvoter.component.css']
})
export class SamvoterComponent {
  res:any;
  referance_id:any='';
  VoterVerified:boolean=false;
  responses: any[] = []; 
  name = 'Angular';
  imageChangedEvent: any = '';
  croppedImage: any = '';
  frontimagebase64data: any = '';
  backimagebase64data: any = '';
  imagebase64data: any = '';
  showCroppedImage: boolean = false;
  selectedImageType: string = '';
  isFrontImage: boolean = true;
  selecttypepopp: boolean = false;
  response: any = {};
  city: string = '';
  district: string = '';
  houseNumber: string = '';
  landmark: string = '';
  line1: string = '';
  line2: string = '';
  locality: string = '';
  pin: string = '';
  state: string = '';
  street: string = '';
  imagedisable: boolean = true;
  userObj: any = {};
  aadharObj: any = {};

  constructor(private auth: CrudService, private router: Router) { }



  ngOnInit(): void {
    this.userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
    this.aadharObj = JSON.parse(localStorage.getItem('aadharObj') || '{}');
    this.referance_id = JSON.parse(localStorage.getItem('refObj') || '{}');
    console.log(this.aadharObj);
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
    this.imagedisable = false;

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

      if (this.selectedImageType === 'VF') {
        this.frontimagebase64data = this.imagebase64data;
        console.log('Front Image Base64:', this.frontimagebase64data);
      } else if (this.selectedImageType === 'VB') {
        this.backimagebase64data = this.imagebase64data;
        this.VoterVerified =true;
        console.log('Back Image Base64:', this.backimagebase64data);
      } else {
        console.error('Invalid image type selected.');
      }

      console.log(this.frontimagebase64data);
      console.log(this.backimagebase64data);


      this.auth.voterocr(dataImage).subscribe(
        (responseData) => {
          let response = responseData.result[0].details;
          this.responses.push(response);
          console.log(this.responses);
          this.response = {
            name: response.name?.value || '',
            voterid: response.voterid?.value || '',
            gender: response.gender?.value || '',
            relation: response.relation?.value || '',
            dob: response.dob?.value || '',
            address: response.address?.value || '',
            pin: response.pin?.value || '',
            date: response.date?.value || '',
            age: response.age?.value || '',
            houseNumber: response.addressSplit?.houseNumber || '',
            city: response.addressSplit?.city || '',
            line1: response.addressSplit?.line1 || '',
            line2: response.addressSplit?.line2 || '',
            street: response.addressSplit?.street || '',
            landmark: response.addressSplit?.landmark || '',
            district: response.addressSplit?.district || '',
            state: response.addressSplit?.state || '',
            locality: response.addressSplit?.locality || ''
          }
          console.log(this.response);
          
        });
    } else {
      console.error('Image base64 data is empty. Ensure that it is set in the imageCropped function.');
    }
  }


  save(): any {
    const Obj = {
      VoteridDetailsData: [
        {
          "RefId": localStorage.getItem('refObj')|| '',
          // RefId: this.referance_id,
          LosUnique_Id: this.aadharObj,
          CapturePhoto: '',
          CapturePhotoName: '',
          voterid_Frontpath: this.frontimagebase64data,
          voterid_Backpath: this.backimagebase64data,
          UserID: this.userObj.UserID,
          voterid:this.responses[0]?.voterid?.value || '',
          Name: this.responses[0]?.name?.value || '',
          Gender: this.responses[0]?.gender?.value || '',
          Relation: this.responses[0]?.relation?.value || '',
          Dob: this.responses[0]?.dob?.value || '',
          Doc: this.responses[0]?.doc?.value || '',
          Age: this.responses[1]?.age?.value || '',
          Type: this.selectedImageType === 'front' ? 'VF' : 'VB',
          Address:this.responses[1]?.address?.value || '',
          StatusCode: '',
          
        }
      ]
    }
    console.log(Obj);

    this.auth.VoterDetailsSubmit(Obj).subscribe(
      (responseData) => {

        this.res = responseData.message;

        Swal.fire({
          imageUrl: '../../assets/images/warining.svg',
          imageHeight: 80,
          text: this.res,
        });
        console.log(responseData);

      });
    this.router.navigateByUrl('/kyc/kycprofilereview')
  }
}
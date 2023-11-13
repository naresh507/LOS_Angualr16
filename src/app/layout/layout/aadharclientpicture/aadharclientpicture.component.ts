import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil, WebcamComponent } from 'ngx-webcam';
@Component({
  selector: 'app-aadharclientpicture',
  templateUrl: './aadharclientpicture.component.html',
  styleUrls: ['./aadharclientpicture.component.scss']
})
export class AadharclientpictureComponent {
  url: any; 
  msg = "";
  @Output() imageuploadData:any= new EventEmitter();
 
    @ViewChild(WebcamComponent)
    webcamComponent!: WebcamComponent;
  photo: string='';
  videoWidth = 640; 
  videoHeight = 480; 
  
  captureImage() {
   
  }
  handleImageCapture(webcamImage: WebcamImage) {
  
  }
  
  selectFile(event: any) { 
  
  
  
    if(!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }
    
    var mimeType = event.target.files[0].type;
    
    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported";
      return;
    }
    
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    
    reader.onload = (_event) => {
      this.msg = "";
      this.url = reader.result; 
  let sendingData=  reader.result?.toString().split(',')[1];
  
      
      this.imageuploadData.emit([sendingData, event.target.files[0].name])
  
    }
    
  }
  
  // Component
  handleFileInput(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      // Access the file metadata here
      console.log('File size:', file.size);
      console.log('File type:', file.type);
      console.log('Last modified:', file.lastModified);
    };
  
    reader.readAsArrayBuffer(file);
  }
  
  
  ngOnInit() {
    console.log('ss')
    
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, finalize, take } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PagesService {
  constructor(private http: HttpClient) { }
  faq(loginPayload: any): Observable<any> {
    return this.http.post(`${environment.apiLoginUrl}FAQ`, loginPayload);
    
  }

  video(loginPayload: any): Observable<any> {
    return this.http.post(`${environment.apiLoginUrl}Videos`, loginPayload);
    
  }

}

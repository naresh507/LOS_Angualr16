import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from 'src/app/account/rfq-view-details/notes/notes.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RfqService {

  private headers = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });
  constructor(private http: HttpClient) { }

  setHeaders(token: string) {
    this.headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token });
  }

  //Home/Products
  getAttributes(id: any): Observable<any> {
    const data = {
      category: id
    }
    return this.http.post(`${environment.apiUrl}/v2/fetch-attr-by-catId`, data, { headers: this.headers });
  }


  // getCategories(data:any): Observable<any> {
  //   return this.http.post(`${environment.apiUrl}/fetch-all-categories`,data);
  // }

  getAlldropdownData(id: any): Observable<any> {
    const data = {
      category: id
    }
    return this.http.post(`${environment.apiUrl}/v2/get-product-enquery-dropdowns-api`, data, { headers: this.headers });
  }
  getCalls(id: any): Observable<any> {
    const data = {
      company_id: id,
      prod_id: '',
      connect_type_id: ''
    }
    return this.http.post(`${environment.apiUrl}/v2/create-connect-as-call`, data, { headers: this.headers })
  }

  reqSubmit(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/v2/rfq-submit`, data, { headers: this.headers });
  }
  
  rfqSubmitV2(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/v2/rfq-submit-v2`, data, { headers: this.headers });
  }
  
  enquerySubmit(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/v2/product-enquery-submit`, data, { headers: this.headers });
  }

  enquerySubmitV2(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/v2/product-enquery-submit-v2`, data, { headers: this.headers });
  }

  //Account Page    
  //   </-- Inquiry Details -->
  getInquiryList(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/v2/fetch-enquery`, data, {headers: this.headers})
  }

  getInquiryDetails(id: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/v2/fetch-enquery_details`, {enquery_id: id}, {headers: this.headers})
  }

  //   </-- RFQ Details -->
  getRfqList(): Observable<any> {
    return this.http.post(`${environment.apiUrl}/v2/fetch-rfq-list`, {limit: 100, skip: 0}, {headers: this.headers})
  }

  getRfqDetails(id: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/v2/fetch-rfq-details`, {rfq_id: id}, {headers: this.headers})
  }

  getRfqClose(): Observable<any> {
    return this.http.get(`${environment.apiLoginUrl}/get-rfq-close-reasons`)
  }

  updateRfq(obj: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/v2/update-rfq`, obj,  {headers: this.headers})
  }

  updateRfqDetails(obj: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/v2/update-rfq-details`, obj,  {headers: this.headers})
  }

  // Account Page Rfq
  compareRfqQuotes(id: number):Observable<any> {
    return this.http.post(`${environment.apiUrl}/v2/rfq-quotations-for-comparison`, { rfq_id: id }, { headers: this.headers })
  }
  
  addNotes(noteData: Note):Observable<any> {
    return this.http.post(`${environment.apiUrl}/v2/store-rfq-quotation-notes`, noteData, { headers: this.headers })
  }

  getRfqTerms(): Observable<string> {
    return this.http.get<string>(`https://api.myverkoper.com/html/v2/rfq-terms-condition`)
  }

  getSpanStyle(key: string): { [key: string]: string } {
    let styles: { [key: string]: string } = {};
    switch (key.toLowerCase()) {
      case 'open':
        styles['border-color'] = 'black';
        styles['color'] = 'black';
        break;
      case 'onhold':
        styles['border-color'] = 'yellow';
        styles['color'] = 'yellow';
        styles['background-color'] = '#b3ac74';
        break;
      case 'approved':
        styles['border-color'] = 'green';
        styles['color'] = 'green';
        return {color: 'green'};
      case 'rejected':
        styles['border-color'] = 'red';
        styles['color'] = 'red';
        break;
      default:
        break;
    }
    return styles;
  }


}

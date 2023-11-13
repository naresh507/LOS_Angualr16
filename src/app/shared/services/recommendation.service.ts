import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  userId: number = 0;
  headers: HttpHeaders;
  constructor(private http: HttpClient) { 
    if (localStorage.getItem('userObj')) {
      const userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
      this.userId = parseInt(userObj.buyerId);
    }
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  }

  mainRooms: any[] = [];
  getMainRooms() {
    return this.mainRooms;
  }

  postRooms(main_rooms: any[]) {
    this.mainRooms = [];
    this.mainRooms = main_rooms;
  }

  // Classes
  mainClasses: any[] = [];
  getMainClasses() {
    return this.mainClasses;
  }

  postClasses(main_classes: any[]) {
    this.mainClasses = [];
    this.mainClasses = main_classes;
  }

  // Rooms Category
  getMainCategory(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/get-recommended-rooms`);
  }

  getSubCategory(categoryId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/get-recommended-sub-rooms`, {main_room: categoryId});
  }

  getRoomProducts(obj: any): Observable<any> {
    obj['user_id'] = this.userId;
    return this.http.post(`${environment.apiUrl}/get-recommended-room-products`, obj);
  }

  // Classes Category
  getClasses(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/get-recommended-classes`);
  }

  getSubClasses(categoryId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/get-recommended-class-categories`, {class_id: categoryId});
  }

  getClassProducts(obj: any): Observable<any> {
    obj['user_id'] = this.userId;
    return this.http.post(`${environment.apiUrl}/get-recommended-class-products`, obj);
  }

  // schools Category
  getSchools(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/get-recommended-schools`);
  }

  getSubSchools(categoryId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/get-recommended-school-categories`, {school_id: categoryId});
  }

  getSchoolProducts(obj: any): Observable<any> {
    obj['user_id'] = this.userId;
    return this.http.post(`${environment.apiUrl}/get-recommended-school-products`, obj);
  }

  // Top Types
  getTopTypes(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/get-top-ranking-types`);
  }

  getRankingCompanyDetails(categoryType: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/fetch-ranking-company-details`, {type: categoryType});
  }

  getRankingCompanyData(obj: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/fetch-ranking-company-data`, obj);
  }

  // Just For You
  getJustForYou(obj: any): Observable<any> {
    obj['user_id'] = this.userId;
    return this.http.post(`${environment.apiUrl}/get-recommended-just-for-you`, obj);
  }

  getRecommendedBanners(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/get-recommended-banners`);
  }

  getPrimeSuppliers(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/fetch-prime-suppliers`);
  }

  getEliteSuppliers(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/fetch-elite-suppliers`);
  }

  getrankingTypes(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/get-top-ranking-types`);
  }

  getAllrankingProductData(obj:any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/fetch-ranking-product-data`,  obj);
  }

  getRankingDetails(obj:any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/fetch-ranking-product-details`,  {type: obj});
  }

  getAllrankproductsList(obj:any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/fetch-ranking-product-list`,  obj);
  }
  
  getAllStatesData(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/get-recommended-states`);
  }


}

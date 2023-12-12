import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isUserLoggedIn: boolean = false;
  private accessToken: any;
  private refreshTokenStr: any;
  constructor(private http: HttpClient) { }


  private authToken: string='';
private userObj={
  "UserID": "",
  "UserRole": "staff",

}


// setUserObj(token: any) {
//   this.userObj = token;
// }

// getUserObj(): any {
//   return this.userObj;
// }

// clearUserObj() {
//   this.userObj = { "UserID": "",
//   "UserRole": ""};
// }

  // setToken(token: string) {
  //   this.authToken = token;
  // }

  // getToken(): string {
  //   return this.authToken;
  // }

  // clearToken() {
  //   this.authToken = '';
  // }
setUserId()
{

}


  //token
  setToken(token: any) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token')
  }
  clearToken() {
    localStorage.removeItem('token');
  }

  setUserObj(userObj: any) {
    localStorage.setItem('userObj', userObj);
  }
  getUserObj() {
    return localStorage.getItem('userObj')
  }
  clearUserObj() {
    localStorage.removeItem('userObj');
  }

  
  
    login(loginPayload: any): Observable<any> {
      return this.http.post(`${environment.apiLoginUrl}Login`, loginPayload);
      //return this.http.post(`https://dc.afpluat.com/Traning_DemandCollection_API/API/StaffDashboardData`, loginPayload)
    }
    resetpassword(resetPayload: any): Observable<any> {
      return this.http.post(`${environment.apiLoginUrl}RestPassword`, resetPayload);
    }

    mpinandforgotandcreate(mpinPayload: any): Observable<any> {
      return this.http.post(`${environment.apiLoginUrl}LoginMPIN`, mpinPayload);
    }



    dashboardInsights(userObjPayload: any): Observable<any> {
      return this.http.post(`${environment.apiLoginUrl}Dashboard`, userObjPayload);
      //return this.http.post(`https://dc.afpluat.com/Traning_DemandCollection_API/API/StaffDashboardData`, loginPayload)
    }


    DashboardDetails(userObjPayload: any): Observable<any> {
      return this.http.post(`${environment.apiLoginUrl}DashboardDetails`, userObjPayload);
     
    }

    userRoleDetails(userObjPayload: any): Observable<any> {
      return this.http.post(`${environment.apiLoginUrl}UserRoleDetails`, userObjPayload);
     
    }

    // sendOtp(sendotpOBJPayload: any): Observable<any> {
    //   return this.http.post(`${environment.apiLoginUrl}OTPVerification`, sendotpOBJPayload);
     
    // }
       sendOtp(sendotpOBJPayload: any): Observable<any> {
      return this.http.post(`${environment.apiLoginUrl}ForgotPasswordMoblieNumberSendOTP `, sendotpOBJPayload);
     
    }


    

    ChangePassword(changepasswordOBJPayload: any): Observable<any> {
      return this.http.post(`${environment.apiLoginUrl}ChangePassword`, changepasswordOBJPayload);
    }

    resetPassword( resetpawdOBJPayload: any): Observable<any> {
      return this.http.post(`${environment.apiLoginUrl}RestPassword`, resetpawdOBJPayload);
    }


  refreshToken() {
    console.log('test msg')
    return this.http.post<any>('your-refresh-token-url', { refreshToken: this.refreshTokenStr })
      .pipe(tap((tokens) => {
        this.accessToken = tokens.accessToken;
        this.refreshToken = tokens.refreshToken;
      }));
  }


  getAccessToken(): string {
    return this.accessToken;
  }





}



// https://myverkoper.in/api/update-buyer-user-details?type=pincode&pincode=500089&mobile=7658987702&current_signup_step=6&   sigup_process_completed&is_email_skipped=true


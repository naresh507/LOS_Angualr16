import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  userId: number = 0;
  constructor(private http: HttpClient) {
  }
  

  statitcsGraph(obj: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}StatisticsDashBoard`, obj);
  }




/* search Clients */


searchClient(obj: any): Observable<any> {
  console.log(obj)
  return this.http.post(`${environment.apiUrl}SerachClient`, obj);
}


//MasterPinCode
masterPinCode(obj: any): Observable<any> {
  
  return this.http.post(`${environment.apiUrl}MasterPinCode`, obj);
}


//MasterPinCode
masterVillageCode(obj: any): Observable<any> {
  
  return this.http.post(`${environment.apiUrl}MasterVillageCode`, obj);
}



//OTP
OTPVerification(obj: any): Observable<any> {
  
  return this.http.post(`${environment.apiUrl}OTPVerification`, obj);
}


//new mobile OTP
VerifyMobileNumber(obj: any): Observable<any> {
  
  return this.http.post(`${environment.apiUrl}VerifyMobileNumber`, obj);
}



//BasicDetailsBrrower
basicDetailsBrrower(obj: any): Observable<any> {
  
  return this.http.post(`${environment.apiUrl}BasicDetailsBrrower`, obj);
}


newcenter(obj: any): Observable<any> {
  
  return this.http.post(`${environment.apiUrl}CenterCreateData`, obj);
}


centerdatasubmit(obj: any): Observable<any> {
  
  return this.http.post(`${environment.apiUrl}CenterCreateSubmit`, obj);
}

getMasterDetails(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}MasterDetails`,obj);
}

saveHouseHoldDetail(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}HouseHoldDetail`,obj);
}
saveHouseHoldDetailsubmit(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}HouseHoldDetailsSubmit`,obj);
}

submitRegularExpensesMothlySubmit(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}RegularExpensesMothlySubmit`,obj);
}

submitIrRegularExpensesAnnuallySubmit(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}IrRegularExpensesAnnuallySubmit`,obj);
}


addHouseHoldLiabilitySubmit(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}HouseHoldLiabilitySubmit`,obj);
}

HHLiabilityFetchSub(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}HHLiabilityFetch`,obj);
}

LoanEligbiltySubmit(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}LoanEligbiltySubmit`,obj);
}

LoanEligbiltyget(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}LoanEligibilityFechData`,obj);
}

// Loan Details component Service  SubMit
LoanDetailsSubmit(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}LoanDetailsSubmit`,obj);
}

LoanDetailsget(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}LoanDetailFetchFCO`,obj);        
}

// Guarantors  Details Submit component Service  SubMit
GuarantorsSubmit(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}GuarantorsDetailsSubmit`,obj);
}

// Insurance  Details Submit component Service  SubMit
InsuranceSubmit(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}InsuranceDetailsSubmit`,obj);
}


// BankIFSCCode  Details Submit component Service  SubMit
BankIFSCCodeSubmit(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}BankIFSCCode`,obj);
}

// CGTDetailsSubmit Details  component Service  SubMit
CGTDetailsSubmit(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}CGTDetailsSubmit`,obj);
}



EaringMemberDetailsSubmit(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}EaringMemberDetails`,obj);
}

EAdhar(adhardetails: any): Observable<any> {
  return this.http.post(`${environment.karzaAdharapiUrl}/eaadhaarotp`, adhardetails);
}
EAdharfile(additionalData: any): Observable<any> {
  return this.http.post(`${environment.karzaAdharapiUrl}/eaadhaarFile`, additionalData);
}
voterocr(VoterOcrData: any): Observable<any> {
  return this.http.post(`${environment.karzaVoterApiUrl}/ocrkyc`, VoterOcrData);
}


// Upload Image

CapturePhotoLOS(uploadphoto: any):Observable<any>{
  return this.http.post(`${environment.apiUrl}/CapturePhotoLOS`, uploadphoto);
}


// BasicDetails (Borrower)

basicdetails(basicdetails: any):Observable<any>{
  return this.http.post(`${environment.apiUrl}/BasicBorrowerFetch`, basicdetails);
}


}


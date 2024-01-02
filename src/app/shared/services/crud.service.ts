import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private aadharObj={
    "Unique_Id": "",
  }

  private refObj={
    "RefId": "",
  }
  
  userId: number = 0;
  constructor(private http: HttpClient) {
  }


  seRefId(refObj: any) {
    localStorage.setItem('refObj', refObj);
  }
  getRefId() {
    return localStorage.getItem('refObj')
  }

  clearRefId() {
    localStorage.removeItem('refObj');
  }







  setAAdharObj(aadharObj: any) {
    localStorage.setItem('aadharObj', aadharObj);
  }
  getAAdharObj() {
    return localStorage.getItem('aadharObj')
  }

  clearAAdharObj() {
    localStorage.removeItem('aadharObj');
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


// VillageSubmitData (VillageSubmitData)

VillageSubmitData(basicdetails: any):Observable<any>{
  return this.http.post(`${environment.apiUrl}VillageSubmitData`, basicdetails);
}


// EarningMembersDataFetch (EarningMembersDataFetch)

EarningMembersDataFetch(basicdetails: any):Observable<any>{
  return this.http.post(`${environment.apiUrl}EarningMembersDataFetch`, basicdetails);
}


//OTP
OTPVerification(obj: any): Observable<any> {
  
  return this.http.post(`${environment.apiUrl}OTPVerification`, obj);
}



// //new mobile OTP
// VerifyMobileNumber(obj: any): Observable<any> {
  
//   return this.http.post(`${environment.apiUrl}VerifyMobileNumber`, obj);
// }

//new mobile OTP
VerifyMobileNumber(obj: any): Observable<any> {
  
  return this.http.post(`${environment.apiUrl}VerifyMobileNumberUpDate`, obj);
}

//Verify Mobile Number Submit
VerifyMobileNumberSubmit(obj: any): Observable<any> {
  
  return this.http.post(`${environment.apiUrl}VerifyMobileNumberSubmit`, obj);
}




//BasicDetailsBrrower
basicDetailsBrrower(obj: any): Observable<any> {
  
  return this.http.post(`${environment.apiUrl}BasicDetailsBrrower`, obj);
}


newcenter(obj: any): Observable<any> {
  
  return this.http.post(`${environment.apiUrl}CenterCreateData`, obj);
}

CenterDataSerch(obj: any): Observable<any> {
  
  return this.http.post(`${environment.apiUrl}CenterDataSerch`, obj);
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



// HHMothlyIncome  Details Submit component Service  SubMit
HHMothlyIncome(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}HHMothlyIncome`,obj);
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


// BankIFSCCode validate  Details Submit component Service  SubMit
BankIFSCCodeSubmit(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}BankIFSCCode`,obj);
}

// Bank Account Details Submit component Service SubMit
BankAccountDetails(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}BankAccountDetails`,obj);
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

// AadharotpInsertSubmit Service  SubMit Local Data BAse
AadharotpInsertSubmit(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}AadharInsertSubmit`,obj);
}

EAdharfile(additionalData: any): Observable<any> {
  return this.http.post(`${environment.karzaAdharapiUrl}/eaadhaarFile`, additionalData);
}

voterocr(VoterOcrData: any): Observable<any> {
  return this.http.post(`${environment.karzaVoterApiUrl}/ocrkyc`, VoterOcrData);
}

// VoterDetailsSubmit Service  SubMit Local Data BAse
VoterDetailsSubmit(obj:any):Observable<any>
{
  return this.http.post(`${environment.apiUrl}VoterDetailsSubmit`,obj);
}

// VoterFrontimageSubmit Service  SubMit Local Data BAse
// VoterFrontimageSubmit(obj:any):Observable<any>
// {
//   return this.http.post(`${environment.apiUrl}VoterFrontSubmit`,obj);
// }

// VoterBackimageSubmit Service  SubMit Local Data BAse

// VoterBackimageSubmit(obj:any):Observable<any>
// {
//   return this.http.post(`${environment.apiUrl}VoterBackSubmit`,obj);
// }


ExistingData(ExistingData: any): Observable<any> {
  return this.http.post(`${environment.apiUrl}ExistingData`, ExistingData);
}




// Upload Image

CapturePhotoLOS(uploadphoto: any):Observable<any>{
  return this.http.post(`${environment.apiUrl}/CapturePhotoLOS`, uploadphoto);
}


// BasicDetails (Borrower)

basicdetails(basicdetails: any):Observable<any>{
  return this.http.post(`${environment.apiUrl}BasicBorrowerFetch`, basicdetails);
}


// BasicDetails Images

getimageBasicdetails(basicdetailsimages: any):Observable<any>{
  return this.http.post(`${environment.apiUrl}OKYCVoterPhotoVIEW`, basicdetailsimages);
}

// VerifyClientListBMBM

VerifyClientListBM(basicdetailsVerifyClientDetailsBM: any):Observable<any>{
  return this.http.post(`${environment.apiUrl}VerifyClientListBM`, basicdetailsVerifyClientDetailsBM);
}

// VerifyClientDetailsBM

VerifyClientDetailsBM(basicdetailsVerifyClientDetailsBM: any):Observable<any>{
  return this.http.post(`${environment.apiUrl}VerifyClientDetailsBM`, basicdetailsVerifyClientDetailsBM);
}

// BMProfileREVIEW

BMProfileREVIEW(BMProfileREVIEW: any):Observable<any>{
  return this.http.post(`${environment.apiUrl}BMProfileREVIEW`, BMProfileREVIEW);
}

// BMEarningMembersData

BMEarningMembersData(BMEarningMembersData: any):Observable<any>{
  return this.http.post(`${environment.apiUrl}BMEarningMembersData`, BMEarningMembersData);
}


// BMHouseHoldDetailsFetchData

BMHouseHoldFetchData(BMHouseFetchData: any):Observable<any>{
  return this.http.post(`${environment.apiUrl}BMHouseHoldDetailsFetchData`, BMHouseFetchData);
}



// BMHouseHoldDetailsSubmitData

BMHouseHoldDetailsSubmitData(BMHouseHoldsubmitData: any):Observable<any>{
  return this.http.post(`${environment.apiUrl}BMHouseHoldDetailsSubmitData`, BMHouseHoldsubmitData);
}





}


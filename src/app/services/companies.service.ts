import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { UsersService } from "./users.service";
import { ResponseCompany } from "../answers/responseCompany";
import { Company } from "../models/company";
import { ResponseSaveCompany } from "../answers/responseSaveCompany";
import { CompanyDTO } from "../dto/company";
import { FiscalInformationDTO } from "../dto/fiscal_information";
import { FiscalInformation } from "../models/fiscal_information";
import { ResponseACompany } from "../answers/responseAcompany";
@Injectable({
  providedIn: "root"
})
export class CompaniesService {
  public companies:Company[];
  

  constructor(private http: HttpClient, private cookies: CookieService,private userService:UsersService) {
    this.companies = new Array()
  }

  getHeaders():HttpHeaders{
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Authorization',this.userService.getToken());
    return headers
  }

  setCompanies(companies:Company[]){
    this.companies = companies;
  }

  getCompanyByIdLocal(_id:String):Company{
    console.log(this.companies);
    for(var i=0;i<this.companies.length;i++){
      console.log(this.companies[i]._id)
      console.log(_id)
      if(this.companies[i]._id == _id){
        return this.companies[i];
      }
    }
    return new Company("","","","",new FiscalInformation("","","","","","","","","",""),0)
  }



  getCompanies(): Observable<ResponseCompany> {
    return this.http.get<ResponseCompany>("http://localhost:3788/api/company/get",{'headers':this.getHeaders()})
  }

  getCompanyByID(_id:String): Observable<ResponseACompany> {
    return this.http.get<ResponseACompany>("http://localhost:3788/api/company/get/"+_id,{'headers':this.getHeaders()})
  }

  saveCompany(company:Company):Observable<ResponseSaveCompany>{
    var dto = new CompanyDTO(company.short_name,company.domain,
      new FiscalInformationDTO(company.fiscal_information.bussines_name,company.fiscal_information.street,
        company.fiscal_information.number,company.fiscal_information.colonie,company.fiscal_information.city,company.fiscal_information.state,
        company.fiscal_information.country,company.fiscal_information.rfc,company.fiscal_information.mail))
    return this.http.post<ResponseSaveCompany>("http://localhost:3788/api/company/save",dto,{'headers':this.getHeaders()})
  }

  updateCompany(company:Company):Observable<ResponseSaveCompany>{
    var dto = new CompanyDTO(company.short_name,company.domain,
      new FiscalInformationDTO(company.fiscal_information.bussines_name,company.fiscal_information.street,
        company.fiscal_information.number,company.fiscal_information.colonie,company.fiscal_information.city,company.fiscal_information.state,
        company.fiscal_information.country,company.fiscal_information.rfc,company.fiscal_information.mail))
    return this.http.put<ResponseSaveCompany>("http://localhost:3788/api/company/update/"+company._id,dto,{'headers':this.getHeaders()})
  }
  



}
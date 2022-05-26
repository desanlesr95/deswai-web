import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { UsersService } from "./users.service";
import { ResponseClients } from "../answers/responseClients";
import { ResponseSaveUpdateGetCompany } from "../answers/responseSaveUpdateGetClient";
import { Client } from "../models/client";
import { ClientDTO } from "../dto/client";
@Injectable({
  providedIn: "root"
})
export class ClientsService {
  constructor(private http: HttpClient, private cookies: CookieService,private userService:UsersService) {}
  public clients:Client[] = [];
  getHeaders():HttpHeaders{
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Authorization',this.userService.getToken());
    return headers
  }

  getClients(): Observable<ResponseClients> {
    return this.http.get<ResponseClients>("http://localhost:3788/api/client/get",{'headers':this.getHeaders()})
  }
  

  setClients(clients:Client[]){
    this.clients = clients;
  }

  getClientByIdLocal(_id:String):Client{
    for(let i in this.clients){
      if(this.clients[i]._id == _id){
        return this.clients[i];
      }
    }
    return new Client("","","","","","",1,"","","");
  }

  getClientById(_id:String):Observable<ResponseSaveUpdateGetCompany>{
    return this.http.get<ResponseSaveUpdateGetCompany>("http://localhost:3788/api/client/get/"+_id,{'headers':this.getHeaders()})
  }



  saveClient(client:Client):Observable<ResponseSaveUpdateGetCompany>{
    var struct = {
      name:client.name,
      lastname:client.lastname,
      mail:client.mail,
      password:client.password,
      company_id:client.company_id
    };
    console.log(struct);
    return this.http.post<ResponseSaveUpdateGetCompany>("http://localhost:3788/api/client/save",{
      name:client.name,
      lastname:client.lastname,
      mail:client.mail,
      password:client.password,
      company_id:client.company_id
    },{'headers':this.getHeaders()})
  }

  updateClient(client:Client):Observable<ResponseSaveUpdateGetCompany>{
    var dto= new ClientDTO(client.create_at,client.name,client.lastname,client.date_birthday,client.status,client.company_id,client.mail);
    return this.http.put<ResponseSaveUpdateGetCompany>("http://localhost:3788/api/client/update/"+client._id,dto,{'headers':this.getHeaders()})
  }



  



}
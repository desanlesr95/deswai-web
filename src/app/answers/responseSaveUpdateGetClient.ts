import { Client } from "../models/client";

export class ResponseSaveUpdateGetCompany{
    constructor(public message:String,public client:Client){}
}
import { Company } from "../models/company";

export class ResponseSaveCompany{
    constructor(public message:String,public companies:Company){}
}
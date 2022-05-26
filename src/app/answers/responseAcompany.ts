import { Company } from "../models/company";

export class ResponseACompany{
    constructor(public message:String,public company:Company){}
}
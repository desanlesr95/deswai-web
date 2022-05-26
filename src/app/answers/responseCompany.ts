import { Company } from "../models/company";

export class ResponseCompany{
    constructor(public message:String,public companies:Company[]){}
}
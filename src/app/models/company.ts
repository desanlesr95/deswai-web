import { FiscalInformation } from "./fiscal_information";

export class Company{

    constructor(public _id:String,public create_at:String,public short_name:String,public domain:String,public fiscal_information:FiscalInformation,public status:Number){
        
    }


  

}
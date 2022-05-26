import { Client } from "../models/client";

export class ResponseClients{
    constructor(public message:String,public clients:Client[]){}
}
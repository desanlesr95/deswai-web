import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { Company } from 'src/app/models/company';
import { ClientsService } from 'src/app/services/clients.service';
import { CompaniesService } from 'src/app/services/companies.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  public companies:Company[]=[]
  public params_id = "";
  public client = new Client("","","","","","",1,"","","");

  constructor(public userService:UsersService,public companyService:CompaniesService,
    public clientService:ClientsService,private route:ActivatedRoute,public router: Router) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(res =>{
        this.companies = res.companies;
    });
    this.route.paramMap.subscribe(params => {
      if (params.has("id")) {// params.has("id")== true
        this.params_id = this.route.snapshot.params['id'];
        console.log(this.params_id);
        if (this.params_id) {
            this.client=this.clientService.getClientByIdLocal(this.params_id);
            if(this.client._id==""){
              this.clientService.getClientById(this.params_id).subscribe(response =>{
                console.log(response);
                this.client = response.client;
              })
            }
        }
      }
    })
  }

  reg(){
    console.log(this.client);
    if(this.client._id == ""){
      this.clientService.saveClient(this.client).subscribe(response =>{
        console.log(response);
        if(response.message == "OK"){
          this.router.navigateByUrl('home/clients');
        }
      });
    }
    else{
      this.clientService.updateClient(this.client).subscribe(response =>{
        console.log(response);
        if(response.message == "Update successfully"){
          this.router.navigateByUrl('home/clients');
        }
      });
    }
  }

}

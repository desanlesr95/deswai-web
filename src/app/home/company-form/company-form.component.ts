import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { FiscalInformation } from 'src/app/models/fiscal_information';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {
  public company:Company = new Company("","","","",new FiscalInformation("","","","","","","","","",""),0);
  public params_id = "";
  public text_button = "Registrar";
  constructor(public companyServices:CompaniesService,public router: Router,private route:ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.has("id")) {// params.has("id")== true
        this.params_id = this.route.snapshot.params['id'];
        console.log(this.params_id);
        if (this.params_id) {
          this.company = this.companyServices.getCompanyByIdLocal(this.params_id);
          if(this.company._id == ""){
            this.companyServices.getCompanyByID(this.params_id).subscribe(response =>{
              console.log(response);
              this.company = response.company;
              console.log(this.company);
              this.text_button = "Actualizar"
            })
          }
        }
      }
    })

  }


  save():void{
    console.log(this.company);
    if(this.company._id == ""){
      //Register
      this.companyServices.saveCompany(this.company).subscribe(response => {
        if(response.message == "OK"){
          this.router.navigateByUrl('home/companies');
        }
      })
    }
    else{
      this.companyServices.updateCompany(this.company).subscribe(response => {
        console.log(response);
        if(response.message == "OK"){
          this.router.navigateByUrl('home/companies');
        }
      })
    } 

  }

}

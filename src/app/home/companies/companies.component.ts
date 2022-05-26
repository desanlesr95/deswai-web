import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  public companies:Company[] = [];

  constructor(private companiesService:CompaniesService) { }

  ngOnInit(): void {  
    this.companies = []
    this.companiesService.getCompanies().subscribe(res =>{
      console.log(res.companies)
      this.companies = res.companies;
      this.companiesService.setCompanies(this.companies);
    });
  } 

}

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientFormComponent } from './home/client-form/client-form.component';
import { ClientsComponent } from './home/clients/clients.component';
import { CompaniesComponent } from './home/companies/companies.component';
import { CompanyFormComponent } from './home/company-form/company-form.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './main/pages/login/login.component';
import { RegisterComponent } from './main/pages/register/register.component';

const routes: Routes = [
  { path: "", component: MainComponent,
    children:[
      { path: "", redirectTo: '/login', pathMatch:"full"},
      { path: "login", component: LoginComponent, pathMatch: "full" },
      { path: "register", component: RegisterComponent, pathMatch: "full" }
    ] 
  },{
    path:"home",component:HomeComponent,
    children:[
      {path:"",component:DashboardComponent},
      {path:"companies",component: CompaniesComponent},
      {path:"new_company",component:CompanyFormComponent},
      {path:"edit_company/:id",component:CompanyFormComponent},
      {path: "clients",component:ClientsComponent},
      {path:"new_client",component:ClientFormComponent},
      {path:"edit_client/:id",component:ClientFormComponent},
      {path:"projects",component:ClientsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

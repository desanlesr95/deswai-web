import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './main/pages/login/login.component';
import { RegisterComponent } from './main/pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { DevelopersComponent } from './home/developers/developers.component';
import { CompaniesComponent } from './home/companies/companies.component';
import { ClientsComponent } from './home/clients/clients.component';
import { CompanyFormComponent } from './home/company-form/company-form.component';
import { ClientFormComponent } from './home/client-form/client-form.component';
import { ProjectsComponent } from './home/projects/projects.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    HomeComponent,
    DashboardComponent,
    DevelopersComponent,
    CompaniesComponent,
    ClientsComponent,
    CompanyFormComponent,
    ClientFormComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

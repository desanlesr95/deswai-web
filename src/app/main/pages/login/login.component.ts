import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string = "";
  public password: string = "";
  public token:string = ""

  constructor(public userService:UsersService,public router: Router) {
    
  }

  login() {
    console.log(this.email);
    console.log(this.password);
    const user = {mail: this.email, password: this.password};
    this.userService.login(user).subscribe( data => {
      console.log(data)
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/home');
      console.log(data);
    });
  }

  ngOnInit(): void {
    
    this.token = this.userService.getToken();
    console.log(this.token);
    if(this.token != ""){
      this.router.navigateByUrl('/home');
    }

  }

}

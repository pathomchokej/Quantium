import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo = "./images/logo.png";
  isForgotPassword = false;

  constructor() { }

  ngOnInit(): void {
  }

  private login(user:string, pass:string){
    // build JSON and send REST API to verify with backend
    // assume it's pass go to dashboard

  }

  private forgotPassword(){
    // build JSON and send to backend to send email reset password
    // go back to login page
  }

}

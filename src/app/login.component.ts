import { Component, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent {

  userName;
  password;
  showLoginFail: boolean = false;

  constructor(private router: Router) {

  }

  login() {
    this.showLoginFail = false;
    if (this.userName == "ehab" && this.password == "000")
      this.router.navigateByUrl('audit');
    else
      this.showLoginFail = true;
  }

}

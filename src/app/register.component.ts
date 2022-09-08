import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',  
})

export class RegisterComponent implements OnInit {
  title = 'feedback';
  mode = 1
  
  OrganizationTypes: any[] = [];
  

  clientFirstName;
  clientLastName;
  clientEmail;
  clientverification;
  clientUserName;
  clientPassword;
  clientRePassword;
  clientOrganizationName;
  clientOrganizationTypeId;
  clientJobTitle;

  constructor(private router: Router, private service: AppService) {    
    this.service.getorganizationType().subscribe((res: any[]) => {
      this.OrganizationTypes = res;
    });
  }

  ngOnInit() {   
  }

  Register() {
    this.router.navigateByUrl('login');
  }

  
}

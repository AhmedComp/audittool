import { Component, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',  
})

export class HomeComponent {
  title = 'feedback';

  constructor(private router: Router, private service: AppService) {    
    
  }

  
  
}

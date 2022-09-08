import { Component, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',  
})

export class FinishComponent {
  
  constructor(private router: Router) {    
  }

  back() {    
    this.router.navigateByUrl('home');
  }
}

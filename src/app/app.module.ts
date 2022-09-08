import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinishComponent } from './finish.component';
import { HomeComponent } from './home.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { AuditComponent } from './audit.component';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    AppComponent, FinishComponent, HomeComponent, RegisterComponent, LoginComponent, AuditComponent
  ],
  imports: [
    BrowserModule, FormsModule, RadioButtonModule, BrowserAnimationsModule,
    AppRoutingModule, HttpClientModule, AccordionModule, TooltipModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

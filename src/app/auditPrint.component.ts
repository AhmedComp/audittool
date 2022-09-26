import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auditPrint',
  templateUrl: './auditPrint.component.html',
})

export class AuditPrintComponent implements OnInit {
  mySections: any[] = [];
  load = false;
  startprint = false;
  logosrc ;
  AuditDate;
  AuditTime
  username

  constructor(private service: AppService) {
    this.mySections = JSON.parse(localStorage.getItem("AuditData"));
    this.AuditDate = localStorage.getItem("auditDate");
    this.AuditTime = localStorage.getItem("auditTime");
    this.username = localStorage.getItem("username");
    this.load = true;
  }

  ngOnInit() {    
  }


  getTotal(secid: number): string {    
    let str = "";
    let total = 0;
    let totalanswers = 0;
    let arr = this.mySections.filter(function (item) { return item.id == secid });
    for (var i = 0; i < arr[0].questions.length; i++) {
      if (arr[0].questions[i].currentAnswer != 'N/A') {
        total = total + arr[0].questions[i].maxPoint;
        totalanswers = totalanswers + (arr[0].questions[i].currentAnswer ? +arr[0].questions[i].currentAnswer : 0);
      }
    }
    return totalanswers.toString() + "/" + total.toString();
  }

  getTotalMax(secid: number): string {
    let str = "";
    let total = 0;
    let totalanswers = 0;
    let arr = this.mySections.filter(function (item) { return item.id == secid });
    for (var i = 0; i < arr[0].questions.length; i++) {
      if (arr[0].questions[i].currentAnswer != 'N/A') {
        total = total + arr[0].questions[i].maxPoint;
        totalanswers = totalanswers + (arr[0].questions[i].currentAnswer ? +arr[0].questions[i].currentAnswer : 0);
      }
    }
    return total.toString();
  }

  getTotalAudit(secid: number): string {
    let str = "";
    let total = 0;
    let totalanswers = 0;
    let arr = this.mySections.filter(function (item) { return item.id == secid });
    for (var i = 0; i < arr[0].questions.length; i++) {
      if (arr[0].questions[i].currentAnswer != 'N/A') {
        total = total + arr[0].questions[i].maxPoint;
        totalanswers = totalanswers + (arr[0].questions[i].currentAnswer ? +arr[0].questions[i].currentAnswer : 0);
      }
    }
    return totalanswers.toString();
  }

  getTotalPercentage(secid: number): number {
    let str = "";
    let total = 0;
    let totalanswers = 0;
    let arr = this.mySections.filter(function (item) { return item.id == secid });
    for (var i = 0; i < arr[0].questions.length; i++) {
      if (arr[0].questions[i].currentAnswer != 'N/A') {
        total = total + arr[0].questions[i].maxPoint;
        totalanswers = totalanswers + (arr[0].questions[i].currentAnswer ? +arr[0].questions[i].currentAnswer : 0);
      }
    }
    let value = (totalanswers * 100) / total;
    return Math.round(value * 10) / 10;
  }

  getPercentage(value: number): number {
    if (!value)
      value = 0;

    let val = (value * 100) / 5;
    return Math.round(val * 10) / 10;
  }

  calcMax(): string {
    let total = 0;
    for (var i = 0; i < this.mySections.length; i++) {
      total = total + Number.parseInt(this.getTotalMax(this.mySections[i].id));
    }
    return total.toString();
  }

  calcMaxAudit(): string {
    let total = 0;
    for (var i = 0; i < this.mySections.length; i++) {
      total = total + Number.parseInt(this.getTotalAudit(this.mySections[i].id));
    }
    return total.toString();
  }

  calcMaxPercentage(): number {
    let val = (Number.parseInt(this.calcMaxAudit()) * 100) / Number.parseInt(this.calcMax());
    return Math.round(val * 10) / 10;
  }

  getResultFinal(): string {
    if (this.calcMaxPercentage() < 50)
      return "Fail";
    else
      return "Success";
  }


  print() {
    this.startprint = true;
    setTimeout(() => {
      var divContents = document.getElementById("maincontent").innerHTML;
    var a = window.open('', '', 'height=600, width=900');
    a.document.write('<html>');
    a.document.write('<body>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();

    this.startprint = false;
    }, 500)

    
    
  }



}

import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { strictEqual } from 'assert';
import { environment } from '../environments/environment'
@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',

})

export class AuditComponent implements OnInit {

  sections: any[] = [];
  mySections: any[] = [];
  questions: any[] = [];
  myQuestions: any[] = [];
  load = false;
  error = false;
  underdeveloped=false;

  constructor(private router: Router, private service: AppService) {

    this.service.getSections().subscribe((res: any[]) => {
      this.sections = res;

      this.service.getQuestion().subscribe((res: any[]) => {
        this.questions = res;

        this.service.getauditQuestions().subscribe((res: any[]) => {
          this.myQuestions = res.filter(function (item) { return item.organizationType == environment.organizationType });

          let secid = this.myQuestions.map((function (item) { return item.sectionid }));
          let quesid = this.myQuestions.map((function (item) { return item.questionid }));

          this.mySections = this.sections.filter((function (item) { return secid.findIndex(x => { return x == item.id }) >= 0 }));
          this.mySections = this.mySections.map(function (item) { item.questions = []; return item });
          let myques = this.questions.filter((function (item) { return quesid.findIndex(x => { return x == item.id }) >= 0 }));

          for (var i = 0; i < this.mySections.length; i++) {
            let qes = myques.filter(function (item) { return item.section == this.mySections[i].id }, this);

            for (var j = 0; j < qes.length; j++) {
              this.mySections[i].questions.push(qes[j]);
            }
          }
          this.load = true;
        });
      });

    });




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

  audit() {

  }

  save() {
    this.error = true;
    this.underdeveloped=false;
  }

  reports() {

  }

  saveAction() {
    this.error = false;
    this.underdeveloped=true;
  }

}

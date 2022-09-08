import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

declare var $: any;

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {
  }

  getQuestion() {
    let URL = "assets/data/question.json";
    return this.http.get<any[]>(URL);
  }

  getorganizationType() {
    let URL = "assets/data/organizationType.json";
    return this.http.get<any[]>(URL);
  }

  getSections() {
    let URL = "assets/data/section.json";
    return this.http.get<any[]>(URL);
  }

  getauditQuestions() {
    let URL = "assets/data/auditQuestion.json";
    return this.http.get<any[]>(URL);
  }

  
 
}

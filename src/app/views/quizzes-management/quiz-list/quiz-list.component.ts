import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/core/services/rest-api.service';
import { Quiz } from 'src/app/shared/models/quiz';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  quizzes: Quiz[] = [];
  constructor(private restApi: RestApiService) {}

  ngOnInit() {
    this.getListOfQuizzes();
  }

  getListOfQuizzes() {
    this.restApi.getAllObjects('/quiz/all').subscribe(data => {
    this.quizzes = data;
    });
  }

}

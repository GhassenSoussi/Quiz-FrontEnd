import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesManagementRoutingModule } from './quizzes-management-routing.module';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizAddComponent } from './quiz-add/quiz-add.component';
import { QuizUpdateComponent } from './quiz-update/quiz-update.component';

@NgModule({
  declarations: [QuizListComponent, QuizAddComponent, QuizUpdateComponent],
  imports: [
    CommonModule,
    QuizzesManagementRoutingModule
  ]
})
export class QuizzesManagementModule { }

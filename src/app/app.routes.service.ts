
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { UsersListComponent } from './views/users-management/users-list/users-list.component';
import { UserAddComponent } from './views/users-management/user-add/user-add.component';
import { UserUpdateComponent } from './views/users-management/user-update/user-update.component';
import { QuizListComponent } from './views/quizzes-management/quiz-list/quiz-list.component';
import { QuizAddComponent } from './views/quizzes-management/quiz-add/quiz-add.component';
import { QuizUpdateComponent } from './views/quizzes-management/quiz-update/quiz-update.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboards/v1' },
  {
    path: 'dashboards', children:
      [
        { path: 'v1', component: Dashboard1Component },
      ]
  },
  {
    path: 'users-management', children:
      [
        { path: 'list', component: UsersListComponent },
        { path: 'add', component: UserAddComponent },
        { path: 'update/:id', component: UserUpdateComponent }
      ]
  },
  {
    path: 'quizzes-management', children:
      [
        { path: 'list', component: QuizListComponent },
        { path: 'add', component: QuizAddComponent },
        { path: 'update/:id', component: QuizUpdateComponent }
      ]
  },
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { RestApiService } from 'src/app/core/services/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  constructor(private restApi: RestApiService, private router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.restApi.getAllObjects('/user/all').subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(idUser: number) {
    this.restApi.deleteObjectById('/user/', idUser).subscribe(() => {
      this.getAllUsers();
    });
  }

  addUser() {
    this.router.navigateByUrl('users-management/add');
  }

  updateUser(idUser: number) {
    console.log('test');
    this.router.navigate(['users-management/update/', idUser]);
  }

}

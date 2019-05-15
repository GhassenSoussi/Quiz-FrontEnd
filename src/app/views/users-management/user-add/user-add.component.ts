import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestApiService } from 'src/app/core/services/rest-api.service';
import { Role } from 'src/app/shared/models/role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  addUserForm: FormGroup;
  roles: Role[] = [];

  constructor(private fb: FormBuilder, private restApi: RestApiService, private router: Router) { }

  ngOnInit() {
    this.addUserForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      role: this.fb.group({
        id: ['', [Validators.required]]
      })
    });
    this.getListOfRoles();
  }

  getListOfRoles() {
    this.restApi.getAllObjects('/role/all').subscribe(data => {
      this.roles = data;
    });
  }

  submitUser() {
    console.log(this.addUserForm);
    this.restApi.createObject('/user/add', this.addUserForm.value).subscribe(() => {
      this.router.navigateByUrl('/users-management/list');
    });
  }

}

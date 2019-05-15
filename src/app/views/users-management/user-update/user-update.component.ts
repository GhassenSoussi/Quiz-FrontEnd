import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/core/services/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { Role } from 'src/app/shared/models/role';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  user: User = new User();
  roles: Role[] = [];
  updateUserForm: FormGroup;

  constructor(private restApi: RestApiService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.updateUserForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      role: this.fb.group({
        id: ['', Validators.required]
      })
    });
    this.getUserById();
    console.log('display user data');
    this.getListOfRoles();
  }

  initForm() {
    this.updateUserForm = this.fb.group({
      firstName: [this.user.firstName, [Validators.required]],
      lastName: [this.user.lastName, [Validators.required]],
      email: [this.user.email, [Validators.required]],
      role: this.fb.group({
        id: [this.user.role.id, [Validators.required]]
      })
    });
  }

  getListOfRoles() {
    this.restApi.getAllObjects('/role/all').subscribe(data => {
      this.roles = data;
    });
  }


  getUserById() {
    const id = this.route.snapshot.paramMap.get('id');
    this.restApi.getObjectById('/user/', id).subscribe((data => {
      this.user = data;
      console.log(this.user);
      this.initForm();
    }));
  }

  submitUser() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(this.updateUserForm);
    this.restApi.updateObjectById('/user/update/', id, this.updateUserForm.value).subscribe(() => {
      this.router.navigateByUrl('/users-management/list');
    });
  }
}





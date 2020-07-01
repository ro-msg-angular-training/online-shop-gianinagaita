import {Component, OnInit} from '@angular/core';
import {RegisterModel} from "../model/register.model";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {ProductsService} from "../products.service";
import {UsersService} from "../users.service";
import {AuthService} from "../auth.service";
import {Route, Router} from "@angular/router";
import {UserModel} from "../model/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserModel = new UserModel();
  loginForm: FormGroup;
  hide = true;
  constructor(private formBuilder: FormBuilder, private userServices: UsersService, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])
    });
  }

  get name() {
    return this.loginForm.get('name');
  }

  get password() {
    return this.loginForm.get('password');
  }

  //for showing me the password
  //showing me the dates that i introduced
  onLogin() {
    //alert(this.user.name +' ' +this.user.email+ ' ' +this.user.password);
    this.user.username = this.name.value;
    this.user.password = this.password.value;
    this.authService.authenticateUser(this.user)
      .subscribe(data => {
          if (data) {
            console.log(data);
            this.router.navigate(['/products']);
          } else {
            console.log('Faild');
          }
        }
      );
  }

}

import {Component, OnInit} from '@angular/core';
import {UserModel} from "../model/user.model";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {RegisterModel} from "../model/register.model";
import {UsersService} from "../users.service";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup; //an instance of form
  hide = true;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'name': [this.user.name, [
        Validators.required
      ]],
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }

  onRegisterSubmit() {
    //alert(this.user.name +' ' +this.user.email+ ' ' +this.user.password);
    this.authService.registerUser(this.user)
      .subscribe(data => {
          if (data.success) {
            this.router.navigate(['/login']);
          } else {
            console.log('Faild');
          }
        }
      );
  }

}

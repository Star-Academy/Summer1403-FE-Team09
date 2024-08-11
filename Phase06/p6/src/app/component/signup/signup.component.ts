import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  formGroup: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d).+$'),
      Validators.minLength(8),
    ])
  });

  constructor(private userService: UserService, private location: Location) {}

  async onSubmit() {
    if (this.formGroup.valid) {
      const response = await this.userService.signUpUser({
        firstName: this.formGroup.value.firstName,
        lastName: this.formGroup.value.lastName,
        email: this.formGroup.value.email,
        password: this.formGroup.value.password,
      });

      if (response !== 'ok') {
        alert(response + "Hi");
        return;
      }
    } else {
      alert("There is an error in your fields.")
    }
  }
}

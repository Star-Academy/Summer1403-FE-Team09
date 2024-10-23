import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  formGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d).+$'),
    ]),
  });

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.userService
        .loginUser({
          email: this.formGroup.value.email,
          password: this.formGroup.value.password,
        })
        .then((response: string) => {
          if (response !== 'ok') {
            alert(response);
          } else {
            alert('login successfully.');
            this.router.navigate(['/']);
          }
        });
    }
  }
}

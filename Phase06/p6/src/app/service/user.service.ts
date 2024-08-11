import { Injectable } from '@angular/core';
import { User } from "../interface/book";
import { HttpClient } from "@angular/common/http";
import { USER_API_URL } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User | undefined = undefined;

  constructor(private http: HttpClient) { }

  getUser(): User | undefined {
    return this.user;
  }

  logOut(): void {
    this.user = undefined;
  }

  loginUser(user: { email: string, password: string }): string {
    let response: string = "";
    this.http.get<User[]>(USER_API_URL).subscribe((users: User[]) => {
      const u = users.find((u: User) => user.email === u.email);
      if (!u) {
        response = "User not found";
        return;
      } else if (u.password != user.password) {
        response = "Passwords do not match";
        return;
      }
      this.user = u;
      response = "ok";
    });

    return response;
  }

  signUpUser(user: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  }): Promise<string> {
    return new Promise((resolve) => {
      this.http.post<User>(USER_API_URL, user).subscribe(
        (u: User) => {
          if (!u) {
            this.user = u;
            resolve("User not found");
          } else {
            resolve("ok");
          }
        }
      );
    });
  }
}

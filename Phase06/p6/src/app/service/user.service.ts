import { Injectable } from '@angular/core';
import {User} from "../interface/book";
import {HttpClient, HttpResponse} from "@angular/common/http";
import { API_URL } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User | undefined = undefined;
  baseUrl: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUser(id: string): User | undefined {
    return this.user;
  }

  loginUser(user: {email: string, password: string}): string {
    let response: string = "";
    this.http.get<User[]>(this.baseUrl).subscribe((users: User[]) => {
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

  async signUpUser(user: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  }): Promise<string> {
    let response: string = "";
    await this.http.post<User>(this.baseUrl, user).subscribe((u: User) => {
      console.log(u);
      if (!u) {
        this.user = u;
        response = "User not found";
      }
      else
        response = "ok";
    });

    return response;
  }
}

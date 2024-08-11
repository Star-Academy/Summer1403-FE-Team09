import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from "../interface/book";
import { USER_API_URL } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private obs = new BehaviorSubject<User | undefined>(undefined);

  constructor(private http: HttpClient) { }

  subscribeUser(): Observable<User | undefined> {
    return this.obs.asObservable();
  }

  logOut(): void {
    this.obs.next(undefined);
  }

  loginUser(user: { email: string, password: string }): Promise<string> {

    return new Promise((resolve) => {
      this.http.get<User[]>(USER_API_URL).subscribe((users: User[]) => {
        const u = users.find((u: User) => user.email === u.email);
        if (!u) {
          resolve("User not found");
          return;
        } else if (u.password != user.password) {
          resolve("Passwords do not match");
          return;
        }
        this.obs.next(u);
        resolve("ok");
      });
    });
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
            resolve("User not found");
          } else {
            this.obs.next(u);
            resolve("ok");
          }
        }
      );
    });
  }
}

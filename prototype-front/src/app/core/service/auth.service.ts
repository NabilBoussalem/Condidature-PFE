import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { of, Observable, throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = [];
  constructor() {
    this.users.push({
      email: "user@gmail.com",
      pwd: "123456"
    })
  }

  public login(email: string, pwd: string): Observable<User | undefined> {
    let user = this.users.find(user => user.email == email && user.pwd == pwd)
    return of(user);
  }

  public signUp(email: string, pwd: string): Observable<User | undefined> {
    let user = this.users.find(user => user.email == email)
    if (!!user) {
      user = { email, pwd }
      this.users.push(user);
      return of(user);
    }

    return throwError(() => new Error("User already exists"));
  }

  public getStorage(): Storage {
    return localStorage
  }

}

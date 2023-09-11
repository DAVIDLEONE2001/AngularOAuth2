import {Injectable} from '@angular/core';
import {UserService} from "./user.service";

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private userService: UserService) {
  }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));

  }

  public getUser(): any {
    console.log(sessionStorage);
    this.userService.getCurrentUser().subscribe(
      data => {
        console.log(data);
        return data;
      }
    );

  }
}

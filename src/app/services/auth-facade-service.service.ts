import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, switchMap } from 'rxjs';
import { TypeUser } from '../interfaces/type-user.interface';
import { AuthService } from './auth-service.service';
import { LoginService } from './login-service.service';
import { UserService } from './user-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeServiceService {

  constructor(private authService: LoginService, private userService: UserService) {}

  login(username: string, password: string): void {
    this.authService.auth({ username, password });
    // this.authService.
  }

  logout(): void {
    this.authService.logout();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  getUsers(): Observable<any> {
    return this.userService.getUsers();
  }

  getUserById(id: number): Observable<any> {
    return this.userService.getUserById(id);
  }

  getUserTypes(): Observable<any> {
    return this.userService.getTypesUsers();
  }

  getCurrentUser(): Observable<any> {
    return this.authService.getCurrentUser();
  }


  

}

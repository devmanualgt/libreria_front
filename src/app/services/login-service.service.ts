import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, tap } from 'rxjs';
import { TypeUser } from '../interfaces/type-user.interface';
import { Router } from '@angular/router';
import { MessageService } from './message-service.service';
import { UserLogin } from '../interfaces/user.interface';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router, private message: MessageService) {}

  getToken() {
    return localStorage.getItem('accessToken');
  }

  setToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  getCurrentUser(): any {
    const currentUserString = localStorage.getItem('currentUser');
    return currentUserString ? JSON.parse(currentUserString) : null;
  }

  auth(post: UserLogin) {
    return this.http.post<any>(`${this.apiUrl}auth/login`, post).subscribe({
      next: (response) => {
        this.setToken(response.records.accessToken);
        this.router.navigate(['/welcome']);
      },
      error: (error) => {
        this.message.errorAlert(error.error.message);
      }
    });
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      localStorage.setItem('currentUser', JSON.stringify(decodedToken));
      const expirationDate = new Date(decodedToken.exp * 1000);
      return expirationDate > new Date();
    }
    return false;
  }
}

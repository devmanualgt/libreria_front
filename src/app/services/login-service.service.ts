import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, tap } from 'rxjs';
import { TypeUser } from '../interfaces/type-user.interface';
import { Router } from '@angular/router';
import { MessageService } from './message-service.service';
import { UserLogin } from '../interfaces/user.interface';
import { jwtDecode } from 'jwt-decode';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
    private message: MessageService
  ) {}

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

  auth(post: UserLogin): Promise<any> {
    return this.http
      .post<any>(`${this.apiUrl}auth/login`, post)
      .toPromise()
      .then((response) => {
        this.setToken(response.records.accessToken);
        this.router.navigate(['/welcome']);
        return response;
      })
      .catch((error) => {
        this.message.errorAlert(error.error.message);
        throw error; // O manejar el error
      });
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  async isLoggedIn() {
    const token = this.getToken();
    if (token) {
      const tokenJWT = await this.descrptoJWT(token);
      const decodedToken: any = jwtDecode(tokenJWT);
      localStorage.setItem('currentUser', JSON.stringify(decodedToken));
      const expirationDate = new Date(decodedToken.exp * 1000);
      return expirationDate > new Date();
    }
    return false;
  }

  async descrptoJWT(encrypted: any) {
    const secretKey = environment.SECRET_KEY_AUTH;
    const decryptedBytes = CryptoJS.AES.decrypt(encrypted, secretKey);
    const decrypted = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decrypted;
  }
}

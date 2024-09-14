import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { NewUser } from '../interfaces/new-user.interface';
import { map, Observable, of } from 'rxjs';
import { MessageService } from './message-service.service';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../environments/environment';
import { Book } from '../interfaces/all-books.interface';
import { newBook } from '../interfaces/new-book';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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
    if (currentUserString) {
      return JSON.parse(currentUserString);
    }
    return null;
  }

  auth(post: UserLogin) {
    return this.http.post<any>(`${this.apiUrl}auth/login`, post).subscribe({
      next: (response) => {
        this.setToken(response.records.accessToken);
        this.router.navigate(['/welcome']);
      },
      error: (error) => {
        error;
        // alert(error.error.message);
        this.message.errorAlert(error.error.message);
      },
    });
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  // libros-----------------------------

  getAllBooks(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${this.getToken()}`,
      // 'access_token': `Bearer ${this.getToken()}`,
      // 'accessToken': `${this.getToken()}`,
    });

    return this.http.get<any>(`${this.apiUrl}books`, { headers });
  }
  newBook(newBook: newBook) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${this.getToken()}`,
    });

    return this.http
      .post<any>(`${this.apiUrl}books`, newBook, { headers })
      .subscribe({
        next: (response) => {
          response;
          this.message.successAlert();
          this.router.navigate(['/welcome']);
        },
        error: (error) => {
          error;
          this.message.errorAlert(error.error.message);
        },
      });
  }

  getBookByid(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${this.getToken()}`,
    });
    return this.http.get(`${this.apiUrl}books/${id}`, { headers });
  }

  deleteBook(bookId: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${this.getToken()}`,
    });

    return this.http
      .delete<any>(`${this.apiUrl}books/${bookId}`, { headers })
      .subscribe({
        next: (response) => {
          // this.message.deleterAlert();
          this.message.successAlert(),
            setTimeout(() => {
              window.location.reload();
            }, 2000);
        },
        error: (error) => {
          this.message.errorAlert(error.error.message);
        },
      });
  }

  updateBook(bookId: string, updatedData: newBook) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${this.getToken()}`,
    });

    return this.http
      .put<newBook>(`${this.apiUrl}books/${bookId}`, updatedData, { headers })
      .pipe(map((data: newBook) => data));
  }

  //pendientes de implementar

  newUser(newUser: NewUser) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${this.getToken()}`,
    });

    return this.http
      .post<any>(`${this.apiUrl}/users/types`, newUser, { headers })
      .subscribe({
        next: (response) => {
          response;
          this.message.successAlert();
          this.router.navigate(['/welcome']);
        },
        error: (error) => {
          error;
          this.message.errorAlert(error.error.message);
        },
      });
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (token) {
      // console.log(token);
      const decodedToken: any = jwtDecode(token); // Decodifico el token
      // console.log(decodedToken);
      localStorage.setItem('currentUser', JSON.stringify(decodedToken));

      const expirationDate = new Date(decodedToken.exp * 1000); // Multiplico por 1000 para convertir a milisegundos
      return expirationDate > new Date(); // true or false
    }
    return false;
  }

  getUsers(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${this.getToken()}`,
    });

    return this.http.get(`${this.apiUrl}/users`, { headers });
  }

  getUserByid(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${this.getToken()}`,
    });
    return this.http.get(`${this.apiUrl}/users/${id}`, { headers });
  }

  GetTypesUsers(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${this.getToken()}`,
    });
    return this.http.get(`${this.apiUrl}/users/types`, { headers });
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeUser } from '../interfaces/type-user.interface';
import { environment } from '../environments/environment';
import { MessageService } from './message-service.service';
import { NewUser } from '../interfaces/new-user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private message: MessageService) {}

  getUsers(): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get(`${this.apiUrl}users`, { headers });
  }

  async getUserById(id: number): Promise<any> {
    const headers = this.createHeaders();
    try {
      const respose = await this.http
        .get<any>(`${this.apiUrl}users/${id}`, { headers })
        .toPromise();
      if (respose['status']) {
        return respose;
      }
    } catch (error) {}
  }

  getTypesUsers(): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get(`${this.apiUrl}/users/types`, { headers });
  }

  newUser(newUser: NewUser) {
    const headers = this.createHeaders();
    return this.http
      .post<any>(`${this.apiUrl}/users/types`, newUser, { headers })
      .subscribe({
        next: (response) => {
          this.message.successAlert();
        },
        error: (error) => {
          this.message.errorAlert(error.error.message);
        },
      });
  }

  // Helper function to create headers with token
  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: `${localStorage.getItem('accessToken')}`,
    });
  }
}

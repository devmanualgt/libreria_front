import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeUser } from '../interfaces/type-user.interface';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {  }

  // Obtener detalles de usuario por su ID
  getUserDetails(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}users/${userId}`);
  }


  getUserByid(id:number, token:string): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'access_token': token,
      // 'access_token': `${this.getToken()}`,
  
    });
    return this.http.get(`${this.apiUrl}users/${id}`, { headers });
 
  }

}

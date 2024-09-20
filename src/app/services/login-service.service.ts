import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, tap } from 'rxjs';
import { TypeUser } from '../interfaces/type-user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = environment.apiUrl;
  private isAuthenticated = false;
  

  constructor(private http: HttpClient,private router: Router) {}

  // Simulación de un login. Podrías hacerlo con una API real.
  
  // login(username: string, password: string): Observable<TypeUser> {
  //   return this.http.post<TypeUser>(`${this.apiUrl}auth/login`, { username, password }).pipe(
  //     tap(() => this.isAuthenticated = true) // Marca al usuario como autenticado
  //   );
  // }


  getToken() {
    return localStorage.getItem('accessToken');
  }
  
  setToken(token:string): void {
    localStorage.setItem('accessToken', token);
  }


  login(username: string, password: string ){
    
    return this.http.post<any>(`${this.apiUrl}auth/login`,{username,password}).subscribe({
      next: (response)=> {
        
        this.setToken(response.records.accessToken);
        this.isAuthenticated = true
        this.router.navigate(['/welcome']);
        
      },
      error: (error) => {
        error;
        // alert(error.error.message);
        // this.message.errorAlert(error.error.message);
        alert(error.error.message)
        this.isAuthenticated = false
      }
      
    }); 
  }

  logout(): void {
    this.isAuthenticated = false;
    // Otras lógicas como eliminar tokens de autenticación o llamar a un endpoint de logout.
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}

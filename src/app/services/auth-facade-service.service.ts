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
  private apiUrl = environment.apiUrl;

  constructor(private loginService: LoginService, private userService: UserService) { }


  // login(username: string, password: string): Observable<any> {
  //   return this.loginService.login(username, password).pipe(
  //     switchMap(user => this.userService.getUserDetails(user.id))
  //   );
  // }
  
  login(username: string, password: string) {
    this.loginService.login(username, password)
  }

  getToken(){
    return this.loginService.getToken()
  }

  // auth(username: string, password: string ){
    
  //   return this.http.post<any>(`${this.apiUrl}auth/login`,post).subscribe({
  //     next: (response)=> {
        
  //       this.setToken(response.records.accessToken);
  //       this.router.navigate(['/welcome']);
        
  //     },
  //     error: (error) => {
  //       error;
  //       // alert(error.error.message);
  //       this.message.errorAlert(error.error.message);
  //     }
      
  //   }); 
  // }

  logout(): void {
    this.loginService.logout();
  }

  // getUserProfile(): Observable<TypeUser> {
  //   return this.userService.getUserProfile();
  // }

  

}

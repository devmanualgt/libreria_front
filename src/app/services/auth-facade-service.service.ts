import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { BehaviorSubject, Observable, Subject, switchMap } from 'rxjs';
import { TypeUser } from '../interfaces/type-user.interface';
import { AuthService } from './auth-service.service';
import { LoginService } from './login-service.service';
import { UserService } from './user-service.service';
import { HttpHeaders } from '@angular/common/http';
import { UserInformation, userInit } from '../interfaces/facade-user.interface';
@Injectable({
  providedIn: 'root',
})
export class AuthFacadeServiceService {
  public userData = new BehaviorSubject<UserInformation | null>(null); // Inicialmente null

  constructor(
    private authService: LoginService,
    private userService: UserService
  ) {
    // Al iniciar la aplicación, intenta cargar el perfil si está logueado
    this.loadUserProfileIfLoggedIn();
  }

  // Método para cargar el perfil si está logueado
  private async loadUserProfileIfLoggedIn(): Promise<void> {
    const isLoggedIn = await this.authService.isLoggedIn();
    if (isLoggedIn) {
      const currentUser = this.authService.getCurrentUser();
      if (currentUser) {
        const userInfo = await this.userService.getUserById(currentUser.sub);
        this.userData.next(userInfo['records']);
      }
    }
  }

  async login(username: string, password: string): Promise<void> {
    const login = await this.authService.auth({ username, password });
    const userInfo = await this.userService.getUserById(
      login['records']['user']['id']
    );
    this.userData.next(userInfo['records']);
  }

  logout(): void {
    this.authService.logout();
    this.userData.next(null); // Reinicia los datos al cerrar sesión
  }

  getProfile(): Observable<UserInformation | null> {
    // Devuelve un observable para permitir la suscripción
    return this.userData.asObservable();
  }

  async isLoggedIn(): Promise<boolean> {
    return await this.authService.isLoggedIn();
  }

  getUsers(): Observable<any> {
    return this.userService.getUsers();
  }

  async getUserById(id: number): Promise<any> {
    const user = await this.userService.getUserById(id);
    this.userData.next(user['records']);
    return user;
  }

  getUserTypes(): Observable<any> {
    return this.userService.getTypesUsers();
  }

  getCurrentUser(): Observable<any> {
    return this.authService.getCurrentUser();
  }
}

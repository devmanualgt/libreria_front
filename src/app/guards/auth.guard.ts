import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
import { AuthFacadeServiceService } from '../services/auth-facade-service.service';

export const authGuard: CanMatchFn = (route, state) => {
  // const authService = inject(AuthService);
  const authService = inject(AuthFacadeServiceService);

  // return authService.getAuthToken();
  return authService.isLoggedIn();

};

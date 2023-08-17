import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Inject, Injectable, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {
  const router: Router = inject(Router);
  const authService: AuthService = inject(AuthService);
  if (authService.isLoggedIn !== true) {
    router.navigate(['sign-in']);
  }
  return true;
};

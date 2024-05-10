import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

var token = 'token';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem(token) == null || localStorage.getItem(token) == "" || localStorage.getItem(token) == undefined)
    {
      inject(Router).navigateByUrl('/login')
      return false;
    } 
  return true;
};

export const expireGuard: CanActivateFn = (route, state) => {
  const localToken = localStorage.getItem(token);
  if (!localToken || localToken === "") {
    inject(Router).navigateByUrl('/login');
    return false;
  }

  const decodedToken: any = jwtDecode(localToken);
  const expirationTime = decodedToken.exp * 1000;
  const currentTime = Date.now();
  if (currentTime > expirationTime) {
    inject(Router).navigateByUrl('/login');
    return false;
  }
  return true
}


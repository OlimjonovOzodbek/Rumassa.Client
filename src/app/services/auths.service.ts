import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject, map } from 'rxjs';
import { Register } from '../interfaces/register';
import { Response } from '../interfaces/response';
import { Login } from '../interfaces/login';
import { TokenModel } from '../interfaces/token-model';

@Injectable({
  providedIn: 'root'
})
export class AuthsService {

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private router: Router) { }
  tokenKey = "token"

  register(data: Register): Observable<Response> {
    return this.http.post<Response>(`${this.apiUrl}Auth/Register`, data).pipe(
      map((response) => {
        console.log(response)
        if (response.isSuccess == true) {
          console.log("Registered");
        }
        this.router.navigateByUrl('/register')
        return response;
      })
    );
  }

  login(data: Login): Observable<TokenModel> {
    console.log("Hi!")
    return this.http.post<TokenModel>(`${this.apiUrl}Auth/Login`, data).pipe(
      map((response) => {
        if (response.isSuccess) {
          //localStorage.clear();
          localStorage.setItem(this.tokenKey, response.token)
        }
        this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/home']);
            setTimeout(() => {
            window.location.reload();
            }, 1);
        });

        return response;
      })
    );
  }

  logOut() {
    localStorage.removeItem(this.tokenKey);
  }

  isAuthorized() {
    var token = localStorage.getItem(this.tokenKey);
    if (token == null || token == "") {
      return false;
    }
    return true;
  }

  
}

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { Register } from 'src/app/models/register.model';
import { Login } from 'src/app/models/login.model';
import { Logout } from 'src/app/models/logout.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(username: string, email: string, password: string, confirmPassword: string): Observable<Register> {
    return this.http.post<Register>('http://localhost:8000/api/register',
      {
        "name": username,
        "email": email,
        "password": password,
        "password_confirmation": confirmPassword
      })
    .pipe(catchError(this.handleError))
  }

  login(email: string, password: string): Observable<Login> {
    return this.http.post<Login>('http://localhost:8000/api/login',
      {
        "email": email,
        "password": password,
      })
    .pipe(catchError(this.handleError))
  }

  logout(token: any): Observable<Logout> {
    return this.http.post<Logout>('http://localhost:8000/api/logout',
    {},
    {
      headers: new HttpHeaders()
      .set("Authorization", `Bearer ${token}`)
      .set("Accept", "application/json"),
    })
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured'
    if (!errorRes.error) {
        return throwError(errorMessage)
    }
    if (errorRes.error.email) {
      errorMessage = errorRes.error.email
    }
    if (errorRes.error.password) {
      errorMessage = errorMessage + errorRes.error.password
    }
    if (errorRes.error.error) {
      errorMessage = errorRes.error.error
    }
    return throwError(errorMessage)
  }

}

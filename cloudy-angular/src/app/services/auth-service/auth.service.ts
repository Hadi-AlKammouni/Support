import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { Register } from 'src/app/models/register.model';

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
    return throwError(errorMessage)
  }

}

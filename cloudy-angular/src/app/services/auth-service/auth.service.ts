import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Register } from 'src/app/models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(name: string, email: string, password: string, confirmPassword: string): Observable<Register> {
    return this.http.post<Register>('http://localhost:8000/api/register',
      {
        "name": name,
        "email": email,
        "password": password,
        "password_confirmation": confirmPassword
      })
  }

}

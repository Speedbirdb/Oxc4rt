import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor(private http: HttpClient) { }

  // signUp(email: string, password: string): Observable<any> { }
  // verifyCode(email: string, code: string): Observable<any> { }
  // resendCode(email: string): Observable<any> { }
}

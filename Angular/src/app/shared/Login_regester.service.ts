import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Login_regester } from './Login_regester';

@Injectable()
export class LoginRegesterService {
    constructor(private http: HttpClient) { }

    readonly baseURL = 'http://localhost:3000/';

    postauth(emp:Login_regester) {
      return this.http.post(this.baseURL+`auth`, emp);
    }
    postregester(emp: Login_regester) {
        return this.http.post(this.baseURL+`inscription`, emp);
      }
}
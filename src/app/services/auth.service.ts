import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
  })
};

@Injectable({
  providedIn: 'root'
})
// export class AuthService extends BaseService {
export class AuthService {
  protected url = 'http://10.0.0.103:65108';
  constructor(protected http: HttpClient) {
  }

  login(username: string, password: string) {
    const data = "grant_type=password&username=" + username + "&password=" + password;
    // const data = {
    //   grant_type: 'password',
    //   username,
    //   password,
    // };
    // return this.http.post(`${this.url}/api/oauth/token?grant_type=password&username=${username}&password=${password}`, {}, httpOptions);
    return this.http.post(`${this.url}/api/oauth/token`, data);
  }
}

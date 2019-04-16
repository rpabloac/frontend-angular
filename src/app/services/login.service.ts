import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceBase } from './.service';
import { CredencialModel } from '../models/credencial.model';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService extends ServiceBase {
  constructor(public http: HttpClient) {
    super(http);
    this.httpBaseURL = environment.APIUrl + '/v1/Login';
  }

  login() {
    return null;
  }

  logout() {
    return null;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { UserInfo } from '../models/basicInfoUser';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getUserData(data: any): Observable<UserInfo[]> {
    let params = new HttpParams();
    params = params.append('email', data.email);
    params = params.append('password', data.password);
    return this.http.get<UserInfo[]>('http://localhost:4000/users', {
      params: params,
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../models/infoUser';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  //User------------------------------------------------------------------------------------------------------------------------
  getUserData(email: string, psw: string): Observable<UserInfo[]> {
    let params = new HttpParams();
    params = params.append('email', email);
    params = params.append('psw', psw);
    return this.http.get<UserInfo[]>('http://localhost:4000/users', {
      params: params,
    });
  }
}

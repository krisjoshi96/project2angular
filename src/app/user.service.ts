import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL="http://localhost:8090/users";
  constructor(private httpClient:HttpClient) { }


  getUsersList():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`)
  }



  createUser(user:User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,user);
  }
}



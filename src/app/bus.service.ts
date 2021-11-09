import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from './bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  private baseURL="http://localhost:8090/buses";
  constructor(private httpClient:HttpClient) { }


  getBusList():Observable<Bus[]>{
    return this.httpClient.get<Bus[]>(`${this.baseURL}`)
  }


  createBus(bus:Bus): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,bus);
  }
 
}


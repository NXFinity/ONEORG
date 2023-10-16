import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  get apiUrl(): string {
    return environment.serverUrl;
  }

  post(url: string, body: any, p: {}): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}${url}`, body);
  }

  get(url: string, headers: { Authorization: string } | {}): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}${url}`, { headers });
  }

  put({url, data}: { url: string, data: any }): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}${url}`, data);
  }

  delete(url: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}${url}`);
  }

  patch({url, data}: { url: string, data: any }): Observable<any> {
    return this.httpClient.patch(`${this.apiUrl}${url}`, data);
  }
}

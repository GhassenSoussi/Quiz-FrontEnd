import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAllObjects(url: string): Observable<any> {
    return this.http.get<any>(this.apiURL + url);
  }

  getObjectById(url: string, id: any): Observable<any> {
    return this.http.get<any>(this.apiURL + url + id);
  }

  createObject(url: string, object: Object): Observable<any> {
    return this.http.post<any>(this.apiURL + url, object);
  }

  updateObjectById(url: string, id: any, object: Object): Observable<any> {
    return this.http.put<any>(this.apiURL + url + id, object);
  }

  deleteObjectById(url: string, id: number): Observable<any> {
    return this.http.delete<any>(this.apiURL + url + id);
  }




}

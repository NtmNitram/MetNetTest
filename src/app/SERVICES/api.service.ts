import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) {}

  public getAllPelis(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
}







/*@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) {}

  public getAllPelis(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
}*/
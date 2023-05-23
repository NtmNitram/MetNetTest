import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_PELIS = "";

  constructor(private http: HttpClient) {}

  public getAllPelis(): Observable<any>{
    return this.http.get(this.API_PELIS);
  }
}
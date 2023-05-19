import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// INTENTE USAR INJECTABLES, OBSERVABLES PERO ME VOLVI UN OCHO
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = 'f269218f9ac41fda847402ed563424ef';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  // Obtiene las películas populares según la página especificada
  getPopularMovies(page: number): Observable<any> {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=en-US&page=${page}`;
    return this.http.get<any>(url);
  }

  // Obtiene los detalles de una película según su ID
  getMovieDetails(movieId: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}&language=en-US`;
    return this.http.get<any>(url);
  }

  // Obtiene los créditos de una película según su ID
  getMovieCredits(movieId: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${movieId}/credits?api_key=${this.apiKey}&language=en-US`;
    return this.http.get<any>(url);
  }
}
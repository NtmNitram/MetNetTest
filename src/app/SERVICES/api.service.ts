import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  private apiKey = 'f269218f9ac41fda847402ed563424ef';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getPopularMovies(page: number) {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=en-US&page=${page}`;
    return this.http.get(url);
  }

  getMovieDetails(movieId: number) {
    const url = `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(url);
  }

  getMovieCredits(movieId: number) {
    const url = `${this.baseUrl}/movie/${movieId}/credits?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(url);
  }
}
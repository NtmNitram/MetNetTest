import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../../INTERFACES/movie';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = []; // Array de películas
  apiKey = 'f269218f9ac41fda847402ed563424ef';
  page = 1; // Página actual de resultados de películas

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMovies(); // Se obtienen las películas al inicializar el componente
  }

  // Obtiene las películas populares de la API y las asigna a la variable 'movies'
  getMovies(): void {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=${this.page}`;

    this.http.get<any>(url).subscribe(data => {
      this.movies = data.results;
    });
  }

  // Carga más películas al incrementar el número de página y llamar a 'getMovies'
  loadMoreMovies(): void {
    this.page++;
    this.getMovies();
  }

  
}








import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface MovieDetails {
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  genres: { id: number, name: string }[];
  spoken_languages: { english_name: string, name: string }[];
  budget: number;
  production_companies: { id: number, logo_path: string, name: string, origin_country: string }[];
}

@Component({
  selector: 'app-movie-details',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieId!: number;
  movieDetails!: MovieDetails;
  apiKey = 'f269218f9ac41fda847402ed563424ef';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieId = Number(params.get('id'));
      this.getMovieDetails();
    });
  }

  getMovieDetails(): void {
    const url = `https://api.themoviedb.org/3/movie/${this.movieId}?api_key=${this.apiKey}&language=en-US`;

    this.http.get<MovieDetails>(url).subscribe(data => {
      this.movieDetails = data;
    });
  }
}
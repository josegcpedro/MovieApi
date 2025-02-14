import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url = "https://api.themoviedb.org/3/search/movie";
  private apiKey = "38f3798081f4134f4e79acc8d383a558"

  private http = inject(HttpClient)

  getMovies(movieName: string) {
    const params = new HttpParams()
      .set('query', movieName)
      .set('api_key', this.apiKey)

    return this.http.get<MovieResponse>(this.url, { params });
  }
}

export interface Movie {
  title: string;
  overview: string;
  original_language: string;
}

export interface MovieResponse {
  results: Movie[];
}

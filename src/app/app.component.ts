import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies.service';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  movie = "titanic";
  movieData: any[] = []; //tableau vide
  constructor(private movieServices: MoviesService) { };

  ngOnInit() {
    this.movieServices.getMovies(this.movie).subscribe((data: any) => {
      if (data?.results) {
        this.movieData = data.results.filter((movie: any) => movie.original_language === "fr");
      }
      console.log(this.movieData);
    })
  }
}

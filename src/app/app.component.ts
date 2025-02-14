import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  movie = "shrek";
  movieTitle: any[] = [];

  constructor(private movieServices: MoviesService) { };

  ngOnInit() {
    this.movieServices.getMovies(this.movie).subscribe((data: any) => {
      console.log(data)
      if (data?.results) {
        this.movieTitle = data.results
          .filter((movie: any) => movie.original_language === "en")
          .map((movie: any) =>movie.title);
      }
      console.log(this.movieTitle)
    })
  }
}

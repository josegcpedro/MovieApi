import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  movie = "";
  movies: { title: string; description: string }[] = [];

  constructor(private movieServices: MoviesService) { };

  getMovie(movie: string) {
    this.movie = movie;
    this.movieServices.getMovies(this.movie).subscribe((data) => {
      if (data?.results) {
        this.movies = data.results
          .filter((movie: any) => movie.original_language === "en")
          .map((movie: any) => ({
            title: movie.title,
            description: movie.overview
      }))
      }
    })
  }
}

import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  movie = "";
  movieTitle: any[] = [];
  movieDescription: any[] = [];

  constructor(private movieServices: MoviesService) { };

  getMovie(movie: string){
    this.movie = movie;
    this.movieServices.getMovies(this.movie).subscribe((data: any) => {
    if(data?.results){
      const filteredMovies = data.results.filter((movie: any) => movie.original_language === "en");
      this.movieTitle = filteredMovies.map((movie:any) => movie.title);
      this.movieDescription = filteredMovies.map((movie:any) => movie.overview);
    }
  });
}
}

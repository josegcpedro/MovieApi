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
  constructor(private movieServices: MoviesService) { };

  ngOnInit() {
  this.movieServices.getMovies(this.movie).subscribe((data) =>{
    console.log(data);
  })
  }
}

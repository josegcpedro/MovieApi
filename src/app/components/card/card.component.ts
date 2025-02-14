import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Output() newMovie = new EventEmitter<string>();
  movie: string = "";

  onSubmit(){
    this.newMovie.emit(this.movie)
    this.movie = "";
  }
}

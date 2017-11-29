import { Component, OnInit } from '@angular/core';
import { Cinema } from '../../services/Cinema.service'

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {

  constructor(private cines: Cinema) { }

  movies;
  ngOnInit() {
    this.movies = this.cines.getPelicula(1);
  }

}

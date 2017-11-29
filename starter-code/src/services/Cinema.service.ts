import { Injectable } from '@angular/core';
import  sampleMovies  from '../sample-movies'

@Injectable()
export class Cinema {

  movies: Array<any> = sampleMovies;

  constructor() { }

  getMovies() {

    return this.movies;
  }

  getPelicula(identifier:number){
    for(var i = 0; i< this.movies.length; i++){
      if(this.movies[i].id == identifier){
        return this.movies[i];
      }
    }
  }
}

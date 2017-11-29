import { Component, OnInit } from '@angular/core';
import { Cinema } from '../../services/Cinema.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {

  constructor(private cines: Cinema, private route: ActivatedRoute, private router: Router ) {
    this.route.params
      .subscribe((params) => this.movies = params['movies']);
  }
  movies;
  ngOnInit() {
    this.movies = this.cines.getMovies();
  }
}

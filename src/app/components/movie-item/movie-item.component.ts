import { Movie } from './../../modal';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
@Input() movie:Movie;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  openMovieExpansion(){
    this.router.navigate(['/movieExpansion/'+ this.movie.id]);

    
  }

}

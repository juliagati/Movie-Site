import { Movie } from './../../modal';
import { ReadJsonFileService } from './../../read-json-file.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
movies;

  constructor(private readJsonFileService:ReadJsonFileService) {}


  ngOnInit(): void {
    this.readJsonFileService.getMovies().subscribe((movies)=>{
      this.movies=movies;
    })
  }

}

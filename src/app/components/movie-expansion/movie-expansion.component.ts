import { TrailerComponent } from './../trailer/trailer.component';
import { ReadJsonFileService } from './../../read-json-file.service';
import { Movie } from './../../modal';
import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-expansion',
  templateUrl: './movie-expansion.component.html',
  styleUrls: ['./movie-expansion.component.css']
})
export class MovieExpansionComponent implements OnInit {
 
movie:Movie;
id:String;
name:String;
description:String;
Rating:String;
url:any;

  constructor(private sanitizer:DomSanitizer, private modalService:NgbModal , private route:ActivatedRoute, private readJsonFileService:ReadJsonFileService ) {
    
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get(('id'));
    this.readJsonFileService.getMovies().subscribe((movies:Movie[])=>{

      this.movie =movies.find((movie)=>movie.id===this.id);
      
      
    })
  }

  openTrailer(){
    const modelRef = this.modalService.open(TrailerComponent);
    modelRef.componentInstance.movie =this.movie;
    
  }

}
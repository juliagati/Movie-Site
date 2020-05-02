import { Movie } from './../../modal';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {
movie:Movie;
url:any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    console.log(this.movie);
    
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.movie.trailer);  
  }


}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // create vars
  query: string;
  artists: object;
  currentArtist: object;

  showArtist(item){
    // assign to (this = this component) var 'query' the value of item's (artist's) 'name', passed through the (click) event
    this.query = item.name;
    // assign to var 'currentArtist' the value of item (the entire object 'artist'), passed through the (click) event
    this.currentArtist = item;
    // toggle btw highlight and no highlight
    item.highlight = !item.highlight;
  }

  hoverArtist(item){
    // toggle btw highlight and no highlight
    item.highlight = !item.highlight;
  }

  constructor( private http: HttpClient ){
    // instantiate the variables (give'em an initial value)
    this.query = '';
    // this.artists = []; --> we no longer need this initialization
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json')
    .subscribe(data =>{
      this.artists = data;
    })
  }

}

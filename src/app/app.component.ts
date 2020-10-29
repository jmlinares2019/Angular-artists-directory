import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selected: string;
  artists: object;

  showArtist(item){
    this.selected = item.name;
    // toggle btw highlight and no highlight
    item.highlight = !item.highlight;
  }

  constructor( private http: HttpClient ){
    // instantiate the variables (give'em an initial value)
    this.selected = '';
    // this.artists = []; --> we no longer need this initialization
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json')
    .subscribe(data =>{
      this.artists = data;
    })
  }

}

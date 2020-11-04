import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {

  @Input() currentArtist: any;

  constructor() { }

  ngOnInit(): void {
  }

}

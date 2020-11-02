import { BrowserModule } from '@angular/platform-browser';
// NgModule permite, entre otras cosas, el 2-way binding [()]
import { NgModule } from '@angular/core';
// FormsModule también es necesario para la directiva ngModel
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ArtistItemsComponent } from './artist-items/artist-items.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';

import { SearchArtistsPipe } from './search-artists.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArtistItemsComponent,
    SearchArtistsPipe,
    ArtistDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

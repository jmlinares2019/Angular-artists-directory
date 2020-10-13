import { BrowserModule } from '@angular/platform-browser';
// NgModule permite, entre otras cosas, el 2-way binding [()]
import { NgModule } from '@angular/core';
// FormsModule también es necesario para la directiva ngModel
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

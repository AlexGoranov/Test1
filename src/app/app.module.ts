import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OddNumbersComponent } from './components/odd-numbers/odd-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    OddNumbersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

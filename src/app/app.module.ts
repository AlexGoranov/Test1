import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OddNumbersComponent } from './components/odd-numbers/odd-numbers.component';
import { EvenNumbersComponent } from './components/even-numbers/even-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    OddNumbersComponent,
    EvenNumbersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

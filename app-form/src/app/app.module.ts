import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JsonFormModule } from 'json-form';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

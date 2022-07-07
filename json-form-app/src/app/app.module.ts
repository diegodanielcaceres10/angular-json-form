import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularJsonFormModule } from 'angular-json-form';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AngularJsonFormModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

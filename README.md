# Angular JSON Form

## Installation

```sh
npm install angular-json-form
```

## Usage

#### 1. Import the `AngularJsonFormModule`:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

```

#### 2. Add the component on html template:

```html
<lib-angular-json-form [form]="form" (send)="send($event)"></lib-angular-json-form>
```

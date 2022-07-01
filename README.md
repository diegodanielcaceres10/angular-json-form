# Angular JSON Form

## Installation

```sh
npm install angular-json-form
```

## Usage

#### 1. Import the `AngularJsonFormModule`:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JsonFormAngularModule } from 'json-form-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonFormAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

#### 2. Add the component on html template:

```html
<json-form-angular [form]="form" (send)="send($event)"></json-form-angular>
```

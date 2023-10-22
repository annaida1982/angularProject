import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent} from './card/card.component';
import { FormComponent } from './nav/nav.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component'
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    Card2Component,
    Card3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

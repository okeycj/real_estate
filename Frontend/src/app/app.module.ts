import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './propery/property-card/property-card.component';
import { PropertyListComponent } from './propery/property-list/property-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PropertyCardComponent,
    PropertyListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

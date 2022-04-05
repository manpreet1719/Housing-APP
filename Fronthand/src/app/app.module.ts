import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PropertyComponent } from './property/property.component';
import { PropertycardComponent } from './propertycard/propertycard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PropertyComponent,
    PropertycardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

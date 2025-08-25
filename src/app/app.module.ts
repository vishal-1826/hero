import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hero1Component } from './hero1/hero1.component';
import { FormsModule as FormsModules } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    Hero1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModules
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

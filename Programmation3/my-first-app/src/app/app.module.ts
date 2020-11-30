import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { YellowComponent } from './yellow/yellow.component';
import { FicheproduitComponent } from './ficheproduit/ficheproduit.component';
import { ImageComponent } from './image/image.component';
import { NomComponent } from './nom/nom.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    YellowComponent,
    FicheproduitComponent,
    ImageComponent,
    NomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

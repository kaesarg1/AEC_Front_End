import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailFicheProduitComponent } from './detail-fiche-produit/detail-fiche-produit.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnteteComponent } from './entete/entete.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailFicheProduitComponent,
    FicheProduitComponent,
    EnteteComponent,
    ListeProduitsComponent,
    PiedDePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

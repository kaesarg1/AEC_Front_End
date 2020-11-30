import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { MiniforfaitComponent } from './miniforfait/miniforfait.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { DetailForfaitComponent } from './detail-forfait/detail-forfait.component';



@NgModule({
  declarations: [
    AppComponent,
    // ListeForfaitsComponent,
    ForfaitComponent,
    FormulaireForfaitComponent,
    MiniforfaitComponent,
    ListeForfaitsComponent,
    DetailForfaitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

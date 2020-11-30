import { Component, OnInit } from '@angular/core';
import { Forfait } from './forfait';
import { FORFAITS } from './mock-forfaits'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  forfait= FORFAITS;
  verifiedVedetteArray = [];

  title = 'app-voyages-cesar';
  constructor(){}

  ngOnInit(){
    this.filterVedette();
  }

  filterVedette(){
    let self = this;
    this.forfait.forEach(function(val){
      if(val.forfaitVedette){
        self.verifiedVedetteArray.push(val);
      }
    });
  }

}

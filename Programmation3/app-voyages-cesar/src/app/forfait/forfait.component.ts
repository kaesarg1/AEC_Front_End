import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-forfait',
  templateUrl: './forfait.component.html',
  styleUrls: ['./forfait.component.css']
})
export class ForfaitComponent implements OnInit {
  @Input() forfaits: Forfait;
  // forfaits : Forfait[] = FORFAITS;
  constructor() { }
 
  ngOnInit(): void {
    console.log(this.forfaits);
  }

}

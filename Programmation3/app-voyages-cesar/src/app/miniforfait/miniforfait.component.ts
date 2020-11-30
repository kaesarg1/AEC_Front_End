import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits'

@Component({
  selector: 'app-miniforfait',
  templateUrl: './miniforfait.component.html',
  styleUrls: ['./miniforfait.component.css']
})
export class MiniforfaitComponent implements OnInit {
  @Input() miniforfaitData : Forfait;
  // forfaits : Forfait[] = FORFAITS;
  constructor() {}

  ngOnInit(): void {
  }

}

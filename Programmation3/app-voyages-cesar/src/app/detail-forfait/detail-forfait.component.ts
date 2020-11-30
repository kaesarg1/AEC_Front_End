import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-forfait',
  templateUrl: './detail-forfait.component.html',
  styleUrls: ['./detail-forfait.component.css']
})
export class DetailForfaitComponent implements OnInit {
  @Input() destination : string;
  constructor() { }

  ngOnInit(): void {
  }

}

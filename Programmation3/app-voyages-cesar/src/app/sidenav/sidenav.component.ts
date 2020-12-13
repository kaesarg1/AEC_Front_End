import {Component} from '@angular/core';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  forfait= FORFAITS;
}
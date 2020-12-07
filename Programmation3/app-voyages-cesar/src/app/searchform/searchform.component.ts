import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
  departVille = new FormControl();
  destinationVille = new FormControl();
  hotelControl = new FormControl('', [Validators.minLength(2)]);
  coordonessControl = new FormControl();
  etoilesControl = new FormControl();
  chambressControl = new FormControl();
  caracreristiquesControl = new FormControl();
  departDateControl = new FormControl();
  retourControl = new FormControl();
  prixControl = new FormControl();
  
  public cities: string[] = [ "Bogota", "Cartagena", "Medellin", "Montreal", "Ottawa", "Québec", "Toronto"];


  ngOnInit() {
   
  }

}

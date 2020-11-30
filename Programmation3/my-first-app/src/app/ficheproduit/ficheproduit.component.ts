import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';


@Component({
  selector: 'app-ficheproduit',
  templateUrl: './ficheproduit.component.html',
  styleUrls: ['./ficheproduit.component.css']
})
export class FicheproduitComponent implements OnInit {

  produit1: Produit = {
    id:1,
    prix: '1,00 $',
    nom:'test'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

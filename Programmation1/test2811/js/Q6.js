//Vous devez compléter un programme qui permet de calculer la facture pour l’achat d’un robot imprimable en 3 dimensions.
//
// L’usager doit sélectionner le contrôleur
// 55$ pour un RaspBerry Pi
// 15$ pour un Raspberry Pi Zero
//
// L’usager doit décider du nombre de moteurs entre 2 et 24.
// Un moteur coûte 5$
//
// L’usager décide s’il veut une caméra USB ou non
// La caméra coûte 35$
//
// L’usager décide s’il veut une matrice de LEDS pour les yeux
// La matrice coûte 10$ pour les deux yeux.
//
// Il faut ensuite ajouter 20$ pour le filament 3D.
// Il faut ajouter 15$ pour la batterie USB.
// RasPiBot aimerait que votre programme affiche
// un résumé de l’achat
// ex: “Robot avec Raspberry Pi Zero, 10 moteurs, pas de caméra, pas de matrice de LEDS.”
// le prix
// le prix avec la livraison de 15%.

var controleur;
var moteur;
var usb;
var matrice;
var filament=20;
var batterie=15;
var total;
var livraison=15;
var item;

controleur= (prompt("Entrez A pour RaspBerry pi ou B pour RaspBerryPi Zero"));
moteur= Number(prompt("Entrez combien de moteurs vous voulez 'min=2 max=24' "));
usb= (prompt("Vous voulez une camera usb? "));
matrice= (prompt("Vous voulez un matrice LEDS?"));

if (controleur.toUpperCase()==="A"){document.write("Robot avec RaspBerry pi"+55);
   if (controleur==="B"){document.write("Robot avec RaspBerry pi Zero"+15);
}}
else if (moteur){document.write("avec"+moteur+"moteurs");}

total=controleur+moteur+usb+matrice+filament+batterie+livraison;

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
var controleurTexte;
var moteur;
var moteurtext;
var usb;
var usbtext;
var matrice;
var matricetext;

var prix=0;
var livraison=0;

controleur= (prompt("Entrez A pour RaspBerry pi ou B pour RaspBerryPi Zero"));
moteur= Number(prompt("Entrez combien de moteurs vous voulez 'min=2 max=24' "));
usb= (prompt("Vous voulez une camera usb? "));
matrice= (prompt("Vous voulez un matrice LEDS?"));

controleur=controleur.toUpperCase();
usb=usb.toUpperCase();
matrice=matrice.toUpperCase();

if (controleur==="A"){prix+=55;controleurTexte = "Robot avec Raspberry Pi ";
}
else if (controleur==="B"){prix+=15;controleurTexte = "Robot avec Raspberry Pi Zero ";}
else {document.write("A ou B");}

if (moteur>=2 && moteur<=24){prix+=(moteur*5);
moteurtext= (moteur+"moteurs");}
else{ moteurtext = "Erreur dans les moteurs ";}

if (usb==="OUI"){prix+=35; usbtext = " avec caméra USB "}
else {document.write("Sans camera usb");}

if (matrice==="oui"){prix+=10; matricetext="Avec matrice de LEDS"}
else {document.write("Sans camera matrice de LEDS");}

prix+=35; //batterie

livraison=prix+1.15;

document.write(controleurTexte + moteurtext + usbtext + matricetext);
document.write("Le prix est de : " + prix);
document.write("Le prix avec la livraison est de " + livraison);


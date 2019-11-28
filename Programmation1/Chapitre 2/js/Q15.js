// Calculer et afficher la surface d'un rectangle pour seulement ceux ayant un périmètre d'au moins 100.

var base;
var hauteur;
var perimetre;

base= Number(prompt("Entrez la base du rectangle:"));
hauteur= Number(prompt("Entrez l'hauteur du rectangle:"));
perimetre= base*hauteur;

if (perimetre<100){document.write("Le périmètre de votre rectangle est"+perimetre);}
else {document.write("Le périmètre doit être inférieure à 100");}

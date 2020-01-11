// Demandez un mot à l’usager, bouclez tant que le mot n’est pas patate.
// Comptez et affichez le nombre de mots entrés avant le mot patate.

var nbmot=-1;
var mot="";

while (mot!="patate"){mot=prompt("Entrez un mot:");
nbmot++;
}
document.write("Vous avez entré"+nbmot+"mots AVANT patate");




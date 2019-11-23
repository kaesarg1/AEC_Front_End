// Faire un programme qui lit le taux horaire et le nombre d’heures travaillées d’un employé. Affichez son salaire.
// (Attention, il est payé le double de son taux horaire pour toutes les heures supplémentaires travaillées.
// Une semaine de travail normale est de 40 heures.

var sal;
var tauxhoraire;
var nom;



tauxhoraire= Number(prompt("Entrez le taux horaire:"));
nom= Number(prompt("Entrez les heures travaillées par semaine"));

if (nom <= 40){document.write(" Le salaire est:" + tauxhoraire*nom);

}
else if (nom> 40) {document.write(" Le salaire est plus l'overtime est:" + (2*tauxhoraire)*nom);}






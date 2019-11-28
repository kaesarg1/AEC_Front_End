//Lire une note d’examen et afficher « Échec » si la note est inférieure à 60 et « Bravo » si la note est supérieure ou égale à 60.

var note;

note= Number(prompt("Entrez votre note:"));

if (note>1 && note<60){document.write("Échec");}
else if (note>=60 && note<=100) {document.write("Bravo");}
else {document.write("Entrez une note de 1 a 100");}
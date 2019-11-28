// Le Service de la Qualité de l’Environnement possède trois listes de noms d’industries reconnues pour leur
// haut taux de pollution atmosphérique. L’indice de pollution atmosphérique dépend de plusieurs facteurs et il est
// calculé régulièrement.
//
// L'indice de pollution varie de 0 à 1. Une valeur comprise entre 0,04 et 0,31 est dite normale.
// Si sa valeur de l’indice dépasse 0,31 les industries de la liste A sont avisées de suspendre leurs activités
// jusqu’à ce que la valeur de l’indice redevienne normale. Si l’indice excède 0,40, on avise également la liste B
// et s’il excède 0,50, on avise aussi les industries de la liste C. Pour toutes les autres valeurs,
// écrire « Valeur impossible ».
//
// Faire le programme qui lit la valeur de l’indice de pollution atmosphérique et indique quelle liste
// devrait être affichée.

var valeur;

valeur= Number(prompt("Entrez votre indice de pollution:"));

if (valeur >+0.04 && valeur <= 0.31) {document.write("Votre indice est normale");}
else if (valeur>0.31 && valeur < 0.40){document.write("Vous etes dans la liste A: Vous devez suspendre " +
    "vos activites jusqu'a que la valeur devienne normale ");}
else if (valeur>0.40 && valeur < 0.50){document.write("Vous etes dans la liste B: Vous devez suspendre " +
    "vos activites jusqu'a que la valeur devienne normale ");}
else if (valeur>0.50 && valeur <=1 ){document.write("Vous etes dans la liste C: Vous devez suspendre " +
    "vos activites jusqu'a que la valeur devienne normale ");}
else {document.write("Valeur impossible");}

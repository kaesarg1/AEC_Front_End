//11.Lire une lettre au clavier.
// Si la lettre est 'w', écrire Avancer.
// Si la lettre est 'a', écrire Gauche.
// Ajouter 's' et 'd'.
// Si c'est autre chose, écrire un message d'erreur.

var lettre;


lettre= (prompt("Entrez votre lettre "));


if (lettre === "w" ){document.write("Avancer");
}
else if (lettre === "a" ){document.write("Gauche");
}
else if (lettre === "s" ){document.write("Descendre");
}
else if (lettre === "d" ){document.write("Droite");}

else {document.write("Désolé. Entrez la bonne lettre");
}

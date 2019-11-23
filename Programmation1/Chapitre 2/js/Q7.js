// Lire un nombre au clavier. Afficher la catégorie (Positif, Négatif ou Zéro à l’écran)

var nom;


nom = Number(prompt("Entrez votre nombre:"));


if(nom>0){document.write("Positif");
}
else if (nom===0){document.write("Zéro");}

else{
    document.write("Négatif");

}

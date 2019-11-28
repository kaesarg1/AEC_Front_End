// Lire 3 nombres A, B et C différents. Trouver et afficher le plus petit et le plus grand.

var nom1;
var nom2;
var nom3;

nom1= Number(prompt("Entrez votre premier nombre:"));
nom2= Number(prompt("Entrez votre deuxième nombre:"));
nom3= Number(prompt("Entrez le troisième nombre:"));

if ( nom1 > nom2 && nom1 > nom3) {document.write(nom1 + "est le plus grand");

}
else if (nom2 > nom3){document.write(nom2 + "est le plus grand");

}
else {document.write(nom3 + "est le plus grand");
}


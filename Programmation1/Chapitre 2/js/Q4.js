// Lire deux nombres. Vous devez diviser le premier nombre par le deuxième seulement si le deuxième nombre est différent de zéro.
// Par contre si ce nombre est zéro inscrivez le message suivant :‘Division par zéro interdite.’,
// si ce nombre n’est pas zéro vous devez imprimer le résultat.

var nb1;
var nb2;

nb1 = Number(prompt("Entrez le nombre 1:"));
nb2 = Number(prompt("Entrez le nombre 2:"));


if (nb2>0) {
    document.write("Le resultat est:" +nb1/nb2);
}

else if(nb2<0){
    document.write("Le resultat est:" +nb1/nb2);
}
else{
    document.write("Division par zero interdite");
}






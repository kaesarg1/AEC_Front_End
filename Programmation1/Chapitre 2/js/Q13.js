//13. Lire 2 nombres A et B différents. Trouver et afficher le plus petit et le plus grand.
// Si les deux nombres sont identiques, affichez un message d'erreur à l'utilisateur.


var nom1;
var nom2;

nom1= Number(prompt("Entrez votre premier nombre:"));
nom2= Number(prompt("entrez votre deuxième nombre:"));

if (nom1>nom2){document.write (nom1 + "est le nombre le plus grand et" + nom2 + "est le plus petit");}
else if (nom2>nom1){document.write (nom2 + "est le nombre le plus grand et" + nom1 + "est le plus petit");}

else {document.write("Erreur, les deux nombres sont identiques");}

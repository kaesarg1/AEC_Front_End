//  Lire 2 nombres au clavier.
//         Si ces 2 nombres sont :
//             supérieurs ou égaux à 10, affichez leur somme
//             inférieurs à 10, affichez leur produit
//         Si l'un des deux nombres est supérieur ou égal à 10 et l'autre inférieur à 10, affichez la différence entre les deux nombres.

var nom1;
var nom2;

nom1= Number(prompt("Entrez le premier nombre:"));
nom2= Number(prompt( "Entrez le deuxiéme nombre"));

if (nom1>=10 && nom2>=10){document.write ("la somme est:" + (nom1+nom2));
}
else if (nom1<10 && nom2<10){document.write("le produit est"+(nom1*nom2));
}
else if ((nom1>=10 && nom2<10)) {document.write("la difference est de" + (nom1-nom2));
}
else if ((nom2>=10 && nom1<10)) {document.write("la difference est de" + (nom1-nom2));
    }
    
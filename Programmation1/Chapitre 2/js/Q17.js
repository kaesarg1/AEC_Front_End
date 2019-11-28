// Lire une lettre de l'alphabet. Afficher le mot voyelle (pour : a, e, i, o, u, y) ou le mot consonne (pour les autres) selon la lettre lue.
// Assurez-vous que l'utilisateur puisse entrer les lettres en minuscules ou en majuscules.

var lett;


lett= (prompt("Entrez votre lettre:"));

if (lett.toUpperCase()=== "A"){document.write("Voyelle");}
else if (lett.toUpperCase()=== "E"){document.write("Voyelle");}
else if (lett.toUpperCase()=== "I"){document.write("Voyelle");}
else if (lett.toUpperCase()=== "O"){document.write("Voyelle");}
else if (lett.toUpperCase()=== "U"){document.write("Voyelle");}
else {document.write("Consone");
}


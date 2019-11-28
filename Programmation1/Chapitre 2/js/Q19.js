// Lire le montant de vente et afficher le montant d’escompte correspondant sachant
// que le taux d’escompte est de 12% et n’est calculé que sur les montants supérieurs ou égaux à $500.00.

var montant;

montant= Number(prompt("Entrez votre montant de vente:"));

if (montant>=500){document.write("Votre escompte est de:"+ (montant*0.12));
}
else {document.write("Désolé. Le taux d’escompte est de 12% et n’est calculé que sur les montants supérieurs ou égaux à $500.00.");}


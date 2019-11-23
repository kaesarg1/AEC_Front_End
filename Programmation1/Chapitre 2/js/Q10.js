// Lire un nombre entier au clavier et afficher le nom du mois correspondant.
// Si le nombre saisi ne correspond pas à un mois, affichez le message suivant : « Mois invalide ».

var mois;

mois= Number(prompt("Entrez votre nombre entier:"));

if (mois===1){document.write("Janvier");
}
else if (mois===2){document.write("février");
}
else if (mois===3){document.write("mars");
}
else if (mois===4){document.write("avril");
}
else if (mois===5){document.write("mai");
}
else if (mois===6){document.write("june");
}
else if (mois===7){document.write("juillet");
}
else if (mois===8){document.write("août");
}
else if (mois===9) {document.write("septembre");
}
else if (mois===10) {document.write("octobre");
}
else if (mois===11) {document.write("novembre");
}
else if (mois===12) {document.write("decembre");
}
else {document.write("Mois invalide") ;}
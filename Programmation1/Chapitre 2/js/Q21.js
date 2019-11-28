// Calculer et afficher l’impôt provincial à charger selon le revenu imposable :
// revenu > 0 et $7000.00 inclus : 16% du revenu imposable
// > 7000 et $14000.00 inclus : $1120 + 19.5% du reste
// >14000 et $23000.00 inclus : $2485 + 21.5% du reste
// >23000 et $50000.00 inclus : $4420 + 24.5%24.5% du reste
// >50000 et + $11035 + 26% du reste.

var revenu;

revenu= Number(prompt("Entrez votre revenu"));

if (revenu> 0 && revenu <=7000){document.write("Votre import provincial est de 16% du revenu imposable" + "+" +(revenu*0.16));}
else if (revenu> 7000 && revenu <=14000){document.write("Votre import provincial est de $1120 + 19.5% du reste" +1120+ "+" +(revenu*0.195));}
else if (revenu> 14000 && revenu <=23000){document.write("Votre import provincial est de $2485 + 21.5% du reste" +2485+ "+" + (revenu*0.215));}
else if (revenu> 23000 && revenu <=50000){document.write("Votre import provincial est de $4420 + 24.5% du reste" +4420+ "+" +(revenu*0.245));}
else if (revenu> 23000 && revenu <=50000){document.write("Votre import provincial est de $4420 + 24.5% du reste" +11035+ "+" + (revenu*0.26));
}
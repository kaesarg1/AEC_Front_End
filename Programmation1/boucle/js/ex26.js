//Votre algorithme doit donc générer et afficher deux nombres aléatoires de 1 à 13. Il
// doit ensuite demander à l’utilisateur de faire ses paris. Lorsque l’utilisateur perd, le
// nombre de prédictions remportées est affiché.

var car;
var par;

for (var i= 1;i < 10;i++) { document.write(i + " ")};

par= Number(prompt("Entrez vos paris:"));

if (i===par){document.write("Vous avez gagné");}
else {document.write("Vous avez perdu");}
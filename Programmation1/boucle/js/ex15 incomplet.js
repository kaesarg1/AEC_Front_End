// Lire une série de nombres fournis par l’usager (l’usager
// transmet le nombre 0 pour terminer). Afficher combien de
// nombres positifs ont été entrés ainsi que combien de nombres
// négatifs ont été entrés.

var ent;
var nb=0;
var nb0=0;
var nb1=0;

for (var i=0;i<5;i++){document.write(nb+"<br>");
ent= Number(prompt("0 pour finir"));

if (ent===0 && nb>0){document.write("Positif"); {nb0++}}
else if (ent===0 && nb<0){document.write("Negatif");{nb1++}}}







// Faire un programme qui boucle 10 fois. À toutes les itérations,
// votre programme génère un nombre aléatoire entre 0 et 1 et
// vous demande aussi de choisir un nombre entre 0 et 1. Si le
// nombre est identique, vous gagnez, perdez sinon. Vous
// affichez le pointage à la fin des 10 itérations.

var nbDe0=0;
var nbDe1=0;
var nb=0;
var ent;

for (var i=0;i<10;i++){nb=Math.floor(Math.random()*2);document.write(nb+"<br>");

    ent= Number(prompt("Entrez 0 ou 1"));

    if (nb===0 && ent===0){document.write("Vous avez gagné!!");{nbDe0++;}}
    else if (nb===1 && ent===1){document.write("Vous avez gagné!!");{nbDe1++;}}
else ("Vous avez perdu");

}
document.write("Ily a eu:" +nbDe0+"zeros<br>");
document.write("Il y a eu:"+ nbDe1+"uns <br>");




// if (nb===0){nbDe0++;}else if (nb===1){nbDe1++;}
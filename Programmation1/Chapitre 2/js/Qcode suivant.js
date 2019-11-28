

var sexe;
var age;
var prime;
var valeur;

sexe= (prompt("Veuillez entrer votre sex:"));
age= (prompt ("Entrez votre age:"));
valeur= Number(prompt("Entrez la valeur de votre achat:"));

if (sexe.toUpperCase()==="M"){
    if (age>=16 && age <=25){document.write ("<p class='textvert'>votre prime est de: "+(prime=valeur*0.05) + "</p>");}
    else {document.write ("<p class='textvert'>votre prime est de: "+(prime=valeur*0.03) + "</p>");}
}
else if (sexe.toUpperCase()==="F"){
    if (age>=16 && age <=25){document.write ("<p class='textrouge'>votre prime est de: "+(prime=valeur*0.03) + "</p>");}
    else {document.write ("<p class='textrouge'>votre prime est de: "+(prime=valeur*0.02) + "</p>");}
}



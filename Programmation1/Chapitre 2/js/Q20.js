// Lire l’âge d’un individu et afficher le mot :
// « Adulte » si l’âge est >= 18 ans
// « Adolescent » si l’âge est compris entre 12 et 17 ans inclusivement
// « Enfant » si l’âge est < 12 ans.
var age;

age= Number(prompt("Entrez votre age:"));

if (age>=18){document.write("Adulte");
}
else if (age>=12 && age<=17){document.write("Adolescent");
}
else {document.write("Enfant");}
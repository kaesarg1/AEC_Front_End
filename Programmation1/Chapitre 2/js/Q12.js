//Calculer le prix des assurances pour un véhicule.
//
//
// Pour un garçon entre 16 et 25 ans, le prix des assurances est de 5 % de la valeur du véhicule.
//
//
// S’il est plus vieux, le taux sera de 3 %.
//
// Pour une fille entre 16 et 25 ans, le taux est de 3 % et de 2% pour une fille plus âgée.


var sex;
var age;

sex= (prompt("Entre votre sex: M/F"));
age= (prompt("Entres votre age:"));

if (age>=16 && age <=25){
    if (sex==="M"){document.write("Le prix des assurances est de 5 % de la valeur du véhicule");}
    else if (sex==="F"){document.write("Le prix des assurances est de 3 % de la valeur du véhicule");}
    }

else if (age>25) {
    if (sex==="M"){document.write("Le prix des assurances est de 3 % de la valeur du véhicule");}
    else if (sex==="F"){document.write("Le prix des assurances est de 2 % de la valeur du véhicule");}
    }




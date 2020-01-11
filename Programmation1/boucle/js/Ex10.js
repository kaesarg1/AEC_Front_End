// Afficher le montant et la taxe de 9%
//pour les montants de $5.00 à $100.00 par tranche de $5.00.


var tax;
var total;

tax= Number(prompt("Entrez votre montant: "));

for (var m=5; m<=100;m+=5){total=tax*0.09;
    document.write("Votre montant de"+tax+"Plus le 9%de tax est de:"+"(total+tax)<br>");


}
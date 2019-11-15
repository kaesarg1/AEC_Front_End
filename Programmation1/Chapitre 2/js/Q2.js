
var red;

red= Number(prompt("Entrez le montant de votre achat (superior a $200):"));

if(red>200){
    document.write("Votre reduction est de:"+red/6.66666666667);
}

else if(red<200){
    document.write("Votre montant n'est pas supérieur à  $200");
}
else{
    document.write("Le montant minimun est 200 cad!");
}
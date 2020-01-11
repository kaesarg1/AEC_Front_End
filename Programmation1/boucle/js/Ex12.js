var solde=0;
var depot;


depot= Number(prompt("Entrez votre solde"));
for (var i=1; i<=10; i++){
    solde+=depot;
document.write("Jour"+i+"depot de"+depot+"$ solde de:"+solde.toFixed(2)+"$<br>" );
depot=depot*2;
}
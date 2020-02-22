/* Créé par Cesar Franco 02/15/2020*/

var typejeep;
var typetext;
var term;
var termtext;
var couleur;
var couleurtext;
var transmission;
var transmissiontext;
var total=0;
var totaltax=0;

typejeep= prompt("Entrez votre type de Jeep: Sport, SportS ou Havane");

if (typejeep.toUpperCase()==="SPORT"){
    total+=33290; typetext="Sport";
}
else if (typejeep.toUpperCase()==="SPORTS"){
    total+=37240; typetext="Sport S";
}
else if (typejeep.toUpperCase()==="HAVANE"){
    total+=39235; typetext="Havane";
}
else {
    document.write("Entrez le bon model")
}

term= Number(prompt("Entrez le term (24, 48, 60 ou 84) mois"));

if (term===24){
    totaltax/24; termtext="Term 24";
}
else if (term===48) {
    totaltax/48; termtext="Term 48";
}
else if (term===60) {
    totaltax/60; termtext="Term 60";
}
else if (term===84) {
    totaltax/84; termtext="Term 84";
}

couleur= prompt("Entrez la couleur");

if (couleur.toUpperCase()==="VERT" && couleur.toUpperCase()==="ROUGE" ){
    total+1399; couleurtext="Couleur Vert ou Rouge";
}
else {total+=0
}

transmission= prompt("Entrez le type de transmission: manuelle , automatique ou 8 vitesses ");

if (transmission.toUpperCase()==="AUTOMATIQUE"){
    total+=1500; transmissiontext="Transmission automatique";
}

else if (transmission.toUpperCase()==="8 VITESSES"){
    total+=2400; transmissiontext="Transmission 8 vitesses";
}


document.write("Le prix de votre voiture est de"+total);

totaltax=total*0.15+total;
paiement=total/term;


document.write("Votre model inclus:"+typetext+termtext+couleurtext+transmissiontext+"<br>");
document.write("Le prix de votre voiture avec tax est:"+totaltax+"<br>");
document.write("Votre paiment mensuelle est de:"+paiement);







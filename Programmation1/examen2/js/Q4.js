/* Créé par Cesar Franco 02/15/2020*/

class Act {
    constructor (nom, cout){
        this.nom=nom;
        this.cout=cout;
    }
}
class Voyage {
    constructor (destination, prixbillet, activites){
        this.destination=destination;
        this.prixbillet=prixbillet;
        this.activites=activites;
    }
}

class Personne {
    constructor (nom, travel){
        this.nom=nom;
        this.travel=travel;
    }
}


let total=0;

let activite1= new Act("Golden Knights hockey", 125);
let activite2= new Act("Raiders football", 200);
let activite3= new Act("Tournoi de poker", 500);
let tabA= [activite1, activite2, activite3];



voyage= new Voyage("Las Vegas", 400, tabA);

personne1= new Personne("Shany", voyage);


document.write("Passager:"+personne1.nom+"<br>");
document.write("Destination:"+personne1.travel.destination+"<br>");
document.write("Prix du billet:"+personne1.travel.prixbillet+"<br>");

total+= personne1.travel.prixbillet;

document.write("Activités:"+"<br>");

for (i=0; i< personne1.travel.activites.length; i++){
    document.write("Nom de l'activité:");
    document.write(personne1.travel.activites[i].nom+"<br>");
    document.write("Prix de l'activité:");
    document.write(personne1.travel.activites[i].cout+"<br>");

    total += personne1.travel.activites[i].cout;
}



document.write("Le cout total du voyage est de: $"+total+"<br>");




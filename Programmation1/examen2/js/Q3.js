/* Créé par Cesar Franco 02/15/2020*/

var TabNom1 = TabNom2 = Array();
var TabLettres = 0;
var cant_voy= 0;
var voy = ["a", "e", "i", "o", "u"]
for(i=0; i<100; i++) {
    liste_noms = Array();
    liste_lettres = Array();
    for(j=0; j<100; j++) {
        nom = parseInt(getRandomArbitrary(65, 91));
        lettre = String.fromCharCode(nom);
        liste_noms.push(nom);
        liste_lettres.push(lettre);
        if(voy.indexOf(lettre.toLowerCase()) !== -1){
            cant_voy++;
        }
        if(lettre.toLowerCase() === "e"){
            TabLettres++;
        }

    TabNom1[i] = liste_noms;
    TabNom2[i] = liste_lettres;
}

var term = false;
for(i=0; i<100; i++) {
    for(j=0; j<100; j++) {
        lettre = TabNom2[i][j];
        if(j<97 && lettre.toLowerCase() === "d"){
            lettre_m = tabla_2[i][j+1];
            lettre_f = tabla_2[i][j+2]
            if(lettre_m.toLowerCase() === "a" && lettre_f.toLowerCase() === "d") {
                document.write("Lettre D  Mot DAD "+i+" colonne "+j);
                document.write("<br>");
                term = true;
                break;
            }
        }
    }
    if(term){
        break;
    }
}
document.write(cant_voy);
document.write("<br>");
document.write(TabLettres);
document.write("<br>");

class JoueurHockey{

    constructor(nom,nbButs,nbPasses) {
        this.nom = nom;
        this.nbButs = nbButs;
        this.nbPasses = nbPasses;
    }

}


let Sydney = new JoueurHockey("Sydney Crosy" , 454 + 787);
let Lemieux = new JoueurHockey("Mario Lemieux" , 690 + 1033);
let Jagr = new JoueurHockey("Jaromir Jagr",766 + 1155);

document.write("Nom:"+Sydney.nom+"Points:"+Sydney.nbButs+"");
document.write("Nom:"+Lemieux.nom+"Points:"+Lemieux.nbButs+"");
document.write("Nom:"+Jagr.nom+"Points:"+Jagr.nbButs+"");
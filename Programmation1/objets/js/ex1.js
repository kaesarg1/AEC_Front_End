


class JoueurHockey{

    constructor(nom,nbButs,nbPasses) {
        this.nom = nom;
        this.nbButs = nbButs;
        this.nbPasses = nbPasses;
    }

}


let Sydney = new JoueurHockey("Sydney Crosy" , 454, 787);
let Lemieux = new JoueurHockey("Mario Lemieux" , 690, 1033);
let Jagr = new JoueurHockey("Jaromir Jagr",766, 1155);

document.write("Nom:"+Sydney.nom+"Buts:"+Sydney.nbButs+"Passes:"+Sydney.nbPasses+"");
document.write("Nom:"+Lemieux.nom+"Buts:"+Lemieux.nbButs+"Passes:"+Lemieux.nbPasses+"");
document.write("Nom:"+Jagr.nom+"Buts:"+Jagr.nbButs+"Passes:"+Jagr.nbPasses+"");
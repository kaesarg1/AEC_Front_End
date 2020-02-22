/* Créé par Cesar Franco 02/15/2020*/


let nb=1000;
let lignes=10;
let col=20;

for(let i=0;i<lignes;i++){
    for(let j=0;j<col;j++){
        document.write(nb+" ");
        nb-=5;
    }
    document.write("<br>");
}





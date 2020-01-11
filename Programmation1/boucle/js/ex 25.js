// Trouvez les nombres parfaits
// On souhaite écrire un programme qui calcule les n premiers nombres
// parfaits. Un nombre est dit parfait s’il est égal à la somme de ses
// diviseurs, 1 compris.
// Exemple : 6 = 1+2+3 , est un nombre parfait.


for (var i=0; i<=10; i++){
    p=0;
    for (var j=1; j<=Math.floor(i/2);j++){
        if (parseInt(i) % parseInt(j)===0)
            p= p + parseInt(j)
    }
if (p=i){document.write("Le nombre est parfait"+i)}
else (document.write("Le nombre n'est pas parfait"+i))
}
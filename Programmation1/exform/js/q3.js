
var tabChance=[];
var nom;
var find = false;

for(var i = 0;i<200;i++){
    tabChance[i] = Math.floor(Math.random() * 100);
}

nom= Number(prompt("Veuillez rentrez un nombre entre 1 et 200"));

for (var i=0; tabChance.length; i++ ){
    if (nom===tabChance[i]){
        find=true;

    }
}

if (find){
    document.write("Vous avez un match")
}
else {
    document.write("Vous n'avez pas de match")
}
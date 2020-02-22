
var shots = 1;
var dommage = 100;
var final_dommage = 0;
var pow = 1;
var typepokemon;
var face;

typepokemon = prompt("Type de pokémon adverse EAU ou FEU" );

if(typepokemon.toUpperCase() == "EAU"){
    pow = 2;
}

while(shots < 3){
    document.write("Attaque"+shots+" <br>");

    face = Math.round(Math.random());
    if(face===1){
        final_dommage = final_dommage + (dommage * pow);
    }
    shots ++;
}
document.write("Dommage de l’attaque Darkest Lariat du pokémon Incineroar"+final_dommage);







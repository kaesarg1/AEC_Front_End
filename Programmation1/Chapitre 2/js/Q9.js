// Faire un programme qui lit un nom d’utilisateur et un mot de passe.
// Si le nom d’utilisateur est “admin” et le mot de passe “12345”, affichez le message suivant :
// « Bonjour [nom de l’utilisateur] ». Si les informations ne sont pas correctes, affichez le message suivant :
// « Votre nom d’utilisateur ou votre mot de passe est invalide ».

var nom;
var util;
var mot;


nom= (prompt("Entrez votre nom:"));
util= Number(prompt("Entrez le nom d'utilisateur:"));
mot= Number(prompt("Entrez le mot de passe:"));

if (util==="admin" && mot===12345){document.write("Bonjour"+ nom);
}
else if (mot===12345){document.write("Bonjour"+ nom)}
else{
    document.write ("Votre nom d’utilisateur ou votre mot de passe est invalide") ;}

var prixgros
var profit

nomart = Number (prompt(" Entrez le nom d'larticle svp:"));
prix= Number (prompt("Entrez le prix svp:"));

prixgros = prix * (66/100);
profit= prix - prixgros;

console.log( (" Le prix gros est:" + prixgros) + ("Et les profit est:" + profit));

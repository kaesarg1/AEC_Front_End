// Créez un programme permettant de changer la couleur du texte de la console.
// Offrez trois choix de couleurs de fond et de texte à l'utilisateur
// Affichez une ligne de texte de la couleur de fond et de texte choisis par l'utilisateur

var cfond;
var ctext;
var input;

cfond= (prompt("Choissisez votre couleur de fond (bleu, vert o rouge):"));
ctext= (prompt("Choissisez votre couleur de text (noir, gris ou orange):"));
input= (prompt("Entrez votre text"));

if (cfond=== "bleu" && ctext=== "noir") {document.write("<p class='backblue1'>"+input+"</p1>");}
else if (cfond=== "bleu" && ctext=== "gris") {document.write("<p class='backblue2'>"+input+"</p1>");}
else if (cfond=== "bleu" && ctext=== "orange") {document.write("<p class='backblue3'>"+input+"</p1>");}
else if (cfond=== "vert" && ctext=== "noir") {document.write("<p class='backvert1'>"+input+"</p1>");}
else if (cfond=== "vert" && ctext=== "gris") {document.write("<p class='backvert2'>"+input+"</p1>");}
else if (cfond=== "vert" && ctext=== "orange") {document.write("<p class='backvert3'>"+input+"</p1>");}
else if (cfond=== "rouge" && ctext=== "noir") {document.write("<p class='backrouge1'>"+input+"</p1>");}
else if (cfond=== "rouge" && ctext=== "gris") {document.write("<p class='backrouge2'>"+input+"</p1>");}
else if (cfond=== "rouge" && ctext=== "orange") {document.write("<p class='backrouge3'>"+input+"</p1>");}
else {document.write("Réviser votre texte");}
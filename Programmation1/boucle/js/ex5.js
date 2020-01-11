//var nb = Math.floor(Math.random() * 10);  //retourne un nombre entre 0 et 9

var nbDe0=0;
var nbDe1=0;
var nb=0;

for (var i=0;i<100;i++){nb=Math.floor(Math.random()*2);document.write(nb+"<br>");

if (nb===0){nbDe0++;}else if (nb===1){nbDe1++;}


}
document.write("Ily a eu:" +nbDe0+"zeros<br>");
document.write("Il y a eu:"+ nbDe1+"uns <br>");





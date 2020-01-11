// Transférer les valeurs Fahrenheit de -40 à 40 en Celsius par tranche de 5. (Celsius = 5/9(fahrenheit-32))

var celsius;

for (var f=-40; f<=40;f+=5){celsius=(5/9)*(f*32);
    document.write(f+"Farenheits="+celsius.toFixed(2)+"celsius<br>");


}
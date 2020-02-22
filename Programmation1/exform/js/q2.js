

for(var i=0; i<1000; i+=100){
    var nb = "";
    for(var j=0; j<100; j+=5) {
        var sum = i+j;

        if(j===0) {
            nb = nb + sum;
        }
        else {
            nb = nb +" "+ sum;
        }
    }
    document.write(nb);
    document.write("<br>");
}

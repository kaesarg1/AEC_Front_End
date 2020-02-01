var tabvraifaux=[];
var tabvrai=0;
var tabfaux=0;

for (var i=0; i<1000; i++){
    tabvraifaux[i]=Boolean(Math.floor(Math.random()*2));
    if (tabvraifaux[i]===true){
        tabvrai++;
    }
    else {tabfaux++;
    }
}

document.write("Il y a"+tabvrai+"vrais");
document.write("    il y a"+tabfaux+"faux");
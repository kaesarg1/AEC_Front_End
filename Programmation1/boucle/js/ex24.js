
var e=0;
var x=0;
var d=0;
var b=prompt("Entrez un nombre");
x=parseInt(b);


while(x>0)
{
    e=x%10;
    x=parseInt(x/10);
    d=d+Math.pow(e,3);
    document.write("d: "+d+" e: "+e);

}
if(parseInt(b)==d){

    document.write("C'est un nombre amstrong");
}
else {

    document.write("C'est pas un nombre amstrong");
}

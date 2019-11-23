var note;

note= Number(prompt("Entrez votre note:"));

if (note <= 60){document.write("E");
}
else if (note<=70){document.write("B");
}
else if (note<=80){document.write("C");
}
else if (note<=90){document.write("D");
}
else {document.write("A") ;}
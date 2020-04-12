let textvalide;

$("#Inputtext").keyup(function () {
    let textlenght= $("#Inputtext").val();

    if (textlenght.length<=2){
        $ ("#InputtextHelp").html("Plus que 3 caractéres");
        textvalide=false;
    }

    else if (textlenght.length<=12){
        $("#InputtextHelp").html("Un mot entre 3 et 12 caractéres");
        textvalide=true;
    }

  else if (textlenght.length>=13){
      $("#InputtextHelp").html("Un mot de max. 12 caractéres");
      textvalide=false;
    }
    CheckFormulaire();
});


function CheckFormulaire(){
    if(textvalide){
        $( "#go" ).prop('disabled', false);
    }
    else{
        $( "#go" ).prop('disabled', true);

    }
}


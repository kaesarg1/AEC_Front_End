let positionFlash="100px";

$("#boutonGauche").click(function () {
    $("#flashID").css("left","100px");
});

$("#boutonDroite").click(function () {
    $("#flashID").css("left","200px");
});

$("#boutonChangerImage").click(function () {
    $("#flashID").attr("src","img/Flash2.png");
});


$("#boutonAjouterTitre").click(function () {
    $("#titreflash").html("Justice League");
});


$("#boutonDupliquer").click(function () {
    $("#flashID").clone().appendTo("left","200px");
});

$("#boutonEnleverImage").click(function () {
    $("#flashID").hide();
});

$("#boutonAjouterImage").click(function () {
    $("#flashID").show();

});

$("#boutonVitesseSupreme").click(function () {

    $("#flashID").animate({left: "500px"});
});


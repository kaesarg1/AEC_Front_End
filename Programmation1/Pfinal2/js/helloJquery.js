
$(document).ready(function(){
    $("#go").click(function() {

        $("#imageStore").empty();

        var str = $("#Inputtext").val();
        var res = str.toUpperCase().split("");

        var idOfImageClicked;

        for (var i=0; i< res.length;i++){
            var lettre = res[i];
            var image = 'Lettres/' + lettre +'/'+ lettre +'1.jpg';
            $('#imageStore').append("<img id='" + lettre+i+"' src='"+image+"' class='img-fluid'/>");
        }

        $("#imageStore img").on("click", function (event) {
            var idImage = this.id[0];

            idOfImageClicked = this.id;


            $("#modalImages").modal('show');


            $('#testLettre').empty();

            for (var i=1; i<=5;i++){
                var idImagePlus = idImage+i;
                var dossier = 'Lettres/' + idImage +'/'+ idImagePlus +'.jpg';
                $('#testLettre').append("<img id='"+idImagePlus+"' src='"+dossier+"' class='col-md-4 p-2'/>");
            }
        });

        $('#imageStore').click(this.modal);


        $('#testLettre').on("click", function (event) {

            var premierClick = true;

            $("#"+idOfImageClicked).attr("src", event.target.src);
            $("#modalImages").modal('hide');

        })
    })



});







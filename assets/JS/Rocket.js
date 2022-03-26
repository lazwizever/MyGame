$(document).keydown(function (e){

    var p = $("#rocket").position();

    switch (e.keyCode){

        case 37:
            if (p.left > 0){
                $("#rocket").css('left', p.left - 15 + 'px');
            }
            break;


        case 39:
            if (p.right > 0){
                $("#rocket").css('left', p.left + 15 + 'px');
            }
            break;

    }



});




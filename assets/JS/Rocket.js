$("#bullet").css("display","none");

/*-----------------Move rocket from left-right , right-left----------------*/

$(document).keydown(function (e){

    var p = $("#rocket").position();

    switch (e.keyCode){

        case 37:
            if (p.left > 0){
                $("#rocket").css('left', p.left - 15 + 'px');
            }
            break;


        case 39:
            if (p.left <= 1430){
                $("#rocket").css('left', p.left + 15 + 'px');
            }

    }

});

/*---------------------------------------------------------------------------*/



/*------------------------Moving bullets-------------------------------*/

$(document).keydown(function (e){

    var p = $("#rocket").position();

    if (e.keyCode === 32){
        $("#bullet").css("display","block");
        $("#bullet").css('top', p.top - 50 + 'px');

    }

});
/*----------------------------------------------------------------------*/

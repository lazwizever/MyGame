$("#bullet").css("display","none");

/*-----------------Move rocket from left-right , right-left----------------*/

$(document).keydown(function (e){

    var p = $("#rocket").position();

    switch (e.keyCode){

        case 37:    // move left
            if (p.left > 0){
                $("#rocket").css('left', p.left - 15 + 'px');
                $("#bullet").css('left', p.left - 15 + 'px');
            }
            break;


        case 39:   // move right
            if (p.left <= 1430){
                $("#rocket").css('left', p.left + 15 + 'px');
            }

    }

});

/*---------------------------------------------------------------------------*/



/*------------------------Moving towards bullets-------------------------------*/

$(document).keydown(function (e){

    var p = $("#rocket").position();

    if (e.keyCode === 32){
        $("#bullet").css("display","block");
        /*$("#bullet").css('top', p.top - 50 + 'px');*/

    }

});
/*----------------------------------------------------------------------*/


$(document).keypress(function (e){
    if (e.keyCode === 13){
        $("#bullet").css('left', p.left - 15 + 'px');
    }else {
        $("#bullet").css('left', p.left - 15 + 'px');
    }


});

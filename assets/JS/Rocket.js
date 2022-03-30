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
                $("#bullet").css('left', p.left - 15 + 'px');
            }
            break;
    }

});

/*---------------------------------------------------------------------------*/



/*------------------------Moving towards bullets-------------------------------*/

/*$(document).keydown(function (e){
    if (e.keyCode === 32){
        $("#bullet").css("display","block");

        /!*$("#bullet").css('top', p.top - 50 + 'px');*!/

    }

});*/


function loppingBullets(){

}



$(document).keypress(function (e){

    var p = $("#bullet").position();
    var pb = p.pageX + $("#rocket").width/2;

    console.log(pb);

    if (e.keyCode !== 12 && e.keyCode === 32 ){
        $("#bullet").css("display","block");
        $("#bullet").css('top', p.top - 40 + 'px');
       /* movingBullets();*/

    }else {
        console.log("vvvv");
        $("#bullet").css("display","none");
    }

});


/*----------------------------------------------------------------------*/

function movingBullets(){

    var position = 0;

   setInterval(function (){
       position += 1;
       $("#bullet").style.top = position + "px";


   },10);






}

/*function fire() {
    $("body").append($("<div>").addClass("bullet").css("left", 0));
}
$("input").click(fire);

function update() {
    $(".bullet").each(function() {
        var oldLeft = $(this).offset().left;
        $(this).css("left", oldLeft + 10 + "px");
    });
}
setInterval(update, 100);*/
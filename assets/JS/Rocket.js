/*-----------------Move rocket from left-right , right-left and moving bullets----------------*/

$(document).keydown(function (e){

    var p = $("#rocket").position();

    if (e.keyCode === 37 && p.left > 0){
        $("#rocket").css('left', p.left - 15 + 'px');

    }

    if (e.keyCode === 39 && p.left <= 1430){
        $("#rocket").css('left', p.left + 15 + 'px');

    }

    /*-----------------Moving Bullets-------------------*/

    if (e.keyCode === 32){

        var bullet = document.createElement("section");
        bullet.classList.add("bullet");
        $("body").append(bullet);

        setInterval(() => {

            var bulletBottom = parseInt(window.getComputedStyle(bullet).getPropertyValue("bottom"));

            bullet.style.left = p.left + 50 + "px";       //bullet should always be placed at the top of jet..!
            bullet.style.bottom = bulletBottom + 10 + "px";


            /*------------------Destroy Zombies----------------*/

            var tempZombies = document.getElementsByClassName("zmb");
            var rocket = document.getElementById("rocket");

            for (let i = 0; i < tempZombies.length; i++) {
                var z = tempZombies[i];

                if (z != undefined) {

                    var bltPosition = bullet.getBoundingClientRect();
                    var zmbPosition = z.getBoundingClientRect();


                    if (bltPosition.right <= zmbPosition.right && bltPosition.left >= zmbPosition.left && bltPosition.top >= zmbPosition.top &&
                        bltPosition.bottom <= zmbPosition.bottom) {

                        z.style.top = "-115px";


                        /*------------------------ScoreBoard-----------------------*/

                        var score = parseInt($("#scoreBoard").val()) + 6;
                        $("#scoreBoard").val(score);

                    }
                }
            }
        });
    }
});




/*------------Play Shooting Sound-----------------*/

$(document).keypress(function (e){
    if (e.keyCode ===32 && e.keyCode !=12){
        var shoot = document.createElement('audio');
        shoot.setAttribute('src','assets/audio/laserGun.mp3');
        shoot.play();
    }

});


var mveZmbInterval = setInterval(moveZombies,800);

var count = 0;

function moveZombies(){

    var zombies = $(".zmb");

    for (let i = 0; i < zombies.length; i++) {
        var z = zombies[i];

        var random = Math.floor((Math.random() * 50) + 1);

        var topZombie = $(z).css('top');
        var newZombie = parseInt(topZombie) + random;

        $(z).css('top',newZombie + "px");


        /*--------------------------Decrease health------------------------------*/



        if (newZombie > 712){
            count++;

            $(z).css('top',"0px");

            if (count == 1){
                $("#hrt3").css('visibility','hidden');
            }

            if (count == 2){
                $("#hrt2").css('visibility','hidden');
            }


            if (count == 3){
                $("#hrt1").css('visibility','hidden');
                zombieAudio.pause();
                $("#GameOverTitle").css('display','block');
                clearInterval(mveZmbInterval);
                $(document).off('keypress');
                $(document).off('keydown');
            }
        }

    }
}


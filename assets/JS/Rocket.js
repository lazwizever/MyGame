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

        const shootingAudio = new Audio("assets/audio/laserGun.mp3");

        /*if ($("#spaceBar").click()){
            shootingAudio.play();
            shootingAudio.loop = true;
            shootingAudio.playbackRate = 1;
        }

        if (e.keyCode ===12){
            shootingAudio.pause();
        }*/





        var bullet = document.createElement("section");
        bullet.classList.add("bullet");
        $("body").append(bullet);

        setInterval(() => {

            var bulletBottom = parseInt(window.getComputedStyle(bullet).getPropertyValue("bottom"));

            bullet.style.left = p.left + 50 + "px";       //bullet should always be placed at the top of jet..!
            bullet.style.bottom = bulletBottom + 10 + "px";


            /*------------------Destroy Zombies----------------*/

            var zombies = document.getElementsByClassName("zmb");
            var rocket = document.getElementById("rocket");

            for (let i = 0; i < zombies.length; i++) {
                var z = zombies[i];

                if (z != undefined) {

                    var bltPosition = bullet.getBoundingClientRect();
                    var zmbPosition = z.getBoundingClientRect();
                    var rocketPosition = rocket.getBoundingClientRect();

                    if (bltPosition.right <= zmbPosition.right && bltPosition.left >= zmbPosition.left && bltPosition.top <= zmbPosition.top &&
                        bltPosition.bottom <= zmbPosition.bottom) {

                        z.style.display = 'none';


                        /*------------------------ScoreBoard-----------------------*/

                        var score = parseInt($("#scoreBoard").val()) + 6;
                        $("#scoreBoard").val(score);


                    }

                    if (rocketPosition.top >= zmbPosition.top){
                        console.log("sdsdsdd");
                        /*rocket.style.display = 'none';*/
                    }
                }
            }
        });
    }
});


$(document).keypress(function (e){

    const shootingAudio = new Audio("assets/audio/laserGun.mp3");

    if (e.keyCode ===32 && e.keyCode !=12){
        console.log("hjhjhj");
        shootingAudio.play();
        shootingAudio.loop = true;
        shootingAudio.playbackRate = 1;
    }

    if (e.keyCode === undefined){
        console.log("ccccc")
    }



});

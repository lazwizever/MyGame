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


            var pZombie = $(".zmb").position();

            var zombies = document.getElementsByClassName("zmb");

            for (let i = 0; i < zombies.length; i++) {
                var z = zombies[i];

                if (z!= undefined){

                    var bltPosition = bullet.getBoundingClientRect();
                    var zmbPosition = z.getBoundingClientRect();

                    if (bltPosition.right <= zmbPosition.right && bltPosition.left >= zmbPosition.left  && bltPosition.top <= zmbPosition.top &&
                        bltPosition.bottom <= zmbPosition.bottom) {

                        z.style.display = 'none';



                    }
                }
            }
        });
    }
});


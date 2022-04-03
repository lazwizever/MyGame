/*const zombieAudio = new Audio("assets/audio/ZombieGrowl.mp3");*/

$("#btnBack").click(function (){
    $("#homePageSection").css('display','block');
    $("#gamePlaySection").css('display','none');
    zombieAudio.pause();
});
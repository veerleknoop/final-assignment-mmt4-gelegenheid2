var player = videojs('player');
var playBtn = $('#play');
var rewindBtn = $('#rewind');

player.ready(function () {


    playBtn.click(function () {

        if (!player.paused()) {

            player.pause();
        } else {
            player.play();
        }
    });

    rewindBtn.click(function () {
        var time = player.currentTime();
        player.currentTime(time - 10);
    });
});

$("#slideshow > div:gt(0)").hide();

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, 3000);



function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

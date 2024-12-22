const playButton = document.querySelector(".button-true");
const buttonReset = document.querySelector(".button-reset");
const buttonPlay = document.querySelector(".button-false");
const video = document.querySelector(".video");
const video2 = document.querySelector(".video2");
  
playButton.addEventListener("click", function neverGonna() {
   
    if (video) {
        video.classList.add("visible")
        video.play();
        buttonReset.classList.add("true")
        buttonPlay.classList.add("sosyhui");
        playButton.classList.add("sosyjopy");

    } else {
        console.error("Video element not found!");
    }
});

buttonPlay.addEventListener("click", function idinax() {
   
    if (video2) {
        video2.classList.add("visible")
        video2.play();
               buttonReset.classList.add("true")
        buttonPlay.classList.add("sosyhui");
        playButton.classList.add("sosyjopy");
    } else {
        console.error("Video element not found!");
    }

});
buttonReset.addEventListener("click", function minyet() {
    buttonReset.classList.remove("true");
    video.classList.remove("visible");
    video.pause();
    video.currentTime = 0;
    video2.classList.remove("visible");
    video2.pause();
    video2.currentTime = 0;
    buttonPlay.classList.remove("sosyhui");
    playButton.classList.remove("sosyjopy");
}
)

const progress = document.querySelector('.input__control-progress');

progress.addEventListener('input', function () {
    const value = this.value;
    this.style.background =
        `linear-gradient(to right, #ff0000 0%, #ff0000 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
})

const vollvl = document.querySelector('.input__control-vol');

vollvl.addEventListener('input', function () {
    const value = this.value;
    this.style.background =
        `linear-gradient(to right, #ff0000 0%, #ff0000 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
})


// const progress = document.querySelector('.progress');
// const vol = document.querySelector('.vol');
// const player = document.getElementById('video');

// const videoWatch = document.querySelector('.video__watch');
// 
// const control = document.querySelector('.player__control');
// const controlWrapper = document.querySelector('.player__wrapper');

const playButton = document.querySelector(".btn__play");

const player = document.querySelector(".player");
const video = player.querySelector(".video__watch");
const progressT = document.querySelector('.progress');
const playBtn = document.querySelector('.btn__control-play');
// var progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
var skipButtons = player.querySelectorAll("[data-skip]");
var ranges = player.querySelectorAll(".player__slider");

function tooglePlay(){
   const method = video.paused ? 'play'  : 'pause';
   video[method]();
}
function updateBtn(){
    playButton.classList.add('hidden');
     toggle.classList.toggle('hidden')   
}


video.addEventListener('click', tooglePlay);
toggle.addEventListener('click', tooglePlay);
playButton.addEventListener('click', updateBtn);
toggle.addEventListener('click', updateBtn);
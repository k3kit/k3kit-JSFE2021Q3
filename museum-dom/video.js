const progress = document.querySelector('.input__control-progress');
const vollvl = document.querySelector('.input__control-vol');

vollvl.addEventListener('input', function () {
    const value = this.value;
    this.style.background =
        `linear-gradient(to right, #ff0000 0%, #ff0000 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
})

const playButton = document.querySelector(".btn__play");
const player = document.querySelector(".player");
const video = player.querySelector(".video__watch");
const progressT = document.querySelector('.progress');
const playBtn = document.querySelector('.btn__control-play');
const toggle = player.querySelector(".toggle");
const ranges = player.querySelectorAll(".player__slider");
const volume  = document.querySelector('.input__control-vol');


function tooglePlay(){
   const method = video.paused ? 'play'  : 'pause';
   video[method]();
}
function updateBtn(){
    toggle.classList.toggle('hidden')   
    playButton.classList.toggle('hidden');
     
}

function handleProgress(){
    const value= (video.currentTime/ video.duration)*100;
    progress.style.background =  `linear-gradient(to right, #ff0000 0%, #ff0000 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`;
   
}

let change_time = () => {
    let video_duration = +video.duration;
    video.currentTime = video_duration * +progress.value;
    video.addEventListener("timeupdate", () => {
      let video_duration = +video.duration;
      progress.value = video.currentTime / video_duration;
    });
  };
    video.addEventListener("timeupdate", () => {
      let video_duration = +video.duration;
      progress.value = video.currentTime / video_duration;
    });


function handleRangeUpdate() {
       video.volume = this.value / 100;

}
volume.addEventListener('change',handleRangeUpdate);
video.addEventListener('click', tooglePlay);
toggle.addEventListener('click', tooglePlay);
playButton.addEventListener('click', updateBtn);
toggle.addEventListener('click', updateBtn);
video.addEventListener('click', updateBtn);
video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('change',change_time);
const progress = document.querySelector('.input__control-progress');
const vollvl = document.querySelector('.input__control-vol');


const playButton = document.querySelector(".btn__play");
const player = document.querySelector(".player");
const video = player.querySelector(".video__watch");
const playBtn = document.querySelector('.btn__control-play');
const toggle = player.querySelector(".toggle");
const ranges = player.querySelectorAll(".player__slider");
const volume  = document.querySelector('.input__control-vol');
const volumeBtn = document.querySelector('.btn__control-vol');  
const volumeProgress = document.querySelector('.input__control-vol');
const volumeToggleBtn = document.querySelector('.btn__control-vol');
const btnFullScr = document.querySelector('.player__control-fullsc')


function tooglePlay(){
   const method = video.paused ? 'play'  : 'pause';

   video[method]();
}
function updateBtn(){
    toggle.classList.toggle('hidden')   
    playButton.classList.toggle('hidden');
     
}
const volumeChange = () => {
    volumeBtn.classList.toggle("hidden");

  };
const change_vol = () => {
   localStorage.setItem("volume", video.volume);
    if (video.volume == 0) {
        volumeBtn.classList.toggle("hidden");
       
    }
};

function changeMuteVol(){
    //  localStorage.setItem("volume", video.volume);
  if (video.volume == 0) {
        volumeBtn.classList.add("hidden");

    }else{
volumeBtn.classList.remove("hidden");

    }
}
// volume.addEventListener("input", () => {
// if (volume.value != 0) {
//     video.volume = volume.value;
//     video.muted = false;
// }
// });


volume.addEventListener('input', function () {
  video.volume = volume.value;
    const value = video.volume * 100;
    this.style.background =
        `linear-gradient(to right, #ff0000 0%, #ff0000 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`;
        // changeMuteVol()
})

volumeBtn.addEventListener("click", () => {
    if (video.muted == true) {
      volume.value = localStorage.getItem("volume_value");
      video.muted = false;
    } else {
      video.muted = true;
      localStorage.setItem("volume_value", volume.value);
      volume.value = 0;
    }
    volumeChange();
  });

// volume.addEventListener("input", () => {
// if (volume.value != 0) {
//     video.muted = false;
// }
// });

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

function fullScreenToggle() {
  if (!document.fullscreenElement) {
    player.requestFullscreen();
    btnFullScr.classList.toggle('hidden');
  } else {
    document.exitFullscreen();
    btnFullScr.classList.toggle('hidden');
  }
}


volume.addEventListener('change',handleRangeUpdate);
video.addEventListener('click', tooglePlay);
toggle.addEventListener('click', tooglePlay);
playButton.addEventListener('click', updateBtn);
toggle.addEventListener('click', updateBtn);
video.addEventListener('click', updateBtn);
video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('change',change_time);
// // volumeBtn.addEventListener('click', change_vol);
// volumeBtn.addEventListener('click', muteToggle);
btnFullScr.addEventListener('click',fullScreenToggle);
volumeProgress.addEventListener('input',changeMuteVol);


document.addEventListener('keydown', function(event) {
  if (event.code == 'Space') tooglePlay()
        event.preventDefault(false);
  if (event.code == 'KeyF') fullScreenToggle();
  if (event.code == 'KeyM') volumeChange();
  if (event.code == 'Comma' && event.shiftKey) video.playbackRate -= 0.25;
  if (event.code == 'Period' && event.shiftKey) video.playbackRate += 0.25;
});

document.add
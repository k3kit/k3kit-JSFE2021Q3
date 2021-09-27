// function createGallery(elem, amount) {
//     const images = [];
//     let count = 1;
  
//     while (count <= amount) {
//       images.push(createImg(count));
//       count++;
//     }
  
//     images.sort(() => 0.5 - Math.random());
  
//     elem.append(...images);
//   }

//   function createImg(number) {
//     const picture = document.createElement("picture");
//     const img = document.createElement("img");
    
//     img.src = `./assets/img/galery/galery${number}.webp`;
//     img.classList.add("picture-container__picture");
//     img.alt = `galery${number}`;
//     img.loading = "lazy";
//     picture.append(img);
//     return img;
//   }

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFkb3VrZW43ODA5IiwiYSI6ImNrdTFpYjlyYzNsMm4yb25xOGppbG1mZXUifQ.nBk1rPwLCoG9aww_BJRBOA';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [2.33587, 48.86102],
  zoom: 16
});

map.addControl(new mapboxgl.NavigationControl());

const slider = document.querySelector('.slider');
const before = document.querySelector('.explore__img_before');
const beforeImage= before.querySelector('img');
const change = document.querySelector('.change');
const body = document.body;

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
	let width = slider.offsetWidth;
	beforeImage.style.width = `${width}px`;
});
const beforeAfterSlider = (x) => {
	let shift = Math.max(0, Math.min(x, slider.offsetWidth));
	before.style.width = `${shift}px`;
	change.style.left = `${shift}px`;
};

const pauseEvenst =(e)=>{
  e.stopPropagation();
  e.preventDefault() ;
  return false;
}

body.addEventListener('mousedown',()=>{
  isActive = true
})
body.addEventListener('mouseup',()=>{
  isActive = false
})


body.addEventListener('mouseleave', () => {
	isActive = false;
});
body.addEventListener('mousemove',(e)=>{
  if (!isActive) {
		return;
	}
  let x = e.pageX;

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvenst(e);
});




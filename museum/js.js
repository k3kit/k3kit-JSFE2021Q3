

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFkb3VrZW43ODA5IiwiYSI6ImNrdTFpOWVvNTI4NW8ybnA4cWdvbWR5cWkifQ.CMpP6WjNcKAXGQAGjt5SzQ';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/hadouken7809/cku2zajbw064917lfu0i0l2z8',
  center: [2.33587, 48.86102],
  zoom: 15.5
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




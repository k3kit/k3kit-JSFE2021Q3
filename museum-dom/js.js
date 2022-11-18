
// // mapboxgl.accessToken = 'pk.eyJ1IjoiaGFkb3VrZW43ODA5IiwiYSI6ImNrdTFpOWVvNTI4NW8ybnA4cWdvbWR5cWkifQ.CMpP6WjNcKAXGQAGjt5SzQ';

// // const map = new mapboxgl.Map({
// //   container: 'map',
// //   style: 'mapbox://styles/hadouken7809/cku2zajbw064917lfu0i0l2z8',
// //   center: [2.33587, 48.86102],
// //   zoom: 15.5
// // });

// // map.addControl(new mapboxgl.NavigationControl());

const slider = document.querySelector('.slider_exp');
const before = document.querySelector('.explore__img_before');
const beforeImage= before.querySelector('img');
const change = document.querySelector('.change');
const changetwo = document.querySelector('.change-two');
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
    changetwo.style.left = `${shift}px`;
};

const pauseEvenst =(e)=>{
  e.stopPropagation();
  e.preventDefault() ;
  return false;
}

slider.addEventListener('mousedown',()=>{
  isActive = true
})
slider.addEventListener('mouseup',()=>{
  isActive = false
})


slider.addEventListener('mouseleave', () => {
	isActive = false;
});
slider.addEventListener('mousemove',(e)=>{
  if (!isActive) {
		return;
	}
  let x = e.pageX;

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvenst(e);
});


const animItems = document.querySelectorAll('.picture-container__picture')
if(animItems.length>0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 1.3;

            let animItemPoint = window.innerHeight / animStart;
             if(animItemHeight> window.innerHeight){
                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
             }

             if((scrollY > animItemOffset - animItemPoint) && scrollY <(animItemOffset + animItemHeight)){
                 animItem.classList.add('_active');
             }else{
                 animItem.classList.remove('_active');
             }
        }
    }

    function offset(el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
}




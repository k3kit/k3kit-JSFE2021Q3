const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides  = document.querySelectorAll('.swiper-slide');
const dots = document.querySelectorAll('.slider__item');
const amout = document.querySelector('.amout__item_span');

let index = 0;

const activeSlide = n => {
  amout.textContent = '0' +(index+1)
  for(slide of slides){
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
}

const activeDot= n => {
  for(dot of dots){
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
}

const prepareCurrentSlide = ind =>{
  activeSlide(ind);
  activeDot(ind);
}
const nextSlide = () => {
if(index == slides.length - 1){
    index = 0;
    prepareCurrentSlide(index);
  }else{
    index++;
    prepareCurrentSlide(index);
  }
}
const prevSlide = () => {
  if(index == 0){
    index = slides.length - 1
    prepareCurrentSlide(index);
    }else{
      index--;
      prepareCurrentSlide(index);
    }
  }
  
  dots.forEach((item, indexDot)=>{
      item.addEventListener('click', ()=>{
        index = indexDot;
        prepareCurrentSlide(index);
      })
  })




 next.addEventListener('click',nextSlide);
 prev.addEventListener('click',prevSlide);
import noUiSlider, { target } from 'nouislider'
import { Card } from '../index';
import { cardContainer } from '../index';
import { Array2 } from '../index';
const  countSlider = <target>document.querySelector('.count-slider');
const  sliderOutput0 = <HTMLElement>document.querySelector('.slider-output-0');
const  sliderOutput1 =<HTMLElement>document.querySelector('.slider-output-1');
const countArray: Array<any> = [sliderOutput0,sliderOutput1]

 export function counSlider(){
  noUiSlider.create(countSlider, {
    start: [0, 12],
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 12
    }
});
countSlider.noUiSlider.on('change', function (values: string[], handle: string | number) {
    countArray[handle].innerHTML = parseInt(values[handle]).toString();

      cardContainer.innerHTML = '';
      const sorted = Array2.filter(function (it) { 
        return it.count >= parseInt(values[0]) && it.count <= parseInt(values[1])
      })
      console.log(sorted);
      Card(sorted)
  
});
}

  
  
const  yearSlider = <target>document.querySelector('.year-slider');
const  sliderOutput00 = <HTMLElement>document.querySelector('.slider-output-00');
const  sliderOutput01 =<HTMLElement>document.querySelector('.slider-output-01');
const yearArray: Array<any> = [sliderOutput00,sliderOutput01]
 export function yearSlide(){
  noUiSlider.create(yearSlider, {
    start: [1940, 2020],
    connect: true,
    step: 1,
    range: {
        'min': 1940,
        'max': 2020
    }
});
yearSlider.noUiSlider.on('change', function (values: { [x: string]: string; }, handle: string | number) {
    yearArray[handle].innerHTML = parseInt(values[handle]).toString();
      cardContainer.innerHTML = '';
      const sorted = Array2.filter(function (it) { 
        return it.year >= parseInt(values[0]) && it.year <= parseInt(values[1])
      })
      Card(sorted)

});
}


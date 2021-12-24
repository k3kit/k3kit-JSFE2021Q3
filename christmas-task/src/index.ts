
import { CardDataModel } from './application/cardDataModel';
import { ICardData } from './application/cardDataModel';
import { searchName } from './application/search';
// import { counSlider } from './application/sliderRange';
// import { yearSlide } from './application/sliderRange';
import { SortSel } from './application/sort';




 export const cardContainer = <HTMLElement>document.querySelector('.card-container');
const model = new CardDataModel();
let arr: Array<ICardData> 
export const Array2: Array<ICardData> =[]
const favoriteArray: Array<ICardData> =[]
export function CardV() {
  return model.build().then(result => {
    arr = result.data;
    Card(arr)
    arr.forEach((it: ICardData)=>{
      Array2.push(it)
    })
  })


}
 const span = <HTMLElement>document.querySelector('.item-span');

CardV() 
span.textContent = '0' +(+1)
console.log(Array2);

 export function Card(arr: ICardData[]) {
  let html = '';
    cardContainer.innerHTML = '';
   arr.map((item: ICardData) => {
      html += `
             <div class="card">
             <h2 class="card-title">${item.name}</h2>
             <img class="card-img" src="assets/toys/${item.num}.webp" alt="toy">
               <div class="card-description">      
                 <p class="count">Количество:<span>${item.count}</span></p>
                 <p class="year">Год покупки:<span>${item.year}</span></p>
                 <p class="shape">Форма:<span>${item.shape}</span></p>
                 <p class="color">Цвет:<span>${item.color}</span></p>
                 <p class="size">Размер:<span>${item.size}</span></p>
                 <p class="favorite">Любимая:<span>${item.favorite ? 'Да' : 'Нет'}</span></p>
                </div>
            <div class="ribbon"></div>
            </div>`
      cardContainer.innerHTML = html;
      const AllCards = Array.from(document.querySelectorAll('.card'));

      function cardfunc(){
        AllCards.forEach((it) =>{
          it.addEventListener('click',()=>{
            
            it.classList.toggle('active')
            
          })
        })
      } 
      cardfunc()
    });
}

SortSel()
// counSlider()
// yearSlide()
searchName()



const form = document.querySelectorAll('.shape');
const keys: string[]= ['shape','color','size'];
function filter(){
  form.forEach((it) =>{
    
    it.addEventListener('click',()=>{
      it.classList.toggle('active')
      const shape = it['dataset']['filters'];
      cardContainer.innerHTML = '';
      const sorted = arr.filter(function(it){
         return  it.shape === shape
      })
      Card(sorted)
      if(!it.classList.contains('active')){
        Card(Array2)
      }
      console.log(sorted);
      
    
    })
  
  })
}
filter()  

const color = document.querySelectorAll('.color-filter');

function filterColor(){
  color.forEach((it) =>{
    
    it.addEventListener('click',()=>{
      it.classList.toggle('active')
      const shape = it['dataset']['filter'];
      cardContainer.innerHTML = '';
      const sorted = arr.filter(function(it){
         return  it.color === shape
      })
      Card(sorted)
      if(!it.classList.contains('active')){
        Card(Array2)
      }
      console.log(sorted);
      
    
    })
  
  })
}
filterColor()

const size = document.querySelectorAll('.size-input-label');

function filterSize(){
  size.forEach((it) =>{
    
    it.addEventListener('click',()=>{
      it.classList.toggle('active')
      const shape = it['dataset']['filter'];
      console.log(shape);
      
      cardContainer.innerHTML = '';
      const sorted = arr.filter(function(it){
         return  it.size === shape
      })
      Card(sorted)
      if(!it.classList.contains('active')){
        Card(Array2)
      }
      console.log(sorted);
      
    
    })
  
  })
}
filterSize()

const favorite =  <HTMLElement>document.querySelector('.favorite-input-label');

function favoriteToys(){
  favorite.addEventListener('click',()=>{
    favorite.classList.toggle('active')
    cardContainer.innerHTML = '';
    const sorted = Array2.filter(it=> it.favorite === true)
    Card(sorted)
    if(!favorite.classList.contains('active')){
      cardContainer.innerHTML = '';
      Card(Array2)
    }
  })

}
favoriteToys()
const startPageBtn = <HTMLElement>document.querySelector('.switch-start-page');
const toyPage = <HTMLElement>document.querySelector('.main-toy-page');
const treePage =<HTMLElement>document.querySelector('.main-tree-page')
const startPage= <HTMLElement>document.querySelector('.main-start-page');
const treeSwitchPage = <HTMLElement>document.querySelector('.switch-main-favorites-page');
const toysSwitchPage = <HTMLElement>document.querySelector('.switch-main-page');
const logo = <HTMLElement>document.querySelector('.logo');

startPageBtn.addEventListener('click', ()=>{
  startPage.classList.add('hide');
  toyPage.classList.remove('hide')
});


treeSwitchPage.addEventListener('click', ()=>{
  startPage.classList.add('hide');
  toyPage.classList.add('hide');
  treePage.classList.remove('hide')
});
toysSwitchPage.addEventListener('click', ()=>{
  startPage.classList.add('hide');
  toyPage.classList.remove('hide');
  treePage.classList.add('hide')
});
logo.addEventListener('click', ()=>{
  startPage.classList.remove('hide');
  toyPage.classList.add('hide')
  treePage.classList.add('hide')
});


const bgTree= document.querySelectorAll('.bg-container .bg');
const targetBg = <HTMLElement>document.querySelector('.main-tree-container')
if(bgTree){
  bgTree.forEach((it) => {
    it.addEventListener('click',(el)=>{
      const target = el.target as HTMLElement &{
        dataset: Record<string, string> 
      }
      const {bg} = target.dataset
      targetBg.style.backgroundImage = `url("../assets/bg/${bg}.jpg")`
    })
  });
}



const changeTree = document.querySelectorAll('.tree-container .tree');
const mainTree = <HTMLElement>document.querySelector('.main-tree-container');

if(changeTree){
  changeTree.forEach((it)=>{
    it.addEventListener('click',(el)=>{
      const target = el.target as HTMLElement &{
        dataset: Record<string, string> 
      };
      const {tree} = target.dataset;
      mainTree.innerHTML = `
      <img src="assets/tree/${tree}.png" class="main-tree" usemap="#tree-map" alt="tree"> 
      `;
      console.log(tree);
      
    })
    
  })
}
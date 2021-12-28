
import { CardDataModel } from './application/cardDataModel';
import { ICardData } from './application/cardDataModel';
import { searchName } from './application/search';
// import { counSlider } from './application/sliderRange';
// import { yearSlide } from './application/sliderRange';
import { SortSel } from './application/sort';
import { data } from './data';


interface DataToy {
  num: string,
  name: string,
  count: string,
  year: string,
  shape: string,
  color: string,
  size: string,
  favorite: boolean,
}

 export const cardContainer = <HTMLElement>document.querySelector('.card-container');
const model = new CardDataModel();
let arr: Array<ICardData> 
export const Array2: Array<ICardData> =[]
const Array3: Array<DataToy> =[]
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



const selected: string[] = [];


 export function Card(arr: ICardData[]) {
  let html = '';
    cardContainer.innerHTML = '';
   arr.map((item: ICardData) => {
      html += `
             <div class="card" data-num="${item.num}">
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
     const allToys = document.querySelectorAll('.card');
     allToys.forEach((it)=>{
      it?.addEventListener('click',(el)=>{
        // it.classList.toggle('active');
        const target = el.target as HTMLElement &{
          dataset: Record<string, string> 
        };
            
            const { num } = target.dataset;

            // selected.push(num);
            
          
            if (num) {
              if (selected.includes(num)) {
                selected.splice(selected.indexOf(num),1);
                it.classList?.remove('active');
              } else if (selected.length <= 19) {
                selected.push(num);
                it.classList?.add('active');
              } else if (selected.length >= 20) {
                const popup = <HTMLElement>document.getElementById("popup");
                const closeBtn = <HTMLElement>document.getElementById("closeBtn");

                closeBtn.addEventListener('click', ()=>{
                  popup.style.display = 'none';
              });
              popup.addEventListener('click', ()=>{
                  popup.style.display = 'none';
              });
           
              }
            }
            span.textContent = String(selected.length)
         })
     })
    
      
    });
}



SortSel()
// counSlider()
// yearSlide()
searchName()

const form = document.querySelectorAll('.shape');
// const keys: string[]= ['shape','color','size'];
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
   
      
      cardContainer.innerHTML = '';
      const sorted = arr.filter(function(it){
         return  it.size === shape
      })
      Card(sorted)
      if(!it.classList.contains('active')){
        Card(Array2)
      }
   
    
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
      currentTreeSection.bgImage = bg;
      renderTreeSection();
      // targetBg.style.backgroundImage = `url("../assets/bg/${bg}.jpg")`
    })
  });
}
interface ToyPosition {
  numberToy: string,
  position: [number, number]
}
interface TreeSection {
  bgImage: string,
  tree: string,
  toys: ToyPosition[];
}

  const currentTreeSection: TreeSection = {
    bgImage: '5',
    tree: '5',
    toys: [
      //   {
      //   numberToy: '5',
      //   position: [200, 200]
      // }
    ],
  };



const changeTree = document.querySelectorAll('.tree-container .tree');
const mainTree = <HTMLElement>document.querySelector('.main-tree-container');

if(changeTree){
  changeTree.forEach((it)=>{
    it.addEventListener('click',(el)=>{
      const target = el.target as HTMLElement &{
        dataset: Record<string, string> 
      };
      const {tree} = target.dataset;
      currentTreeSection.tree = tree
      renderTreeSection();
      
    })
    
  })
}
const colorBtn = document.querySelectorAll('.garland-btns .color-btn');
const lightropeLight = document.querySelectorAll('.light');

if(colorBtn){
  colorBtn.forEach((it)=>{
    it.addEventListener('click',(el)=>{
      const target = el.target as HTMLElement &{
        dataset: Record<string, string> 
      }
      const {color} = target.dataset;
      lightropeLight.forEach((it)=>{
        it.className = `light ${color}`
        })
    })
  })
}

const snowBtn = document.querySelector('.snow-control');
function createSnowFlake() {
	const snow_flake = <HTMLElement>document.createElement('i');
	snow_flake.classList.add('fas');
	snow_flake.classList.add('fa-snowflake');
	snow_flake.style.left = Math.random() * window.innerWidth + 'px';
  snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's';
	document.body.appendChild(snow_flake);
	
	setTimeout(() => {
		snow_flake.remove();
	}, 5000)
}

let isSnow = true;
let time;
snowBtn?.addEventListener('click',()=>{
  if(isSnow){
    isSnow= false
    time = setInterval(createSnowFlake, 55);
  }else{
    clearInterval(time);
    isSnow= true
  }
})

let isPlay = true;
const audio = new Audio();
const audioBtn = document.querySelector('.audio-control');


function playPause(){
  if(isPlay){
    audio.src = ('./assets/audio/audio.mp3')
    audio.play()
    isPlay =false;
  
  }else{  
    audio.pause();
    isPlay =true;
  }
}

audioBtn?.addEventListener('click', playPause)


const lightrope = document.querySelector('.garland-tree-container');
const onoffLightrope = document.querySelector('.onoffswitch-label');
onoffLightrope?.addEventListener('click', ()=>{
  lightrope?.classList.toggle('hide')
})



function renderToys() {
  const treeToys = document.querySelector('.favorites-container');
  
  if(treeToys) treeToys.innerHTML = '';
  if(selected.length>0){
    selected.forEach((it)=>{
     
      if(treeToys) treeToys.innerHTML +=`
      <div class="favorites-card">
      <img src="../assets/toys/${it}.webp" class="favorites-card-img" alt="pict" draggable="true" data-num="${it}">
      <p class="favorites-count">${data[+it - 1].count}</p>
      </div>
      `
    })
  }else{
    
      for (let i = 0; i < 20; i++) {
  
        if (treeToys) treeToys.innerHTML += `
      <div class="favorites-card">
          <img src="../assets/toys/${i + 1}.webp" class="favorites-card-img" alt="pict" draggable="true" data-num="${i + 1}">
          <p class="favorites-count">${data[i].count}</p>
      </div>
      `;
     
      
    }
   
  }
}
renderToys()
dragAndDrop()
function dragAndDrop(): void{
  const toys = document.querySelectorAll('.favorites-card img')

  if (toys) {
    toys.forEach((el) => {
      el.addEventListener('dragstart', (el2) => {
        const item = el2 as DragEvent;
        const target = el2.target as EventTarget & { dataset: Record<string, string> };
        const { num } = target.dataset;
        if (item.dataTransfer) item.dataTransfer.setData('id', num);
        if (item.dataTransfer) item.dataTransfer.setData('out', 'true');
        if (item.dataTransfer) item.dataTransfer.setData('offsetX', String(item.offsetX));
        if (item.dataTransfer) item.dataTransfer.setData('offsetY', String(item.offsetY));
      });
    })
  }
}





renderTreeSection();
  function renderTreeSection(){
    const treeContainer = document.querySelector('.main-tree-container') as HTMLElement & { style: CSSStyleDeclaration };
    treeContainer.style.backgroundImage = `url("../assets/bg/${currentTreeSection.bgImage}.jpg")`;
    if (treeContainer) treeContainer.innerHTML = `
    <map name="tree-map">
            <area
              coords="365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664"
              shape="poly">
          </map>
      <img id="tree-picture"  usemap="#tree-map" src="../assets/tree/${currentTreeSection.tree}.png" alt="Tree">
      <div class="tree__toys-a"></div>
      `;
      if (currentTreeSection.toys.length > 0) {
        const toyOn = document.querySelector('.tree__toys-a');
        if (toyOn) toyOn.innerHTML = '';
        currentTreeSection.toys.forEach((el, i) => {
          toyOn!.innerHTML += `
            <img class="toy-tree" src="./assets/toys/${el.numberToy}.webp" data-num="${el.numberToy}" data-numi="${i}" alt="pict" draggable="true" style="top: ${el.position[1]}px; left: ${el.position[0]}px;">
            `;
        });
      }
      const tree = document.querySelector('area');
  
      if (tree) tree.addEventListener('dragover', (ev) => {
        ev.preventDefault()
      })
      if (tree) tree.addEventListener('drop', (el) => {
        const target = el as DragEvent & { layerX: string, layerY: string };
        const outToy = target.dataTransfer?.getData('out');
        if (outToy == 'true') {
          currentTreeSection.toys.push({
            numberToy: `${target.dataTransfer?.getData('id')}`,
            position: [+`${target.layerX}` -  +target.dataTransfer!.getData('offsetX'), +`${target.layerY}` - +target.dataTransfer!.getData('offsetY')]
          });
        } else if (outToy == 'false') {

          currentTreeSection.toys[ +target.dataTransfer!.getData('id')].position = [+`${target.layerX}` - +target.dataTransfer!.getData('offsetX'), +`${target.layerY}` - +target.dataTransfer!.getData('offsetY')];
        }
        renderTreeSection();
      });
      dragToy()
      function dragToy(): void {
        const toys = document.querySelectorAll('.toy-tree');
        if (toys) {
          toys.forEach((el) => {
            el.addEventListener('dragstart', (el2) => {
              const item = el2 as DragEvent;
              const target = el2.target as EventTarget & { dataset: Record<string, string> };
              const { numi } = target.dataset;
              if (item.dataTransfer) item.dataTransfer.setData('id', numi);
              if (item.dataTransfer) item.dataTransfer.setData('out', 'false');
              if (item.dataTransfer) item.dataTransfer.setData('offsetX', String(item.offsetX));
              if (item.dataTransfer) item.dataTransfer.setData('offsetY', String(item.offsetY));
              el.addEventListener('dragend', (el3) => {
                const target = el3 as DragEvent;
                // if (target.dataTransfer?.dropEffect == 'none') {
                //   currentTreeSection.toys.splice(+numi, 1);
                //   renderTreeSection();
                // }
              })
            });
          })
        }
      }
  }
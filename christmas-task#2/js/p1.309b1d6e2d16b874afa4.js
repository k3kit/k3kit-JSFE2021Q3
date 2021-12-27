(()=>{"use strict";var e={33:function(e,a){var t=this&&this.__awaiter||function(e,a,t,n){return new(t||(t=Promise))((function(r,o){function s(e){try{i(n.next(e))}catch(e){o(e)}}function c(e){try{i(n.throw(e))}catch(e){o(e)}}function i(e){var a;e.done?r(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(s,c)}i((n=n.apply(e,a||[])).next())}))};Object.defineProperty(a,"__esModule",{value:!0}),a.CardDataModel=void 0,a.CardDataModel=class{build(){return t(this,void 0,void 0,(function*(){return this.data=yield this.loadCardData("./data.json"),this}))}loadCardData(e){return fetch(e).then((e=>e.json())).then((e=>Object.keys(e).map((a=>{const t=e[a];return{num:Number(t.num),name:t.name,count:Number(t.count),year:Number(t.year),shape:t.shape,color:t.color,size:t.size,favorite:Boolean(t.favorite)}}))))}}},557:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.searchName=void 0;const n=t(303),r=document.querySelector(".search");a.searchName=function(){r.addEventListener("keyup",(function(){n.cardContainer.innerHTML="",console.log(r.value.length);const e=n.Array2.filter((function(e){return e.name.toLowerCase().includes(r.value.toLowerCase())}));if(r.value.length>2&&0===e.length)return o.style.display="block";(0,n.Card)(e)}))};const o=document.getElementById("popup");document.getElementById("closeBtn").addEventListener("click",(()=>{o.style.display="none"})),o.addEventListener("click",(()=>{o.style.display="none"}))},245:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.SortSel=void 0;const n=t(303),r=document.querySelector(".sort-select");a.SortSel=function(){r.addEventListener("change",(function(){switch(this.value){case"sort-name-max":{const e=n.Array2.sort((function(e,a){const t=e.name.toLowerCase(),n=a.name.toLowerCase();return t<n?-1:t>n?1:0}));(0,n.Card)(e)}break;case"sort-name-min":{const e=n.Array2.sort((function(e,a){const t=e.name.toLowerCase(),n=a.name.toLowerCase();return t<n?-1:t>n?1:0})).reverse();(0,n.Card)(e)}break;case"sort-count-min":{n.cardContainer.innerHTML="";const e=n.Array2.sort((function(e,a){return e.count-a.count}));(0,n.Card)(e)}break;case"sort-count-max":{n.cardContainer.innerHTML="";const e=n.Array2.sort((function(e,a){return a.count-e.count}));(0,n.Card)(e)}}}))}},146:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.data=void 0,a.data=[{num:"1",name:"Большой шар с рисунком",count:"2",year:"1960",shape:"шар",color:"желтый",size:"большой",favorite:!1},{num:"2",name:"Зелёный шар с цветами",count:"5",year:"2000",shape:"шар",color:"зелёный",size:"большой",favorite:!1},{num:"3",name:"Красный матовый шар",count:"3",year:"1990",shape:"шар",color:"красный",size:"большой",favorite:!1},{num:"4",name:"Сосулька красная",count:"2",year:"1980",shape:"фигурка",color:"красный",size:"большой",favorite:!1},{num:"5",name:"Красный виноград",count:"4",year:"1980",shape:"фигурка",color:"красный",size:"средний",favorite:!0},{num:"6",name:"Красный шар с рисунком",count:"6",year:"2010",shape:"шар",color:"красный",size:"большой",favorite:!1},{num:"7",name:"Молочно-белый шар",count:"12",year:"1960",shape:"шар",color:"белый",size:"средний",favorite:!0},{num:"8",name:"Красный шар",count:"10",year:"2010",shape:"шар",color:"красный",size:"большой",favorite:!1},{num:"9",name:"Колокольчик старинный",count:"2",year:"1950",shape:"колокольчик",color:"белый",size:"большой",favorite:!1},{num:"10",name:"Белый шар ретро",count:"7",year:"1960",shape:"шар",color:"белый",size:"большой",favorite:!1},{num:"11",name:"Шишка еловая белая",count:"11",year:"1960",shape:"шишка",color:"белый",size:"малый",favorite:!1},{num:"12",name:"Белый шар с цветами",count:"5",year:"1980",shape:"шар",color:"белый",size:"большой",favorite:!1},{num:"13",name:"Шар расписной Река",count:"3",year:"1970",shape:"шар",color:"синий",size:"большой",favorite:!0},{num:"14",name:"Шар расписной Деревня",count:"4",year:"1970",shape:"шар",color:"синий",size:"большой",favorite:!0},{num:"15",name:"Колокольчик расписной",count:"3",year:"1970",shape:"колокольчик",color:"синий",size:"средний",favorite:!1},{num:"16",name:"Шишка расписная Пейзаж",count:"3",year:"1970",shape:"шишка",color:"синий",size:"средний",favorite:!0},{num:"17",name:"Шишка расписная",count:"7",year:"1970",shape:"шишка",color:"красный",size:"средний",favorite:!1},{num:"18",name:"Желтый шар с бантом",count:"2",year:"2010",shape:"шар",color:"желтый",size:"большой",favorite:!1},{num:"19",name:"Желтый шар с паетками",count:"12",year:"1980",shape:"шар",color:"желтый",size:"большой",favorite:!1},{num:"20",name:"Красный шар с бантом",count:"8",year:"1950",shape:"шар",color:"красный",size:"средний",favorite:!0},{num:"21",name:"Красный шар с звёздами",count:"4",year:"1970",shape:"шар",color:"красный",size:"большой",favorite:!0},{num:"22",name:"Шишка еловая золотая",count:"11",year:"1990",shape:"шишка",color:"желтый",size:"малый",favorite:!1},{num:"23",name:"Колокольчик старинный",count:"9",year:"1950",shape:"колокольчик",color:"желтый",size:"большой",favorite:!1},{num:"24",name:"Снежинка изящная",count:"1",year:"1940",shape:"снежинка",color:"белый",size:"большой",favorite:!1},{num:"25",name:"Розовый шар с блёстками",count:"12",year:"2010",shape:"шар",color:"красный",size:"большой",favorite:!1},{num:"26",name:"Рубиново-золотой шар",count:"8",year:"1960",shape:"шар",color:"желтый",size:"большой",favorite:!1},{num:"27",name:"Красный шар с узором",count:"4",year:"2010",shape:"шар",color:"красный",size:"большой",favorite:!1},{num:"28",name:"Бордовый шар с узором",count:"10",year:"2010",shape:"шар",color:"красный",size:"большой",favorite:!1},{num:"29",name:"Старинный шар с цветами",count:"5",year:"1950",shape:"шар",color:"желтый",size:"большой",favorite:!0},{num:"30",name:"Старинный шар с узором",count:"8",year:"1950",shape:"шар",color:"желтый",size:"большой",favorite:!0},{num:"31",name:"Красный шар с блёстками",count:"8",year:"2010",shape:"шар",color:"красный",size:"большой",favorite:!1},{num:"32",name:"Синий шар Вселенная",count:"11",year:"1970",shape:"шар",color:"синий",size:"большой",favorite:!1},{num:"33",name:"Синий шар со снежинкой",count:"6",year:"2010",shape:"шар",color:"синий",size:"средний",favorite:!1},{num:"34",name:"Зелёный  шар с узором",count:"8",year:"2010",shape:"шар",color:"зелёный",size:"большой",favorite:!1},{num:"35",name:"Фигурка Лис в шарфе",count:"8",year:"1950",shape:"фигурка",color:"желтый",size:"средний",favorite:!0},{num:"36",name:"Сиреневый шар Метель",count:"1",year:"2000",shape:"шар",color:"синий",size:"большой",favorite:!1},{num:"37",name:"Зелёный  шар Метель",count:"6",year:"2000",shape:"шар",color:"зелёный",size:"большой",favorite:!1},{num:"38",name:"Голубой  шар Метель",count:"6",year:"2000",shape:"шар",color:"синий",size:"большой",favorite:!1},{num:"39",name:"Красная снежинка",count:"6",year:"1990",shape:"снежинка",color:"красный",size:"большой",favorite:!1},{num:"40",name:"Снежинка золотая",count:"12",year:"2020",shape:"снежинка",color:"желтый",size:"большой",favorite:!1},{num:"41",name:"Снежинка арктическая",count:"11",year:"2020",shape:"снежинка",color:"белый",size:"большой",favorite:!1},{num:"42",name:"Зелёный шар",count:"10",year:"1980",shape:"шар",color:"зелёный",size:"средний",favorite:!1},{num:"43",name:"Снежинка двухцветная",count:"6",year:"1960",shape:"снежинка",color:"красный",size:"большой",favorite:!1},{num:"44",name:"Фигурка Ангела",count:"11",year:"1940",shape:"фигурка",color:"красный",size:"средний",favorite:!0},{num:"45",name:"Снежинка новогодняя",count:"1",year:"1980",shape:"снежинка",color:"белый",size:"большой",favorite:!1},{num:"46",name:"Фигурка Мухомор",count:"10",year:"1950",shape:"фигурка",color:"красный",size:"малый",favorite:!1},{num:"47",name:"Фигурка Колодец",count:"6",year:"1950",shape:"фигурка",color:"красный",size:"малый",favorite:!1},{num:"48",name:"Желтый шар с бантом",count:"6",year:"1960",shape:"шар",color:"желтый",size:"большой",favorite:!1},{num:"49",name:"Снежинка с бирюзой",count:"4",year:"1980",shape:"снежинка",color:"желтый",size:"большой",favorite:!1},{num:"50",name:"Колокольчик большой",count:"3",year:"2020",shape:"колокольчик",color:"красный",size:"большой",favorite:!1},{num:"51",name:"Шишка с изморозью",count:"12",year:"1970",shape:"шишка",color:"красный",size:"малый",favorite:!1},{num:"52",name:"Красный шар с надписью",count:"12",year:"1990",shape:"шар",color:"красный",size:"большой",favorite:!0},{num:"53",name:"Снежинка серебристая",count:"6",year:"2020",shape:"снежинка",color:"белый",size:"большой",favorite:!1},{num:"54",name:"Зелёный шар с рисунком",count:"6",year:"2010",shape:"шар",color:"зелёный",size:"большой",favorite:!1},{num:"55",name:"Пряничный домик",count:"1",year:"1940",shape:"фигурка",color:"желтый",size:"большой",favorite:!1},{num:"56",name:"Пряничный теремок",count:"1",year:"1940",shape:"фигурка",color:"желтый",size:"малый",favorite:!1},{num:"57",name:"Пряничная избушка",count:"1",year:"1940",shape:"фигурка",color:"желтый",size:"средний",favorite:!1},{num:"58",name:"Фигурка белого медведя",count:"2",year:"1980",shape:"фигурка",color:"белый",size:"средний",favorite:!1},{num:"59",name:"Желтый шар с надписью",count:"10",year:"1990",shape:"шар",color:"желтый",size:"средний",favorite:!1},{num:"60",name:"Фигурка Голубь",count:"12",year:"1940",shape:"фигурка",color:"белый",size:"средний",favorite:!0}]},303:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.Card=a.CardV=a.Array2=a.cardContainer=void 0;const n=t(33),r=t(557),o=t(245),s=t(146);a.cardContainer=document.querySelector(".card-container");const c=new n.CardDataModel;let i;function l(){return c.build().then((e=>{i=e.data,m(i),i.forEach((e=>{a.Array2.push(e)}))}))}a.Array2=[],a.CardV=l;const u=document.querySelector(".item-span");l();const d=[];function m(e){let t="";a.cardContainer.innerHTML="",e.map((e=>{t+=`\n             <div class="card" data-num="${e.num}">\n             <h2 class="card-title">${e.name}</h2>\n             <img class="card-img" src="assets/toys/${e.num}.webp" alt="toy">\n               <div class="card-description">      \n                 <p class="count">Количество:<span>${e.count}</span></p>\n                 <p class="year">Год покупки:<span>${e.year}</span></p>\n                 <p class="shape">Форма:<span>${e.shape}</span></p>\n                 <p class="color">Цвет:<span>${e.color}</span></p>\n                 <p class="size">Размер:<span>${e.size}</span></p>\n                 <p class="favorite">Любимая:<span>${e.favorite?"Да":"Нет"}</span></p>\n                </div>\n            <div class="ribbon"></div>\n            </div>`,a.cardContainer.innerHTML=t,document.querySelectorAll(".card").forEach((e=>{null==e||e.addEventListener("click",(a=>{var t,n;const r=a.target,{num:o}=r.dataset;if(o)if(d.includes(o))d.splice(d.indexOf(o),1),null===(t=e.classList)||void 0===t||t.remove("active");else if(d.length<=19)d.push(o),null===(n=e.classList)||void 0===n||n.add("active");else if(d.length>=20){const e=document.getElementById("popup");document.getElementById("closeBtn").addEventListener("click",(()=>{e.style.display="none"})),e.addEventListener("click",(()=>{e.style.display="none"}))}u.textContent=String(d.length)}))}))}))}a.Card=m,(0,o.SortSel)(),(0,r.searchName)(),document.querySelectorAll(".shape").forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("active");const t=e.dataset.filters;a.cardContainer.innerHTML="";const n=i.filter((function(e){return e.shape===t}));m(n),e.classList.contains("active")||m(a.Array2)}))})),document.querySelectorAll(".color-filter").forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("active");const t=e.dataset.filter;a.cardContainer.innerHTML="";const n=i.filter((function(e){return e.color===t}));m(n),e.classList.contains("active")||m(a.Array2)}))})),document.querySelectorAll(".size-input-label").forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("active");const t=e.dataset.filter;a.cardContainer.innerHTML="";const n=i.filter((function(e){return e.size===t}));m(n),e.classList.contains("active")||m(a.Array2)}))}));const f=document.querySelector(".favorite-input-label");f.addEventListener("click",(()=>{f.classList.toggle("active"),a.cardContainer.innerHTML="",m(a.Array2.filter((e=>!0===e.favorite))),f.classList.contains("active")||(a.cardContainer.innerHTML="",m(a.Array2))}));const v=document.querySelector(".switch-start-page"),y=document.querySelector(".main-toy-page"),p=document.querySelector(".main-tree-page"),h=document.querySelector(".main-start-page"),g=document.querySelector(".switch-main-favorites-page"),L=document.querySelector(".switch-main-page"),z=document.querySelector(".logo");v.addEventListener("click",(()=>{h.classList.add("hide"),y.classList.remove("hide")})),g.addEventListener("click",(()=>{h.classList.add("hide"),y.classList.add("hide"),p.classList.remove("hide")})),L.addEventListener("click",(()=>{h.classList.add("hide"),y.classList.remove("hide"),p.classList.add("hide")})),z.addEventListener("click",(()=>{h.classList.remove("hide"),y.classList.add("hide"),p.classList.add("hide")}));const E=document.querySelectorAll(".bg-container .bg");document.querySelector(".main-tree-container"),E&&E.forEach((e=>{e.addEventListener("click",(e=>{const a=e.target,{bg:t}=a.dataset;T.bgImage=t,x()}))}));const T={bgImage:"5",tree:"5",toys:[]},S=document.querySelectorAll(".tree-container .tree");document.querySelector(".main-tree-container"),S&&S.forEach((e=>{e.addEventListener("click",(e=>{const a=e.target,{tree:t}=a.dataset;T.tree=t,x()}))}));const b=document.querySelectorAll(".garland-btns .color-btn"),C=document.querySelectorAll(".light");b&&b.forEach((e=>{e.addEventListener("click",(e=>{const a=e.target,{color:t}=a.dataset;C.forEach((e=>{e.className=`light ${t}`}))}))}));const q=document.querySelector(".snow-control");function $(){const e=document.createElement("i");e.classList.add("fas"),e.classList.add("fa-snowflake"),e.style.left=Math.random()*window.innerWidth+"px",e.style.animationDuration=3*Math.random()+2+"s",document.body.appendChild(e),setTimeout((()=>{e.remove()}),5e3)}let k,M=!0;null==q||q.addEventListener("click",(()=>{M?(M=!1,k=setInterval($,55)):(clearInterval(k),M=!0)}));let w=!0;const A=new Audio,D=document.querySelector(".audio-control");null==D||D.addEventListener("click",(function(){w?(A.src="./assets/audio/audio.mp3",A.play(),w=!1):(A.pause(),w=!0)}));const _=document.querySelector(".garland-tree-container"),H=document.querySelector(".onoffswitch-label");function x(){const e=document.querySelector(".tree__picture");if(e.style.backgroundImage=`url("../assets/bg/${T.bgImage}.jpg")`,e&&(e.innerHTML=`\n      <img id="tree-picture" src="../assets/tree/${T.tree}.png" alt="Tree">\n      <div class="tree__toys-a"></div>\n      `),T.toys.length>0){const e=document.querySelector(".tree__toys-a");e&&(e.innerHTML=""),T.toys.forEach(((a,t)=>{e.innerHTML+=`\n            <img class="toy-tree" src="./assets/toys/${a.numberToy}.webp" data-num="${a.numberToy}" data-numi="${t}" alt="pict" draggable="true" style="top: ${a.position[1]}px; left: ${a.position[0]}px;">\n            `}))}const a=document.querySelector("#tree-picture");a&&a.addEventListener("dragover",(e=>{e.preventDefault()})),a&&a.addEventListener("drop",(e=>{var a,t;const n=e,r=null===(a=n.dataTransfer)||void 0===a?void 0:a.getData("out");"true"==r?T.toys.push({numberToy:`${null===(t=n.dataTransfer)||void 0===t?void 0:t.getData("id")}`,position:[+`${n.layerX}`-+n.dataTransfer.getData("offsetX"),+`${n.layerY}`-+n.dataTransfer.getData("offsetY")]}):"false"==r&&(T.toys[+n.dataTransfer.getData("id")].position=[+`${n.layerX}`-+n.dataTransfer.getData("offsetX"),+`${n.layerY}`-+n.dataTransfer.getData("offsetY")]),x()})),function(){const e=document.querySelectorAll(".toy-tree");e&&e.forEach((e=>{e.addEventListener("dragstart",(a=>{const t=a,n=a.target,{numi:r}=n.dataset;t.dataTransfer&&t.dataTransfer.setData("id",r),t.dataTransfer&&t.dataTransfer.setData("out","false"),t.dataTransfer&&t.dataTransfer.setData("offsetX",String(t.offsetX)),t.dataTransfer&&t.dataTransfer.setData("offsetY",String(t.offsetY)),e.addEventListener("dragend",(e=>{}))}))}))}()}null==H||H.addEventListener("click",(()=>{null==_||_.classList.toggle("hide")})),function(){const e=document.querySelector(".favorites-container");if(e&&(e.innerHTML=""),d.length>0)d.forEach((a=>{e&&(e.innerHTML+=`\n      <div class="favorites-card">\n      <img src="../assets/toys/${a}.webp" class="favorites-card-img" alt="pict" draggable="true" data-num="${a}">\n      <p class="favorites-count">${s.data[+a-1].count}</p>\n      </div>\n      `)}));else for(let a=0;a<20;a++)e&&(e.innerHTML+=`\n      <div class="favorites-card">\n          <img src="../assets/toys/${a+1}.webp" class="favorites-card-img" alt="pict" draggable="true" data-num="${a+1}">\n          <p class="favorites-count">${s.data[a].count}</p>\n      </div>\n      `)}(),function(){const e=document.querySelectorAll(".favorites-card img");e&&e.forEach((e=>{e.addEventListener("dragstart",(e=>{const a=e,t=e.target,{num:n}=t.dataset;a.dataTransfer&&a.dataTransfer.setData("id",n),a.dataTransfer&&a.dataTransfer.setData("out","true"),a.dataTransfer&&a.dataTransfer.setData("offsetX",String(a.offsetX)),a.dataTransfer&&a.dataTransfer.setData("offsetY",String(a.offsetY))}))}))}(),x()}},a={};!function t(n){var r=a[n];if(void 0!==r)return r.exports;var o=a[n]={exports:{}};return e[n].call(o.exports,o,o.exports,t),o.exports}(303)})();
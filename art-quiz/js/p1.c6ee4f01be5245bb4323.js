(()=>{const e=document.querySelector(".page1"),t=document.querySelector(".page2"),n=document.querySelector(".page4"),s=document.querySelector(".page3"),r=document.querySelector(".btn1"),a=document.querySelector(".btn2"),i=document.querySelector(".btn4"),c=(document.querySelector(".btn3"),document.querySelector(".close__btn")),o=document.querySelector(".wrapper-cat");r.addEventListener("click",(function(){e.classList.add("hide"),t.classList.remove("hide"),n.classList.add("hide")})),i.addEventListener("click",(function(){e.classList.add("hide"),n.classList.remove("hide")})),c.addEventListener("click",(function(){e.classList.remove("hide"),n.classList.add("hide")})),a.addEventListener("click",(function(){e.classList.add("hide"),t.classList.remove("hide"),s.classList.remove("hide")}));let d=document.getElementById("minus-btn"),m=document.getElementById("count"),l=document.getElementById("plus-btn"),u=0;m.innerHTML=u,d.addEventListener("click",(()=>{u<=0?m.innerHTML=0:u-=1,m.innerHTML=u})),l.addEventListener("click",(()=>{u+=1,m.innerHTML=u}));const h=document.querySelector(".answer__list"),p=document.querySelector(".image__question"),g=document.querySelector(".play__wrapper"),L=document.querySelector(".question"),w=document.querySelector(".picture__answer-list"),y=document.querySelector(".wrapper__image-question"),v=document.querySelector(".btn1"),f=document.querySelector(".btn2"),E=document.querySelector(".cat-author-games"),_=document.querySelector(".cat-main-wrapper"),A=document.querySelector("main");let k;document.querySelector(".start-page-wrapper");const T=[],M=[];let b,q,H=0,N=0,S=!1,$=!1;function I(e){!function(e){const t=new Image;t.src=`https://raw.githubusercontent.com/k3kit/image-data/master/img/${T[e].imageNum}.jpg`,t.onload=()=>{p.style.backgroundImage=`url('${t.src}')`}}(e),1===T[e].randomAnswerArray.length&&T[e].randomAnswer(T),function(e){h.innerHTML="",T[e].randomAnswerArray.forEach(((e,t)=>{let n=document.createElement("div");n.className="answers__list-item",n.innerHTML=`${T[e].author}`,h.append(n),3===t&&(S=!1)})),b=document.querySelectorAll(".answers__list-item"),b.forEach(((e,t)=>{e.addEventListener("click",(()=>{S||(S=!0,G(t))}))}))}(e)}function j(e){1===T[e].randomAnswerArray.length&&T[e].randomAnswer(T),function(e){w.innerHTML="",T[e].randomAnswerArray.forEach(((e,t)=>{let n=document.createElement("div");n.className="author__answers-item",w.append(n);let s=new Image;s.src=`https://raw.githubusercontent.com/k3kit/image-data/master/img/${e}.jpg`,s.onload=()=>{setTimeout((()=>{n.style.backgroundImage=`url('${s.src}')`,n.classList.add("filter"),3===t&&(S=!1),setTimeout((()=>{n.classList.remove("filter")}),600)}),300*t)}})),q=document.querySelectorAll(".author__answers-item"),q.forEach(((e,t)=>{e.addEventListener("click",(()=>{S||(S=!0,G(t),y.classList.add("hide"))}))}))}(e),x(`Какую картину написал ${T[e].author}?`)}function P(e){void 0!==e&&(H=e),N=0;let t=M[H][N];H<12?(I(t),x("Кто написал эту картину?")):(j(t),x(`Какую картину написал ${T[t].author}?`))}function x(e){L.innerHTML=`${e}`}function G(e){if($)return;$=!0;let t=10*H+N;e===T[t].rightAnswer?(T[t].tempGuessed=!0,B(!0,t)):B(!1,t)}function B(e,t,n=!1){console.log("aaa");let s=document.createElement("div");const r=new Image;r.src=`https://raw.githubusercontent.com/k3kit/image-data/master/img/${T[t].imageNum}.jpg`,s.append(r);const a=document.createElement("div");a.innerHTML=`${T[t].author}`;const i=document.createElement("div");i.innerHTML=`${T[t].name}`;const c=document.createElement("div");c.innerHTML=`${T[t].year}`;const o=document.createElement("div");o.innerHTML="Продолжить",s.append(a),s.append(i),s.append(c),s.append(o),n?(s.className="result__answer",o.className="popup__btn-next win",_.append(s),o.addEventListener("click",(()=>{O(s),A.classList.remove("overflow-full"),$=!1}))):(g.append(s),o.addEventListener("click",(()=>{9===N?(M[H].forEach((e=>T[e].saveProgress())),h.innerHTML="",p.style.backgroundImage="none",w.innerHTML="",function(){let e=document.createElement("div");e.className="result__answer";const t=document.createElement("div");t.className="round-result",t.innerHTML="0 / 10";const n=document.createElement("div");n.innerHTML="Следующий квиз",n.className="popup__btn-next win",n.addEventListener("click",(()=>{H++,O(e),P()}));const s=document.createElement("div");s.innerHTML="Главная страница",s.className="popup__btn-next win",s.addEventListener("click",(()=>{M[H].forEach((e=>T[e].resetProgress())),O(e),C(H<=11?"pic":"author"),z()})),e.append(t),11===H||23===H||e.append(n),e.append(s),g.append(e),function(e,t){for(let e=0;e<=F();e++)t.innerHTML=`${e} / 10`}(0,t)}()):H<12?I(M[H][++N]):j(M[H][++N]),O(s),$=!1})),e?(s.className="result__answer win",o.className="popup__btn-next win"):(s.className="result__answer loose",o.className="popup__btn-next loose"))}function F(){return M[H].reduce(((e,t)=>(T[t].guessed?1:0)+e),0)}function O(e){e.classList.add("hidden-answer-popup"),setTimeout((()=>{e.remove()}),500)}function z(){h.innerHTML="",L.innerHTML="",p.classList.add("hide"),p.classList.remove("hide"),w.innerHTML="",y.classList.add("hide"),y.classList.remove("hide"),L.classList.add("hide"),L.classList.remove("hide"),_.style.display="",$=!1}function C(e){E.innerHTML="";let t=function(e){let t=[];H="pic"===e?0:12;for(let e=0;e<12;e++)t.push(F()),H++;return t}(e),n=0;"pic"!==e&&(n=120),t.forEach(((t,s)=>{let r=n,a=document.createElement("div");a.className="cat-author-item";let i=document.createElement("div");if(i.className="number-cat",i.innerHTML=s<9?`0${s+1}`:`${s+1}`,a.append(i),0!==t){a.classList.add("played");let n=document.createElement("div");n.className="score-cat",n.innerHTML=`${t} / 10`,n.addEventListener("click",(t=>{t.stopPropagation(),setTimeout((()=>{!function(e){H=e,E.innerHTML="",M[H].forEach(((e,t)=>{let n=document.createElement("div");n.className="cat-author-item",T[e].guessed&&n.classList.add("guessed");const s=new Image;s.src=`https://raw.githubusercontent.com/k3kit/image-data/master/full/${T[e].imageNum}full.jpg`,s.onload=()=>{n.style.backgroundImage=`url('${s.src}')`},E.append(n),n.addEventListener("click",(()=>{B(!0,e,!0)}))}))}(("pic"===e?0:12)+s),z()}),300)})),a.append(n)}a.addEventListener("click",(()=>{_.classList.add("main-hide"),_.classList.remove("main-visible"),g.classList.add("main-visible"),g.classList.remove("main-hide"),A.classList.add("overflow-full"),o.classList.remove("hide"),_.style.display="none",P(r/10)}));const c=new Image;c.src=`https://raw.githubusercontent.com/k3kit/image-data/master/img/${T[n].imageNum}.jpg`,c.onload=()=>{a.style.backgroundImage=`url('${c.src}')`},E.append(a),n+=10}))}!async function(){const e=await fetch("./data.json");k=await e.json(),await k.forEach((e=>T.push(new D(e,k.length)))),randomPicForStartPage()}(),function(){for(let e=0,t=-1;e<240;e++)e%10==0&&(t++,M.push([])),M[t].push(e)}(),v.addEventListener("click",(()=>{C("pic")})),f.addEventListener("click",(()=>{C("author")})),E.addEventListener("click",(function(){_.classList.add("hide")}));class D{constructor(e,t){this.author=e.author,this.imageNum=e.imageNum,this.name=e.name,this.year=e.year,this.rightAnswer=0,this.guessed=!1,this.tempGuessed=!1,this.randomAnswerArray=[+this.imageNum],this.ArrayLength=t}randomAnswer(e){for(;this.randomAnswerArray.length<4;){let t=Math.floor(Math.random()*this.ArrayLength);this.randomAnswerArray.some((n=>e[n].author===e[t].author))?this.randomAnswer(e):this.randomAnswerArray.push(t)}this.randomAnswerArray.sort((()=>Math.random()-.5)),this.rightAnswer=this.randomAnswerArray.indexOf(+this.imageNum)}reset(){this.guessed=!1,this.tempGuessed=!1,this.randomAnswerArray=[+this.imageNum],this.rightAnswer=0}saveProgress(){this.guessed=this.tempGuessed,this.tempGuessed=!1}resetProgress(){this.tempGuessed=!1}}})();
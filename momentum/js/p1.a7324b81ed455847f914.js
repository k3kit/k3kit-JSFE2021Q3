(()=>{"use strict";const e=[{title:"Aqua Caelestis ",src:"assets/sounds/AquaCaelestis.mp3",duration:" 00:39"},{title:"River Flows In You ",src:"assets/sounds/RiverFlowsInYou.mp3",duration:" 01:37"},{title:"Ennio Morricone ",src:"assets/sounds/EnnioMorricone.mp3",duration:" 01:37"},{title:"Summer Wind ",src:"assets/sounds/SummerWind.mp3",duration:" 01:50"}],t=document.querySelector(".time"),n=document.querySelector(".dates"),o=document.querySelector(".greeting"),c=document.querySelector(".name"),r=document.querySelector(".slide-prev"),a=document.querySelector(".slide-next"),i=document.querySelector(".ru"),l=document.querySelector(".en"),d=document.querySelector(".greeting-container"),s=document.querySelector(".quote-container"),u=document.querySelector(".weather");let m="en";const y={en:{night:"Good night",morning:"Good morning",afternoon:"Good afternoon",evening:"Good evening"},ru:{night:"Спокойной ночи",morning:"Доброе утро",afternoon:"Добрый день",evening:"Добрый вечер"}},v={en:"m/c",ru:"м/с"},p={en:"Winds speed",ru:"Скорость ветра"},g={en:"Air humidity",ru:"Влажность воздуха"},h={en:"en",ru:"ru"},L={en:"[Enter name]",ru:"[Введите имя]"};function f(){const e=(new Date).getHours();return e>=5&&e<12?"morning":e>=12&&e<18?"afternoon":e>=18&&e<24?"evening":e>=0&&e<5?"night":void 0}function S(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}!function e(){const c=(new Date).toLocaleTimeString();t.textContent=c,setTimeout(e,1e3),function(){const e=(new Date).toLocaleDateString(h[m],{month:"long",day:"numeric",weekday:"long"});n.innerText=e}(),f(),function(e){const t=`${e}`;o.textContent=t}(y[m][f()])}(),i.addEventListener("click",(function(){m="ru",B(m,p[m],g[m],v[m]),N(G[m]),c.placeholder=L[m]})),l.addEventListener("click",(function(){m="en",B(m,p[m],g[m],v[m]),N(G[m]),c.placeholder=L[m]})),window.addEventListener("beforeunload",(function(){localStorage.setItem("name",c.value)})),window.addEventListener("load",(function(){localStorage.getItem("name")&&(c.value=localStorage.getItem("name"))}));const q=document.querySelector(".change-photosource"),E=document.querySelector(".choose-background"),w=document.body;let k,x=S(1,21);async function C(){const e=new Image,t=f();let n=x;"github"==q.value?(n=String(n).padStart(2,"0"),e.src=`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${t}/${n}.jpg`):"unsplash"==q.value?e.src=await I():"flickr"==q.value&&(e.src=await async function(){const e=f();k=E.value||e;const t=` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4e0680f534c7a14f171f97fab53d3a2b&tags=${k}&extras=url_l&format=json&nojsoncallback=1`,n=await fetch(t),o=await n.json();let c=S(1,100);return o.photos.photo[c].url_l}()),e.onload=()=>{w.style.backgroundImage=`url(${e.src})`}}async function I(){const e=f();k=E.value||e;const t=`https://api.unsplash.com/photos/random?orientation=landscape&query=${k}&client_id=SgJLxIlxaQjq9d2g0s7qLFyI5OWo1a90-0wnKRcAPJA`,n=await fetch(t);return(await n.json()).urls.regular}C(),E.addEventListener("change",(function(){k=E.value,C()})),a.addEventListener("click",(function(){x<20?x++:x=0,C()})),r.addEventListener("click",(function(){x>1?x--:x=20,C()})),q.addEventListener("change",C),setTimeout(I,1e3);const $=document.querySelector(".weather-icon"),b=document.querySelector(".temperature"),M=document.querySelector(".weather-description"),T=document.querySelector(".city"),A=document.querySelector(".wind"),H=document.querySelector(".humidity"),j=document.querySelector(".weather-error");async function B(e,t,n,o){try{const c=`https://api.openweathermap.org/data/2.5/weather?q=${T.value}&lang=${e}&appid=6d8e50fc650417e5a3c52a8404cbff75&units=metric`,r=await fetch(c),a=await r.json();404==r.status?(j.textContent=`${T.value} is not found`,b.textContent="",M.textContent="",A.textContent="",H.textContent=""):400==r.status?(j.textContent="Please enter the city",b.textContent="",M.textContent="",A.textContent="",H.textContent=""):j.textContent="",$.className="weather-icon owf",$.classList.add(`owf-${a.weather[0].id}`),b.textContent=`${a.main.temp.toFixed(0)}°C`,M.textContent=a.weather[0].description,A.textContent=`${t} ${a.wind.speed.toFixed(0)}${o}`,H.textContent=`${n} ${a.main.humidity}%`}catch(e){console.error()}}function _(){localStorage.setItem("city",T.value),D()}function D(){var e=localStorage.getItem("city");T.value=e}localStorage.getItem("city")?D():_(),window.addEventListener("beforeunload",_),D(),T.addEventListener("keypress",(function(e){"Enter"===e.code&&(B(m,p[m],g[m],v[m]),T.blur())})),B(m,p[m],g[m],v[m]),T.addEventListener("change",B);let F=S(0,62);const G={ru:"data.json",en:"quotes.json"},W=document.querySelector(".quote"),R=document.querySelector(".author"),J=document.querySelector(".change-quote");async function N(e){const t=e,n=await fetch(t),o=await n.json();W.innerHTML=o[F].text,R.innerHTML=o[F].author}N(G[m]),J.addEventListener("click",(function(){F<62?F++:F=0,N(G[m])}));const P=document.querySelector(".play"),Y=document.querySelector(".play-prev"),K=document.querySelector(".play-next"),O=document.querySelector(".play-list"),Q=document.querySelector(".song-title"),z=document.querySelector("#progress-bar"),U=document.querySelector(".current-time"),V=document.querySelector(".duration-time"),X=document.querySelector("#volume"),Z=document.querySelector(".volume-buttom");let ee=0,te=!0;const ne=new Audio;for(let t=0;t<e.length;t++){let n=document.createElement("li");n.classList.add("play-item"),n.textContent=e[t].title+"|"+e[t].duration,n.setAttribute("data-src",e[t].src),O.append(n)}const oe=document.querySelectorAll(".play-item");function ce(){ne.src=e[ee].src,te?(ne.play(),te=!1,P.classList.add("pause")):(ne.pause(),P.classList.remove("pause"),te=!0,oe.forEach((e=>e.classList.remove("item-active"))));let t=document.querySelector(`[data-src="${e[ee].src}"]`);oe.forEach((e=>e.classList.remove("item-active"))),t.classList.toggle("item-active")}function re(){ee++,ee>3&&(ee=0),ne.src=e[ee].src,Q.innerHTML=e[ee].title,te=!0,ce()}ne.addEventListener("ended",(function(){re()})),X.addEventListener("input",(function(){0==X.value?Z.classList.add("mute"):Z.classList.remove("mute")})),Z.addEventListener("click",(function(){0!=ne.volume?(ne.volume=0,volume.value=0,Z.classList.add("mute")):(ne.volume=.5,volume.value=50,Z.classList.remove("mute"))})),P.addEventListener("click",ce),K.addEventListener("click",re),Y.addEventListener("click",(function(){ee--,ee<0&&(ee=3),ne.src=e[ee].src,Q.innerHTML=e[ee].title,te=!0,ce()})),z.addEventListener("change",(function(){ne.currentTime=z.value})),volume.addEventListener("change",(function(){ne.volume=X.value/100})),setInterval((function(){z.max=ne.duration,z.value=ne.currentTime,U.innerHTML=function(e){let t=Math.floor(e/60),n=Math.floor(e-60*t);return n<10&&(n=`0${n}`),`${t}:${n}`}(Math.floor(ne.currentTime)),V.innerHTML=e[ee].duration}),500);let ae=document.querySelector(".popup__bg"),ie=document.querySelector(".popup"),le=document.querySelectorAll(".open-popup"),de=document.querySelector(".close-popup");le.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),ae.classList.add("active"),ie.classList.add("active")}))})),de.addEventListener("click",(()=>{ae.classList.remove("active"),ie.classList.remove("active")})),document.addEventListener("click",(e=>{e.target===ae&&(ae.classList.remove("active"),ie.classList.remove("active"))}));const se=document.getElementById("time"),ue=document.getElementById("date"),me=document.getElementById("greeting"),ye=document.getElementById("quotes"),ve=document.getElementById("weather"),pe=document.getElementById("audioplayer"),ge=document.getElementById("todo"),he=document.querySelector(".player"),Le=(document.querySelector(".button-todo"),document.querySelector(".todo"));function fe(){0==se.checked?t.style.opacity=0:t.style.opacity=1,0==ue.checked?n.style.opacity=0:n.style.opacity=1,0==me.checked?d.style.opacity=0:d.style.opacity=1,0==ye.checked?s.style.opacity=0:s.style.opacity=1,0==ve.checked?u.style.opacity=0:u.style.opacity=1,0==pe.checked?he.style.opacity=0:he.style.opacity=1,0==ge.checked?Le.style.opacity=0:Le.style.opacity=1}se.addEventListener("change",fe),ue.addEventListener("change",fe),me.addEventListener("change",fe),ye.addEventListener("change",fe),ve.addEventListener("change",fe),pe.addEventListener("change",fe),ge.addEventListener("change",fe),q.addEventListener("change",fe),fe();const Se=document.querySelector(".todo-list"),qe=document.createElement("li"),Ee=document.createElement("div"),we=document.createElement("btn"),ke=document.createElement("btn"),xe=document.querySelector(".todo-add"),Ce=document.querySelector(".todo-input");let Ie;function $e(){let e=document.querySelectorAll(".todo-complete"),t=document.querySelectorAll(".todo-remove"),n=document.querySelectorAll(".todo-item");e.forEach(((e,t)=>{e.addEventListener("click",(()=>{n[t].classList.toggle("todo-item-completed"),Ie=Se.innerHTML,localStorage.setItem("todo",Ie)}))})),t.forEach(((e,t)=>{e.addEventListener("click",(()=>{n[t].remove(),Ie=Se.innerHTML,localStorage.setItem("todo",Ie)}))}))}document.querySelector(".todo"),document.querySelector(".close-todo"),qe.classList.add("play-item","todo-item"),we.classList.add("todo-remove"),ke.classList.add("todo-complete"),Ee.classList.add("todo-controls"),ke.textContent="☑",we.textContent="x",Ee.appendChild(ke),Ee.appendChild(we),Se.innerHTML=localStorage.getItem("todo"),$e(),xe.addEventListener("click",(()=>{let e=document.querySelectorAll(".todo-item").length,t=Ce.value.trim();t.length>0&&e<7&&(qe.textContent=t,qe.appendChild(Ee),Se.append(qe.cloneNode(!0)),Ce.value="",Ie=Se.innerHTML),$e(),localStorage.setItem("todo",Ie)}))})();
console.log(`сделано все кроме сохранения и перевода настроек и проигрывание треков по клику на плейлисте`);
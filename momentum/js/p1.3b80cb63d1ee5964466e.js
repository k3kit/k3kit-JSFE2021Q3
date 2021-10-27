(()=>{"use strict";const e=[{title:"Aqua Caelestis ",src:"assets/sounds/AquaCaelestis.mp3",duration:" 00:39"},{title:"River Flows In You ",src:"assets/sounds/RiverFlowsInYou.mp3",duration:" 01:37"},{title:"Ennio Morricone ",src:"assets/sounds/EnnioMorricone.mp3",duration:" 01:37"},{title:"Summer Wind ",src:"assets/sounds/SummerWind.mp3",duration:" 01:50"}],t=document.querySelector(".time"),n=document.querySelector(".dates"),o=document.querySelector(".greeting"),c=document.querySelector(".name"),r=document.querySelector(".slide-prev"),a=document.querySelector(".slide-next"),u=document.querySelector(".ru"),d=document.querySelector(".en"),i=document.querySelector(".greeting-container"),l=document.querySelector(".quote-container"),s=document.querySelector(".weather");let m="en";const y={en:{night:"Good night",morning:"Good morning",afternoon:"Good afternoon",evening:"Good evening"},ru:{night:"Спокойной ночи",morning:"Доброе утро",afternoon:"Добрый день",evening:"Добрый вечер"}},p={en:"m/c",ru:"м/с"},h={en:"Winds speed",ru:"Скорость ветра"},v={en:"Air humidity",ru:"Влажность воздуха"},g={en:"en",ru:"ru"},S={en:"[Enter name]",ru:"[Введите имя]"},q={en:"Choose photo source",ru:"Выберите источник фото"},L={en:"Enter background theme",ru:"Введите тему фона"},f={ru:"показать элемементы/скрыть",en:"Show items/hide"},x=document.querySelector(".text-choose-photosource"),E=document.querySelector(".text-choose-background"),C=document.querySelector(".text-show");function w(){const e=(new Date).getHours();return e>=5&&e<12?"morning":e>=12&&e<18?"afternoon":e>=18&&e<24?"evening":e>=0&&e<5?"night":void 0}x.textContent="Choose photo source",function e(){const c=(new Date).toLocaleTimeString();t.textContent=c,setTimeout(e,1e3),function(){const e=(new Date).toLocaleDateString(g[m],{month:"long",day:"numeric",weekday:"long"});n.innerText=e}(),w(),function(e){const t=`${e}`;o.textContent=t}(y[m][w()])}();const k={en:{1:"time ",2:"date ",3:"greeting ",4:"quotes ",5:"weather ",6:"audioplayer ",7:"todo "},ru:{1:"время",2:"дата",3:"приветствие ",4:"цитаты",5:"погода",6:"аудиоплеер",7:"список дел "}},I=document.querySelector(".text-time"),b=document.querySelector(".text-date"),$=document.querySelector(".text-greeting"),M=document.querySelector(".text-quotes"),T=document.querySelector(".text-weather"),A=document.querySelector(".text-audioplayer"),H=document.querySelector(".text-todo");function j(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}u.addEventListener("click",(function(){m="ru",z(m,h[m],v[m],p[m]),oe(Z[m]),c.placeholder=S[m],x.textContent=q[m],E.textContent=L[m],C.textContent=f[m],I.textContent=k[m][1],b.textContent=k[m][2],$.textContent=k[m][3],M.textContent=k[m][4],T.textContent=k[m][5],A.textContent=k[m][6],H.textContent=k[m][7]})),d.addEventListener("click",(function(){m="en",z(m,h[m],v[m],p[m]),oe(Z[m]),c.placeholder=S[m],x.textContent=q[m],E.textContent=L[m],C.textContent=f[m],I.textContent=k[m][1],b.textContent=k[m][2],$.textContent=k[m][3],M.textContent=k[m][4],T.textContent=k[m][5],A.textContent=k[m][6],H.textContent=k[m][7]})),window.addEventListener("beforeunload",(function(){localStorage.setItem("name",c.value)})),window.addEventListener("load",(function(){localStorage.getItem("name")&&(c.value=localStorage.getItem("name"))}));const B=document.querySelector(".change-photosource"),_=document.querySelector(".choose-background"),D=document.body;let F,G=j(1,21);async function W(){const e=new Image,t=w();let n=G;"github"==B.value?(n=String(n).padStart(2,"0"),e.src=`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${t}/${n}.jpg`):"unsplash"==B.value?e.src=await R():"flickr"==B.value&&(e.src=await async function(){const e=w();F=_.value||e;const t=` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=4e0680f534c7a14f171f97fab53d3a2b&tags=${F}&extras=url_l&format=json&nojsoncallback=1`,n=await fetch(t),o=await n.json();let c=j(1,100);return o.photos.photo[c].url_l}()),e.onload=()=>{D.style.backgroundImage=`url(${e.src})`}}async function R(){const e=w();F=_.value||e;const t=`https://api.unsplash.com/photos/random?orientation=landscape&query=${F}&client_id=SgJLxIlxaQjq9d2g0s7qLFyI5OWo1a90-0wnKRcAPJA`,n=await fetch(t);return(await n.json()).urls.regular}W(),_.addEventListener("change",(function(){F=_.value,W()})),a.addEventListener("click",(function(){G<20?G++:G=0,W()})),r.addEventListener("click",(function(){G>1?G--:G=20,W()})),B.addEventListener("change",W),setTimeout(R,1e3);const J=document.querySelector(".weather-icon"),N=document.querySelector(".temperature"),P=document.querySelector(".weather-description"),Y=document.querySelector(".city"),K=document.querySelector(".wind"),O=document.querySelector(".humidity"),Q=document.querySelector(".weather-error");async function z(e,t,n,o){try{const c=`https://api.openweathermap.org/data/2.5/weather?q=${Y.value}&lang=${e}&appid=6d8e50fc650417e5a3c52a8404cbff75&units=metric`,r=await fetch(c),a=await r.json();404==r.status?(Q.textContent=`${Y.value} is not found`,N.textContent="",P.textContent="",K.textContent="",O.textContent=""):400==r.status?(Q.textContent="Please enter the city",N.textContent="",P.textContent="",K.textContent="",O.textContent=""):Q.textContent="",J.className="weather-icon owf",J.classList.add(`owf-${a.weather[0].id}`),N.textContent=`${a.main.temp.toFixed(0)}°C`,P.textContent=a.weather[0].description,K.textContent=`${t} ${a.wind.speed.toFixed(0)}${o}`,O.textContent=`${n} ${a.main.humidity}%`}catch(e){console.error()}}function U(){localStorage.setItem("city",Y.value),V()}function V(){var e=localStorage.getItem("city");Y.value=e}localStorage.getItem("city")?V():U(),window.addEventListener("beforeunload",U),V(),Y.addEventListener("keypress",(function(e){"Enter"===e.code&&(z(m,h[m],v[m],p[m]),Y.blur())})),z(m,h[m],v[m],p[m]),Y.addEventListener("change",z);let X=j(0,62);const Z={ru:"data.json",en:"quotes.json"},ee=document.querySelector(".quote"),te=document.querySelector(".author"),ne=document.querySelector(".change-quote");async function oe(e){const t=e,n=await fetch(t),o=await n.json();ee.innerHTML=o[X].text,te.innerHTML=o[X].author}oe(Z[m]),ne.addEventListener("click",(function(){X<62?X++:X=0,oe(Z[m])}));const ce=document.querySelector(".play"),re=document.querySelector(".play-prev"),ae=document.querySelector(".play-next"),ue=document.querySelector(".play-list"),de=document.querySelector(".song-title"),ie=document.querySelector("#progress-bar"),le=document.querySelector(".current-time"),se=document.querySelector(".duration-time"),me=document.querySelector("#volume"),ye=document.querySelector(".volume-buttom");let pe=0,he=!0;const ve=new Audio;for(let t=0;t<e.length;t++){let n=document.createElement("li");n.classList.add("play-item"),n.textContent=e[t].title+"|"+e[t].duration,n.setAttribute("data-src",e[t].src),ue.append(n)}const ge=document.querySelectorAll(".play-item");function Se(){ve.src=e[pe].src,he?(ve.play(),he=!1,ce.classList.add("pause")):(ve.pause(),ce.classList.remove("pause"),he=!0,ge.forEach((e=>e.classList.remove("item-active"))));let t=document.querySelector(`[data-src="${e[pe].src}"]`);ge.forEach((e=>e.classList.remove("item-active"))),t.classList.toggle("item-active")}function qe(){pe++,pe>3&&(pe=0),ve.src=e[pe].src,de.innerHTML=e[pe].title,he=!0,Se()}ve.addEventListener("ended",(function(){qe()})),me.addEventListener("input",(function(){0==me.value?ye.classList.add("mute"):ye.classList.remove("mute")})),ye.addEventListener("click",(function(){0!=ve.volume?(ve.volume=0,volume.value=0,ye.classList.add("mute")):(ve.volume=.5,volume.value=50,ye.classList.remove("mute"))})),ce.addEventListener("click",Se),ae.addEventListener("click",qe),re.addEventListener("click",(function(){pe--,pe<0&&(pe=3),ve.src=e[pe].src,de.innerHTML=e[pe].title,he=!0,Se()})),ie.addEventListener("change",(function(){ve.currentTime=ie.value})),volume.addEventListener("change",(function(){ve.volume=me.value/100})),setInterval((function(){ie.max=ve.duration,ie.value=ve.currentTime,le.innerHTML=function(e){let t=Math.floor(e/60),n=Math.floor(e-60*t);return n<10&&(n=`0${n}`),`${t}:${n}`}(Math.floor(ve.currentTime)),se.innerHTML=e[pe].duration}),500);let Le=document.querySelector(".popup__bg"),fe=document.querySelector(".popup"),xe=document.querySelectorAll(".open-popup"),Ee=document.querySelector(".close-popup");xe.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),Le.classList.add("active"),fe.classList.add("active")}))})),Ee.addEventListener("click",(()=>{Le.classList.remove("active"),fe.classList.remove("active")})),document.addEventListener("click",(e=>{e.target===Le&&(Le.classList.remove("active"),fe.classList.remove("active"))}));const Ce=document.getElementById("time"),we=document.getElementById("date"),ke=document.getElementById("greeting"),Ie=document.getElementById("quotes"),be=document.getElementById("weather"),$e=document.getElementById("audioplayer"),Me=document.getElementById("todo"),Te=document.querySelector(".player"),Ae=(document.querySelector(".button-todo"),document.querySelector(".todo"));function He(){0==Ce.checked?t.style.opacity=0:t.style.opacity=1,0==we.checked?n.style.opacity=0:n.style.opacity=1,0==ke.checked?i.style.opacity=0:i.style.opacity=1,0==Ie.checked?l.style.opacity=0:l.style.opacity=1,0==be.checked?s.style.opacity=0:s.style.opacity=1,0==$e.checked?Te.style.opacity=0:Te.style.opacity=1,0==Me.checked?Ae.style.opacity=0:Ae.style.opacity=1}Ce.addEventListener("change",He),we.addEventListener("change",He),ke.addEventListener("change",He),Ie.addEventListener("change",He),be.addEventListener("change",He),$e.addEventListener("change",He),Me.addEventListener("change",He),B.addEventListener("change",He),He();const je=document.querySelector(".todo-list"),Be=document.createElement("li"),_e=document.createElement("div"),De=document.createElement("btn"),Fe=document.createElement("btn"),Ge=document.querySelector(".todo-add"),We=document.querySelector(".todo-input");let Re;function Je(){let e=document.querySelectorAll(".todo-complete"),t=document.querySelectorAll(".todo-remove"),n=document.querySelectorAll(".todo-item");e.forEach(((e,t)=>{e.addEventListener("click",(()=>{n[t].classList.toggle("todo-item-completed"),Re=je.innerHTML,localStorage.setItem("todo",Re)}))})),t.forEach(((e,t)=>{e.addEventListener("click",(()=>{n[t].remove(),Re=je.innerHTML,localStorage.setItem("todo",Re)}))}))}document.querySelector(".todo"),document.querySelector(".close-todo"),Be.classList.add("play-item","todo-item"),De.classList.add("todo-remove"),Fe.classList.add("todo-complete"),_e.classList.add("todo-controls"),Fe.textContent="☑",De.textContent="x",_e.appendChild(Fe),_e.appendChild(De),je.innerHTML=localStorage.getItem("todo"),Je(),Ge.addEventListener("click",(()=>{let e=document.querySelectorAll(".todo-item").length,t=We.value.trim();t.length>0&&e<7&&(Be.textContent=t,Be.appendChild(_e),je.append(Be.cloneNode(!0)),We.value="",Re=je.innerHTML),Je(),localStorage.setItem("todo",Re)}))})();




console.log(`сделано все кроме сохранения настроек и проигрование треков по клику из плейлиста`);
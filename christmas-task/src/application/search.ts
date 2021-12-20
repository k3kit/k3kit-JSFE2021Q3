import { Array2, Card, cardContainer } from "..";

const search = document.querySelector('.search') as HTMLInputElement;
export function searchName() {
  search.addEventListener("keyup", function(){
      cardContainer.innerHTML = '';
      console.log(search.value.length);
      const sorted = Array2.filter(function (it) { 
          return  it.name.toLowerCase().includes(search.value.toLowerCase())
      })
      if(search.value.length > 2 && sorted.length === 0){
          return  popup.style.display = 'block';
      }
      Card(sorted)

})
}


const popup = <HTMLElement>document.getElementById("popup");
const closeBtn = <HTMLElement>document.getElementById("closeBtn");

closeBtn.addEventListener('click', ()=>{
    popup.style.display = 'none';
});
popup.addEventListener('click', ()=>{
    popup.style.display = 'none';
});


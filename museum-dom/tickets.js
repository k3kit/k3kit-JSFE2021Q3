const total = document.getElementById('total');
const amount = document.querySelectorAll('.tickets__btn');
const label  = document.querySelectorAll ("tickets__type-item-container");
const radio1 = document.getElementById('r1');
const radio2 = document.getElementById('r2');
const radio3 = document.getElementById('r3');
const basic = document.getElementById('basic');
const senior = document.getElementById('senior');

const firstType = 20;
const secondType = 25;
const thirdType1 = 40;



if(localStorage.getItem('basic') != null){
    basic.value = localStorage.getItem('basic')
}

if(localStorage.getItem('senior') != null){
    basic.value = localStorage.getItem('senior')
}


if(localStorage.getItem('type') != null){
  switch (localStorage.getItem('type')) {
      case 'first':
          radio1.checked =true; 
          totalUpdate(firstType)
          break;
     case 'second':
          radio2.checked =true; 
          totalUpdate(secondType)
          break;
     case 'third':
          radio3.checked =true; 
          totalUpdate(thirdType)
          break;
    
  }
}



amount.forEach(element => element.addEventListener('click',function(){
    localStorage.setItem('basic', basic.value);
    localStorage.setItem('senior', senior.value);
    if(localStorage.getItem('type')!== null){
        switch (localStotage.getItem('type')) {
            case 'first':
                totalUpdate(firstType)
                break;
            case 'second':
                totalUpdate(secondType)
                break;
             case 'third':
                totalUpdate(thirdType)
                break;
        }
    }else{
        totalUpdate(firstType)
    }
}));

label.forEach((element) => element.addEventListener('click',function(){
    localStorage.setItem('type', item.id);
    if (item.id=='first') {
        totalUpdate(firstType)
    }else if (item.id=='second') {
        totalUpdate(secondType)
    }else{
    totalUpdate(thirdType)
}
    
}));

function totalUpdate(type){
    let totalValue = type * basic.value + type / 2 * senior.value;
    total.textContent = `${totalValue}`;

}
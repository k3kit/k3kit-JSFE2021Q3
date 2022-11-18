const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const page4 = document.querySelector('.page4');
const page3 = document.querySelector('.page3');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn4 = document.querySelector('.btn4');
const closeSet = document.querySelector('.close__btn');
const wrapper = document.querySelector('.wrapper-cat');
const btnHome = document.querySelector('.btn-home');
const btnHomeX = document.querySelector('.btn-homeX');
const btnDef = document.querySelector('.btn-default');
const btnSave = document.querySelector('.btn-save');

btn1.addEventListener('click', () => {
  page1.classList.add('hide');
  page2.classList.remove('hide');
  page4.classList.add('hide');
});
btn4.addEventListener('click', () => {
  page1.classList.add('hide');
  page4.classList.remove('hide');
});
closeSet.addEventListener('click', () => {
  page1.classList.remove('hide');
  page4.classList.add('hide');
});

btn2.addEventListener('click', () => {
  page1.classList.add('hide');
  page2.classList.remove('hide');
  page3.classList.remove('hide');
});
btnHome.addEventListener('click', () => {
  page1.classList.remove('hide');
  page2.classList.add('hide');
});
btnDef.addEventListener('click', () => {
  page1.classList.remove('hide');
  page4.classList.add('hide');
});
btnSave.addEventListener('click', () => {
  page1.classList.remove('hide');
  page4.classList.add('hide');
});

btnHomeX.addEventListener('click', () => {
  goToCat();
  resetProgress();
  page1.classList.remove('hide');
  page2.classList.add('hide');
  wrapper.classList.add('hide');
});

const answerList = document.querySelector('.answer__list');
const imageQuestion = document.querySelector('.image__question');
const playWrap = document.querySelector('.play__wrapper');
const questionText = document.querySelector('.question');
const pictureAnswerList = document.querySelector('.picture__answer-list');
const pictureQuestion = document.querySelector('.wrapper__image-question');
const artistQuiz = document.querySelector('.btn1');
const picturesQuiz = document.querySelector('.btn2');
const catScore = document.querySelector('.cat-author-games');
const catMainWrapper = document.querySelector('.cat-main-wrapper');
const mainWrapper = document.querySelector('main');

let data;
const array = [];
const rounds = [];
let roundNum = 0;
let roundStep = 0;
let questionAnswers;
let playAuthorAnswers;
let isNextAnswerChanging = false;
let isCheckingAnswer = false;

loadData();
makeRounds();

artistQuiz.addEventListener('click', () => {
  addCategories('pic');
  pictureQuestion.classList.remove('hide');
  imageQuestion.classList.remove('hide');
});

picturesQuiz.addEventListener('click', () => {
  addCategories('author');
  imageQuestion.classList.add('hide');
  pictureQuestion.classList.add('hide');
});
catScore.addEventListener('click', () => {
  catMainWrapper.classList.add('hide');
});

async function loadData() {
  const res = await fetch('./data.json');
  data = await res.json();
  await data.forEach((item) => array.push(new gamePic(item, data.length)));
}

function makeRounds() {
  for (let i = 0, j = -1; i < 240; i++) {
    if (i % 10 === 0) {
      j++;
      rounds.push([]);
    }
    rounds[j].push(i);
  }
}

function insertAnswer(item) {
  answerList.innerHTML = '';
  array[item].randomAnswerArray.forEach((items, index) => {
    const div = document.createElement('div');
    div.className = 'answers__list-item';
    div.innerHTML = `${array[items].author}`;
    answerList.append(div);
    div.classList.add('scale-out-center');
    if (index === 3) isNextAnswerChanging = false;
  });
  questionAnswers = document.querySelectorAll('.answers__list-item');
  questionAnswers.forEach((items, index) => {
    items.addEventListener('click', () => {
      if (!isNextAnswerChanging) {
        isNextAnswerChanging = true;
        checkRightAnswer(index);
        pictureQuestion.classList.remove('hide');
      }
    });
  });
}
function insertPicture(item) {
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/k3kit/image-data/master/img/${array[item].imageNum}.jpg`;
  img.onload = () => {
    imageQuestion.style.backgroundImage = `url('${img.src}')`;
  };
}

function readyToPlay(item) {
  insertPicture(item);
  if (array[item].randomAnswerArray.length === 1) {
    array[item].randomAnswer(array);
  }
  insertAnswer(item);
}

function nextPlay() {
  if (roundStep === 9) {
    saveProgress();
    answerList.innerHTML = '';
    imageQuestion.style.backgroundImage = 'none';
    pictureAnswerList.innerHTML = '';
    insertRoundResults(roundNum);
  } else if (roundNum < 12) {
    readyToPlay(rounds[roundNum][++roundStep]);
  } else {
    readyToPlayAuthor(rounds[roundNum][++roundStep]);
  }
}

function insertAnswersPictures(item) {
  pictureAnswerList.innerHTML = '';
  array[item].randomAnswerArray.forEach((items, index) => {
    const div = document.createElement('div');
    div.className = 'author__answers-item';
    pictureAnswerList.append(div);
    const img = new Image();
    div.classList.add('scale-out-center');
    img.src = `https://raw.githubusercontent.com/k3kit/image-data/master/img/${items}.jpg`;
    img.onload = () => {
      setTimeout(() => {
        div.style.backgroundImage = `url('${img.src}')`;
        div.classList.add('filter');
        if (index === 3) isNextAnswerChanging = false;
        setTimeout(() => {
          div.classList.remove('filter');
        }, 600);
      }, index * 300);
    };
  });
  playAuthorAnswers = document.querySelectorAll('.author__answers-item');
  playAuthorAnswers.forEach((items, index) => {
    items.addEventListener('click', () => {
      if (!isNextAnswerChanging) {
        isNextAnswerChanging = true;
        checkRightAnswer(index);
        pictureQuestion.classList.add('hide');
      }
    });
  });
}

function readyToPlayAuthor(item) {
  if (array[item].randomAnswerArray.length === 1) {
    array[item].randomAnswer(array);
  }
  insertAnswersPictures(item);
  insertQuestion(`Какую картину написал ${array[item].author}?`);
}

function startPlay(index) {
  if (index !== undefined) roundNum = index;
  roundStep = 0;
  let item = rounds[roundNum][roundStep];
  if (roundNum < 12) {
    readyToPlay(item);
    insertQuestion('Кто написал эту картину?');
  } else {
    readyToPlayAuthor(item);
    insertQuestion(`Какую картину написал ${array[item].author}?`);
  }
}
function insertQuestion(question) {
  questionText.innerHTML = `${question}`;
}

function checkRightAnswer(index) {
  if (isCheckingAnswer) return;
  isCheckingAnswer = true;
  const roundCounter = roundNum * 10 + roundStep;
  if (index === array[roundCounter].rightAnswer) {
    array[roundCounter].tempGuessed = true;
    resultPopUp(true, roundCounter);
    playSoundW();
    answerList.classList.add('box-shadow');
  } else {
    resultPopUp(false, roundCounter);
    playSound();
    answerList.classList.add('box-shadow');
  }
}

function resultPopUp(guessed, index, score = false) {
  const div = document.createElement('div');
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/k3kit/image-data/master/img/${array[index].imageNum}.jpg`;
  div.append(img);
  const author = document.createElement('div');
  author.innerHTML = `${array[index].author}`;
  const namePic = document.createElement('div');
  namePic.innerHTML = `${array[index].name}`;
  const YearPic = document.createElement('div');
  YearPic.innerHTML = `${array[index].year}`;
  const btnNext = document.createElement('div');
  btnNext.innerHTML = 'Продолжить';
  div.append(author);
  div.append(namePic);
  div.append(YearPic);
  div.append(btnNext);
  if (!score) {
    playWrap.append(div);
    btnNext.addEventListener('click', () => {
      nextPlay();
      hideFinalScreen(div);
      isCheckingAnswer = false;
    });
    if (guessed) {
      div.className = 'result__answer win';
      btnNext.className = 'popup__btn-next win';
    } else {
      div.className = 'result__answer loose';
      btnNext.className = 'popup__btn-next loose';
    }
  } else {
    div.className = 'result__answer';
    btnNext.className = 'popup__btn-next win';
    catMainWrapper.append(div);
    btnNext.addEventListener('click', () => {
      hideFinalScreen(div);
      mainWrapper.classList.remove('overflow-full');
      mainWrapper.classList.add('scale-out-center');
      isCheckingAnswer = false;
    });
  }
}
function saveProgress() {
  rounds[roundNum].forEach((item) => array[item].saveProgress());
}

function resetProgress() {
  rounds[roundNum].forEach((item) => array[item].resetProgress());
}

function calculateRoundWins() {
  return rounds[roundNum].reduce((sum, current) => (array[current].guessed ? 1 : 0) + sum ,0);
}

function insertRoundResults() {
  let div = document.createElement('div');
  div.className = 'result__answer';
  const divRoundResult = document.createElement('div');
  divRoundResult.className = 'round-result';
  divRoundResult.innerHTML = '0 / 10';
  playSoundRes();
  const divButtonNext = document.createElement('div');
  divButtonNext.innerHTML = 'Следующий квиз';
  divButtonNext.className = 'popup__btn-next win';
  divButtonNext.addEventListener('click', () => {
    roundNum++;
    hideFinalScreen(div);
    startPlay();
  });

  const divButtonMenu = document.createElement('div');
  divButtonMenu.innerHTML = 'Главная страница';
  divButtonMenu.className = 'popup__btn-next win';
  divButtonMenu.addEventListener('click', () => {
    resetProgress();
    hideFinalScreen(div);
    if (roundNum <= 11) {
      addCategories('pic');
    } else {
      addCategories('author');
    }
    goToCat();
  });
  div.append(divRoundResult);
  if (!(roundNum === 11 || roundNum === 23)) {
    div.append(divButtonNext);
  }
  div.append(divButtonMenu);
  playWrap.append(div);
  addScore(roundNum, divRoundResult);
}

function hideFinalScreen(div) {
  div.classList.add('hidden-answer-popup');
  setTimeout(() => {
    div.remove();
  }, 500);
}

function addScore(roundNums, divRoundResult) {
  for (let i = 0; i <= calculateRoundWins(roundNums); i++) {
    divRoundResult.innerHTML = `${i} / 10`;
  }
}

function goToCat() {
  answerList.innerHTML = '';
  questionText.innerHTML = '';
  imageQuestion.classList.add('hide');
  imageQuestion.classList.remove('hide');
  pictureAnswerList.innerHTML = '';
  pictureQuestion.classList.add('hide');
  pictureQuestion.classList.remove('hide');
  questionText.classList.add('hide');
  questionText.classList.remove('hide');
  catMainWrapper.style.display = '';
  isCheckingAnswer = false;
}

function addCategories(name) {
  catScore.innerHTML = '';
  const arrScore = allCatResults(name);
  let counter = 0;
  if (name !== 'pic') counter = 120;
  arrScore.forEach((item, index) => {
    const counterX = counter;
    const div = document.createElement('div');
    div.className = 'cat-author-item';
    const namePic = document.createElement('div');
    namePic.className = 'number-cat';
    namePic.innerHTML = index < 9 ? `0${index + 1}` : `${index + 1}`;
    div.append(namePic);
    if (item !== 0) {
      div.classList.add('played');
      let divCat = document.createElement('div');
      divCat.className = 'score-cat';
      divCat.innerHTML = `${item}/10`;
      divCat.addEventListener('click', (e) => {
        e.stopPropagation();
        setTimeout(() => {
          addScoreCategory((name === 'pic' ? 0 : 12) + index);
          goToCat();
        }, 300);
      });
      div.append(divCat);
    }

    div.addEventListener('click', () => {
      catMainWrapper.classList.add('main-hide');
      catMainWrapper.classList.remove('main-visible');
      playWrap.classList.add('main-visible');
      playWrap.classList.remove('main-hide');
      mainWrapper.classList.add('overflow-full');
      wrapper.classList.remove('hide');
      catMainWrapper.style.display = 'none';
      startPlay(counterX / 10);
    });

    const img = new Image();
    img.src = `https://raw.githubusercontent.com/k3kit/image-data/master/img/${array[counter].imageNum}.jpg`;
    img.onload = () => {
      div.style.backgroundImage = `url('${img.src}')`;
    };
    catScore.append(div);
    counter += 10;
  });
}
function addScoreCategory(counter) {
  roundNum = counter;
  catScore.innerHTML = '';
  rounds[roundNum].forEach((item) => {
    const div = document.createElement('div');
    div.className = 'cat-author-item';
    if (array[item].guessed) div.classList.add('guessed');

    const img = new Image();
    img.src = `https://raw.githubusercontent.com/k3kit/image-data/master/full/${array[item].imageNum}full.jpg`;
    img.onload = () => {
      div.style.backgroundImage = `url('${img.src}')`;
    };
    catScore.append(div);
    div.addEventListener('click', () => {
      resultPopUp(true, item, true);
    });
  });
}
function allCatResults(name) {
  const arrScore = [];
  name === 'pic' ? roundNum = 0 : roundNum = 12;
  for (let i = 0; i < 12; i++) {
    arrScore.push(calculateRoundWins());
    roundNum++;
  }
  return arrScore;
}

class gamePic {
  constructor(item, lenght) {
    this.author = item.author;
    this.imageNum = item.imageNum;
    this.name = item.name;
    this.year = item.year;
    this.rightAnswer = 0;
    this.guessed = false;
    this.tempGuessed = false;
    this.randomAnswerArray = [+this.imageNum];
    this.ArrayLength = lenght;
  }

  randomAnswer(arr) {
    while (this.randomAnswerArray.length < 4) {
      const a = Math.floor(Math.random() * this.ArrayLength);
       this.randomAnswerArray.some((item) => arr[item].author === arr[a].author)
        ? this.randomAnswer(array)
        : this.randomAnswerArray.push(a);
    }
    this.randomAnswerArray.sort(() => Math.random() - 0.5);
    this.rightAnswer = this.randomAnswerArray.indexOf(+this.imageNum);
  }

  reset() {
    this.guessed = false;
    this.tempGuessed = false;
    this.randomAnswerArray = [+this.imageNum];
    this.rightAnswer = 0;
  }

  saveProgress() {
    this.guessed = this.tempGuessed;
    this.tempGuessed = false;
  }

  resetProgress() {
    this.tempGuessed = false;
  }
}

const audio = new Audio();
const recentVolume = document.querySelector('#volume');
const isPlay = true;
const volume = 0;
function playSoundW() {
  if (isPlay) {
    audio.src = ('./assets/win.mp3');
    audio.play();
  }
}
function playSound() {
  if (isPlay) {
    audio.src = ('./assets/lose.mp3');
    audio.play();
  }
}
function playSoundRes() {
  if (isPlay) {
    audio.src = ('./assets/res.mp3');
    audio.play();
  }
}

function volumeChange() {
  audio.volume = recentVolume.value / 100;
}

volume.addEventListener('change', volumeChange);

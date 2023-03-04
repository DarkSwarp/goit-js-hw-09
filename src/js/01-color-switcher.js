//Змінні та початкові умови для відображення
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
let changeColorID = null;
let isActiveStart = false;
let isActiveStop = true;
stopBtn.disabled = true;

//Функція отримання рандомного кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//Функція зміни кольору кожну секунду
function startChangeColor() {
  if (isActiveStart) {
    return;
  }
  isActiveStart = true;
  isActiveStop = false;
  changeColorID = setInterval(() => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    const color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
    console.log(color);
  }, 1000);
}

//Функція призупинення зміни кольору
function stopChangeColor() {
  clearInterval(changeColorID);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  isActiveStart = false;
  isActiveStop = true;
}

//Прослуховування кнопок
startBtn.addEventListener('click', startChangeColor);
stopBtn.addEventListener('click', stopChangeColor);

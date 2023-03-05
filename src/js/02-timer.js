// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// all modules
import Notiflix from 'notiflix';

// one by one
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//Змінні та початкові умови для відображення
const startBtnEl = document.querySelector('[data-start]');
const inputEl = document.querySelector('#datetime-picker');
const dayEl = document.querySelector('[data-days]');
const hourEl = document.querySelector('[data-hours]');
const minEl = document.querySelector('[data-minutes]');
const secEl = document.querySelector('[data-seconds]');
let selectedTime = null;
let currentTime = null;
let deltaTime = null;
let countdownTimerID = null;
startBtnEl.disabled = true;

// Додатковий параметр для календаря з перевіркою вибору дати у майбутнєму
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedTime = selectedDates[0].getTime();
    currentTime = Date.now();
    if (currentTime >= selectedTime) {
      startBtnEl.disabled = true;
      Notify.failure('Please choose a date in the future');
      clearTimer();
      return;
    }
    startBtnEl.disabled = false;
    clearTimer();
  },
};

// Додавання календаря
flatpickr('#datetime-picker', options);

// Прослуховування кнопки старт
startBtnEl.addEventListener('click', startTimer);

//Функція для відображення двох значень у лічільнику
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

//Конвертація часу з мс у формат хх:хх:хх:хх
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

//Функція старту зворотнього лічільника
function startTimer() {
  countdownTimerID = setInterval(() => {
    currentTime = Date.now();
    deltaTime = selectedTime - currentTime;
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    dayEl.textContent = days;
    hourEl.textContent = hours;
    minEl.textContent = minutes;
    secEl.textContent = seconds;
    if (deltaTime <= 0) {
      startBtnEl.disabled = true;
      clearTimer();
    }
  }, 1000);
}

//Функція збросу зворотнього лічільника
function clearTimer() {
  clearInterval(countdownTimerID);
  dayEl.textContent = '00';
  hourEl.textContent = '00';
  minEl.textContent = '00';
  secEl.textContent = '00';
}

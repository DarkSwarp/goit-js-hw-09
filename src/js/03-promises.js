// all modules
import Notiflix from 'notiflix';

// one by one
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Змінні
const formEl = document.querySelector('.form');
let firstDelay = null;
let stepDelay = null;
let amount = null;
let currentDelay = null;

// Прослуховування submit та створення Promise
formEl.addEventListener('submit', event => {
  event.preventDefault();
  firstDelay = Number(formEl.elements.delay.value);
  stepDelay = Number(formEl.elements.step.value);
  amount = formEl.elements.amount.value;
  for (let i = 1; i <= amount; i += 1) {
    if (i === 1) {
      currentDelay = firstDelay;
      checkPromise();
    } else {
      currentDelay += stepDelay;
      checkPromise();
    }

    // Функція для перевірки результату Promise
    function checkPromise() {
      createPromise(i, currentDelay)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }
  }
});

// Функція створення Promise
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

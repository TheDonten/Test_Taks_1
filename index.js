const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
 let startTimer = false;
 let timer = {};
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
function time_to_string(time){
  return time < 10 ? "0" + time : time;
}

function InitTimerAnimator(seconds){

  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainSec = seconds % 60;
  timerEl.textContent = time_to_string(hours) + ":" + time_to_string(minutes) + ":" + time_to_string(remainSec);
  if(seconds === 0 ) {
    return;
  }
  seconds--;

  timer = setTimeout( InitTimerAnimator.bind(this,seconds), 1000)
}


const createTimerAnimator = () => {

  return (seconds) => {
    startTimer = true;
    return new InitTimerAnimator(seconds);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

    if(startTimer) {
      clearTimeout(timer);
      startTimer = false;
    }
    animateTimer(seconds);

  inputEl.value = '';
});

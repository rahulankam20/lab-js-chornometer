import Chronometer from './chronometer.js';

const chronometer = new Chronometer();
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const minDec = document.getElementById('minDec');
const minUni = document.getElementById('minUni');
const secDec = document.getElementById('secDec');
const secUni = document.getElementById('secUni');
const splits = document.getElementById('splits');

function updateDisplay() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

// Start/Stop button functionality
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    chronometer.start(updateDisplay);
    btnLeft.innerText = 'STOP';
    btnLeft.className = 'btn stop';
    btnRight.innerText = 'SPLIT';
    btnRight.className = 'btn split';
  } else {
    chronometer.stop();
    btnLeft.innerText = 'START';
    btnLeft.className = 'btn start';
    btnRight.innerText = 'RESET';
    btnRight.className = 'btn reset';
  }
});

// Reset/Split button functionality
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')) {
    chronometer.reset();
    updateDisplay();
    splits.innerHTML = ''; // Clear splits
  } else {
    const li = document.createElement('li');
    li.innerText = chronometer.split();
    splits.appendChild(li);
  }
});

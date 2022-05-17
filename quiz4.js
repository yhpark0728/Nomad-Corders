const numbRange = document.querySelector('#numberRange');
const numbGuessed = document.querySelector('#nuberGuessed');
const numbChosen = document.querySelector('#numberChosen');
const resWinLost = document.querySelector('#resultWinLost');

const playBtn = document.querySelector('#playButton');

const CLASS_HIDDEN = 'hidden';
const RAND_NUMBER = 'randNumber';

const userNumber = localStorage.setItem('1stNumber', numbRange.value);

function randomNumberGenerator() {
  const getRandNumber = Math.ceil(
    Math.random() * localStorage.getItem('1stNumber')
  );
  return getRandNumber;
}

function handleResultForm(event) {
  event.preventDefault();
  randomNumberGenerator();

  if (numbRange.value != null && numbGuessed != null) {
    resForm.classList.remove('hidden');
    numbChosen.innerText = `You Chose ${numbGuessed}, the machin chose ${numbChosen}`;

    if (numbGuessed === numbChosen) {
      resWinLost = 'You win!';
    } else {
      resWinLost = 'You lost!';
    }
  } else {
    console.log('Input All Number!');
  }
}

playBtn.addEventListener('click', handleResultForm);

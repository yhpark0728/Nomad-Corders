const resultForm = document.querySelector('#resultForm');

const numberRange = resultForm.querySelector('#numberRange');
const numberGuessed = resultForm.querySelector('#numberGuessed');

const gameResult = resultForm.querySelector('#gameResult');

const numberChosen = resultForm.querySelector('.numberChosen');
const resultWinLost = resultForm.querySelector('.resultWinLost');

function onRandomNumberSubmit(event) {
  event.preventDefault();

  const userInputNumber1 = parseInt(numberRange.value);
  const userInputNumber2 = parseInt(numberGuessed.value);

  //console.log(userInputNumber1);
  //console.log(userInputNumber2);

  const machineNumber = Math.floor(Math.random() * userInputNumber1);

  //console.log(machineNumber);

  gameResult.classList.remove('hidden');
  numberChosen.innerHTML = `You chose:${userInputNumber2}, the machine chose:${machineNumber}.`;

  if (userInputNumber2 === machineNumber) {
    resultWinLost.innerHTML = 'You win!';
  } else {
    resultWinLost.innerHTML = 'You lose!';
  }
}

resultForm.addEventListener('submit', onRandomNumberSubmit);

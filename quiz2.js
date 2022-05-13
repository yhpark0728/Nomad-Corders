const h2 = document.querySelector('h2');

function handlerTitleClick() {
  const currentColor = h2.style.color;
  let newColor;
  if (currentColor === 'blue') {
    newColor = 'tomato';
  } else {
    newColor = 'blue';
  }
  h2.style.color = newColor;
}

//h2.style.color = 'blue';
h2.addEventListener('click', handlerTitleClick);

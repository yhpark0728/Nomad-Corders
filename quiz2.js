const h1 = document.querySelector('div.hello:first-child h1');

function handlerTitleClick() {
  const clickedClass = 'clicked';
  if (h1.className === clickedClass) {
    h1.className = '';
  } else {
    h1.className = clickedClass;
  }
  //   const currentColor = h2.style.color;
  //   let newColor;
  //   if (currentColor === 'blue') {
  //     newColor = 'tomato';
  //   } else {
  //     newColor = 'blue';
  //   }
  //   h2.style.color = newColor;
}

//h2.style.color = 'blue';
h1.addEventListener('click', handlerTitleClick);

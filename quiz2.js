const h1 = document.querySelector('div.hello:first-child h1');

function handlerTitleClick() {
  // #3.8
  h1.classList.toggle('clicked');
  // #3.7
  //     const clickedClass = 'clicked';
  //   if (h1.classList.contains(clickedClass)) {
  //     h1.classList.remove(clickedClass);
  //   } else {
  //     h1.classList.add(clickedClass);
  //   }
  // # 3.6
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

const colors = ['#2596be', '#904fae', '#eebc12'];
let getBackground = document.querySelector('body');

function handlerChangeBackGroundColor() {
  let getInnerWidth = window.innerWidth;
  if (0 <= getInnerWidth && getInnerWidth < 500) {
    getBackground.style.background = colors[0];
  } else if (500 <= getInnerWidth && getInnerWidth < 1000) {
    getBackground.style.background = colors[1];
  } else if (getInnerWidth >= 1000) {
    getBackground.style.background = colors[2];
  }
  console.log(window.innerWidth);
}

getBackground.style.background = colors[1];
window.addEventListener('resize', handlerChangeBackGroundColor);

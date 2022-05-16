// <⚠️ DONT DELETE THIS ⚠️>
//import "styles.css";
const colors = ['#1abc9c', '#3498db', '#9b59b6', '#f39c12', '#e74c3c'];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
console.log('hi');

const getElement = document.querySelector('h2');

const superEventHandler = {
  handlerMouseEnter: function () {
    getElement.innerText = 'The mouse is here!';
    getElement.style.color = colors[0];
  },

  handlerMouseLeave: function () {
    getElement.innerText = 'The mouse is gone!';
    getElement.style.color = colors[1];
  },

  handlerWindowResize: function () {
    getElement.innerText = 'You are resized!';
    getElement.style.color = colors[2];
  },

  handlerRightMouseClick: function () {
    getElement.innerText = 'That was a right click!';
    getElement.style.colors = colors[3];
  },
};

getElement.addEventListener('mouseenter', superEventHandler.handlerMouseEnter);
getElement.addEventListener('mouseleave', superEventHandler.handlerMouseLeave);
window.addEventListener('resize', superEventHandler.handlerWindowResize);
window.addEventListener(
  'contextmenu',
  superEventHandler.handlerRightMouseClick
);

document.getElement;

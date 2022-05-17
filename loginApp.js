// const loginForm = document.getElementById('login-form');
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
// const loginButton = document.querySelector('#login-form button');

const link = document.querySelector('a');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';

// JS에서 element를 가져오는 방식을 잘 기억하자.
// 1. const loginForm = document.getElementById('login-form'); 로 div를 가져옴
// 2. const loginInput = loginForm.querySelector("input");
//    const loginButton = loginForm.querySelector("button");
//    loginForm에 포함된 input element와 button elemnet를 가져옴

function onLoginSubmit(event) {
  event.preventDefault();
  //console.log(loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.innterText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// function handleLinkClick(event) {
//   event.preventDefault();
//   console.log(event);
//   alert('clicked');
// }

// loginButton.addEventListener('click', handleBtnClick);
loginForm.addEventListener('submit', onLoginSubmit);
// link.addEventListener('click', handleLinkClick);

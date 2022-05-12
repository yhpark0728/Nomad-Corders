const h1 = document.querySelector('div.hello:first-child h1'); //similar as css (returns fisrt one)
//querySelector 에서는 CSS selector 자체를 전달한다.
//따라서 위와 같이 .(class) , #(id) 와 같이 어떤 Element를 select 할 것인지
//작성해 주어야 한다.

//console.dir(title);

function handleTitleClick() {
  h1.style.color = 'blue';
}

function handleMouseEnter() {
  h1.innerText = 'Mouse is Here!';
}

function handleMouseLeave() {
  h1.innerText = 'Mouse is Gone!';
}

function handleWindowResize() {
  document.body.style.backgroundColor = 'tomato';
}

function handleWindowCopy() {
  alert('copied!');
}

function handleWindowOffline() {
  alert('no wifi!');
}

function handleWindowOnline() {
  alert('wifi connected');
}

h1.addEventListener('click', handleTitleClick); // =title.onclick=handleTitleClick
h1.addEventListener('mouseenter', handleMouseEnter); // =title.onmouseenter=handleMouseEnter
h1.addEventListener('mouseleave', handleMouseLeave); // =title.onmouseleave-handleMouseLeave

//위와 같이 event를 listen 할 수 있는 방법은 두가지 이다. addEventListener와 event 이름 앞에 'on'을
//붙이는 것이다. 나중에 다시 설명하겠지만 두 방법중 addEventListener를 선호하는 이유는
//.removeEventListener를 통해 EventListener를 제거할 수 있기 때문이다.

window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);

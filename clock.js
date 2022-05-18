const clock = document.querySelector('h2#clock');
//interval -> 특정 시간마다 수행할 일

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//setInterval(sayHello, 5000); (함수명, ms)
getClock();
setInterval(getClock, 1000);

//시계에 01,02 와 같은 표시를 위해 padStart(2,"0")을 추가해준다
//뒤에 0을 추가 (10,20)과 같이 표시하기 위해서는 padEnd(2,"0") 사용(뒤에 0을 붙임)
//크리스마스 D-day clock

const christmasClock = document.querySelector('h2');
const myDay = new Date();
const christmasDay = new Date('December 25, 2022 0:00:00');

function getChristmasClock() {}

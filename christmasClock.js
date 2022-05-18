const clock = document.querySelector('h2#clock');

function dayCalculator() {
  const christmasDay = new Date('2022-12-25');
  const myDay = new Date();

  const calculateDate = christmasDay - myDay;

  const Day = String(
    Math.floor(calculateDate / (1000 * 60 * 60 * 24))
  ).padStart(2, '0');
  const Hour = String(
    Math.floor((calculateDate / (1000 * 60 * 60)) % 24)
  ).padStart(2, '0');
  const Min = String(Math.floor((calculateDate / (1000 * 60)) % 60)).padStart(
    2,
    '0'
  );
  const Sec = String(Math.floor((calculateDate / 1000) % 60)).padStart(2, '0');

  clock.innerText = `${Day}d ${Hour}h ${Min}m ${Sec}s`;
}

dayCalculator();
setInterval(dayCalculator, 1000);

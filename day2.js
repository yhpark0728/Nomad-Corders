//day2. #2.1 ~ #2.6

console.log(5454);
console.log('PYH');

const a = 5;
const b = 2;
let myName = 'Yongho'; //Camel Case : JS에서 변수명을 작성하는 방법
//const veryLongVariableName = 0;

console.log(a + b);
console.log(a * b);
console.log(a / b);

console.log('Hello ' + myName); //Hello Yongho

myName = 'ParkYOngHo';

console.log('Hello ' + myName); //Hello ParkYongho

const amIFat = true;
console.log(amIFat);

// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

const daysOfWeek = ['mon', 'tue', 'wed', 'thr', 'fri', 'sat'];
console.log(daysOfWeek[5]); //sat

daysOfWeek.push('sun');

console.log(daysOfWeek);

const player = {
  name: 'Yongho',
  points: 10,
  isDone: true,
};

console.log(player.name);
player['name'] = 'ParkYongho';
console.log(player.name);

player.lastName = 'Park';
console.log(player);

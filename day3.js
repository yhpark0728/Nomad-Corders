function sayHello(nameOfPersonm, age) {
  console.log(
    'Hello my name is ' + nameOfPersonm + " and I'm " + age + ' years old!'
  );
}

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

function divide(a, b) {
  console.log(a / b);
}

alert('hi');
sayHello('Yongho', 32);
plus(8, 60);
divide(60, 4);

const player = {
  name: 'yongho',
  sayHello: function (otherPersonsName) {
    console.log('hello!' + otherPersonsName + ' nice to meet you');
  },
};

console.log(player.name);

//#2.9 Recap
const toBuy = ['potato', 'tomato', 'pizza'];

console.log(toBuy);
toBuy[2] = 'water';
console.log(toBuy);
toBuy.push('meat');
console.log(toBuy);

//#2.10 Recap2
const user = {
  name: 'Parkyongho',
  age: 32,
};

user.name = 'YonghoPark';

console.log(user.name);
console.log(user.age);

user.level = 99;
console.log(user);

function plusFunc(fisrNumb, secondNumb) {
  console.log(fisrNumb + secondNumb);
}

plusFunc(3, 4);

//ex) calculator object
const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },

  minus: function (a, b) {
    console.log(a - b);
  },

  multi: function (a, b) {
    console.log(a * b);
  },

  div: function (a, b) {
    console.log(a / b);
  },

  powerof: function (a, b) {
    console.log(a ** b);
  },
};

calculator.add(10, 5);
calculator.minus(10, 5);
calculator.multi(10, 5);
calculator.div(10, 5);
calculator.powerof(2, 5);

// #2.11 Returns
const age = 32;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);

const calculator2nd = {
  add: function (a, b) {
    return a + b;
  },

  minus: function (a, b) {
    return a - b;
  },

  multi: function (a, b) {
    return a * b;
  },

  div: function (a, b) {
    return a / b;
  },

  powerof: function (a, b) {
    return a ** b;
  },
};

const addResult = calculator2nd.add(10, 5);
const minusResult = calculator2nd.minus(10, 5);
const multiResult = calculator2nd.multi(10, 5);
const divResult = calculator2nd.div(10, 5);
const powerofResult = calculator2nd.powerof(2, 5);

console.log(addResult);
console.log(minusResult);
console.log(multiResult);
console.log(divResult);
console.log(powerofResult);

// #2.13 Conditionals
const myAge = parseInt(prompt('How old are you?'));

console.log(typeof myAge, typeof parseInt('15'));

if (isNaN(myAge)) {
  console.log('Please write a number');
} else {
  console.log('Welcome!');
}

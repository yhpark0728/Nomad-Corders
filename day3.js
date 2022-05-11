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
player.sayHello(lynn);

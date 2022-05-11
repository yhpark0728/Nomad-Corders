## Nomad-Corders VanilaJS Challenge(22.05.09 - 22.05.23)

# Day3 (05.11)

Object 내부에 생성된 함수의 구조에 주의하자.

```javascript
const player = {
  name: 'yongho',
  sayHello: function (otherPersonsName) {
    console.log('hello!' + otherPersonsName + ' nice to meet you');
  },
};

console.log(player.name);
player.sayHello(lynn);
```

// __proto__는 다소 구식이다(브라우저 기준) 따라서 사용하지 않는 것이 좋다.
// 이는 표준에도 명시돼 있는 내용

/**
 * __proto__ 대신 사용할 수 있는 메서드
 * 1) Object.create(proto, [descriptors]): 프로토타입이 proto인 새 객체생성
 * 2) Object.getPrototypeOf(obj) : obj의 프로토타입 가져오기
 * 3) Object.setPrototypeOf(obj, proto) : obj의 프로토타입 제설정
 *
 */

let animal = {
  eats: true,
};

let rabbit = Object.create(animal);

console.log(rabbit.eats); // true
console.log(Object.getPrototypeOf(rabbit) === animal); // true

//과제
//사전에 toString 추가하기

/*내가 짠 코드 */

//let dictionary = Object.create(null);
// dictionary.toString = function () {
//   console.log(this.keys);
//   return this.keys.toString();
// };
// console.log("prototype : ");

/* 정답 */
let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    },
  },
});

// 데이터를 추가합니다.
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__는 여기서 일반적인 프로퍼티 키입니다.

// 반복문에는 apple과 __proto__ 만 있습니다.
for (let key in dictionary) {
  console.log(key); // "apple" 다음 "__proto__"입니다.
}

// toString이 동작하는 부분입니다.
console.log(dictionary); // "apple,__proto__"
//여기 부분 이해가 안돼서 댓글 남김 ..

//여기도 잘 이해가 ㅇ안됨 ...

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

let rabbit2 = new Rabbit("Rabbit");

rabbit2.sayHi(); // Rabbit
Rabbit.prototype.sayHi(); // undefined ??
Object.getPrototypeOf(rabbit2).sayHi(); // undefined
rabbit2.__proto__.sayHi(); // undefined

/**
 * this
 *
 *  js는 Lexical Scope를 사용하기 때문에
 * 함수의 상위 스코프가 정의 시점에 평가된다.
 * *** 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다.
 */

const testFunction = function () {
  return this;
};

console.log(testFunction());
console.log(testFunction() === global);
//일반 함수로 실행하면 this 키워드는 global object가 된다.
//웹에서는 window 객체에 해당

const yuJin = {
  name: "안유진",
  year: 2003,
  sayHello: function () {
    return `안녕하세요 저는 ${this.name}입니다.`;
  },
};

console.log(yuJin.sayHello());

function Person(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `안녕하세요 저는 ${this.name}입니다.`;
  };
}

const yuJin2 = new Person("안유진", 2003);
console.log(yuJin2.sayHello());

//yujin2의 proto는 person.prototype
//따라서 유진2에서 실행 가능
Person.prototype.dance = function () {
  function dance2() {
    return `${this.name}이 춤을 춥니다.`;
  }
  return dance2();
};

console.log(yuJin2.dance()); //undefined

//why? 객체의 메서드로 선언하면 this가 자동으로
//실행하는 대상 객체가 되지만
// 그 외의 위치에 함수를 선언하면
// 함수의 this 는 무조건 global 에 매핑된다.

/**
 * this 키워드가 어떤 걸 가리키냐는 세 가지만 기억하면 된다.
 * 1) 일반 함수 호출할 땐 this 가 최상위 객체(global or window)를 가리킨다.
 * 2) 매서드로 호출할 떈 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해 객체를 생성했을 땐 객체를 가리킨다.
 */

/***
 *  this mapping
 * 1) apply()
 * 2) call()\
 * 3) bind()
 */
function returnName() {
  return this.name;
}

console.log(returnName()); //이때 returnName이 일반 함수니까 this === global

const yuJin3 = {
  name: "안유진",
};

//returnName의 this가 yujin3에 매핑되도록
// returnName이 yujin3의 메소드처럼
console.log(returnName.call(yuJin3));
console.log(returnName.apply(yuJin3));
//둘이 똑같은 기능 그런데 조금 다름

/**
 * 1) call -> 컴마를 기반으로 파라미터를 순서대로 넘겨주고
 * 2) apply -> 아규먼트를 리스트로 입력해야 한다.
 */

function multiply(x, y, z) {
  return `${this.name} / 결과값 : ${x * y * z}`;
}
console.log(multiply.call(yuJin3, 3, 4, 5));
console.log(multiply.apply(yuJin3, [3, 4, 5]));

/**
 * bind() : this를 바인딩만
 */

const laterFunc = multiply.bind(yuJin3, 3, 4, 5);
console.log(laterFunc); //binding only
console.log(laterFunc()); //execute

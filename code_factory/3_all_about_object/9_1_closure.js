/**
 * Closure
 *
 * A Closure is the combination of a function and the lexical environment
 * within which that function was declared
 *
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다"
 *
 * "상위 함수보다 하위 함수가 더 오래 살아있는 경우르 closure라고 한다"
 */

function getNumber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }
  return innerGetNumber();
}

// console.log(getNumber());

//return을 안하면 클로져 ..?

function getNumber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }
  return innerGetNumber;
}

const runner = getNumber();
console.log(runner);
//get number 실행 이후 runner 실행
//그러니까 getNmber가 콜스택에서 사리진 후 runner 실행
console.log(runner());

/**
 * 사용예시
 * 1) 데이터 캐싱
 */

function cacheFunction() {
  //예를들어 바로 아랫줄이 매우 오래걸리는 연산. 근데 함수 실행시마다 필요
  var number = 10 * 10;

  //그럴 떄 이 안에 클로져를 만듦
  function innerCacheFunction(newNumber) {
    return number * newNumber;
  }
  return innerCacheFunction;
}

const runner2 = cacheFunction();
//cacheFunction 내부 number 계산이 한번만 실행됨

console.log(runner2(10));
//innercachefunction만 계산함!!!

/**
 * 2) 반복적으로 특정 값 변환시
 */

function cacheFunction2() {
  var number = 99;
  function increment() {
    number++;
    return number;
  }
  return increment;
}

const runner3 = cacheFunction2();
console.log(runner3); //100
console.log(runner3); //101

/**
 * 3) 정보 은닉
 */

function Idol(name, year) {
  this.name = name;

  var _year = year;

  this.sayNameAndYear = function () {
    return `안녕하세요 저는 ${this.name}, ${_year}에 태어났습니다.`;
  };
}
const yuJin = new Idol("안유진", 2003);
console.log(yuJin.sayNameAndYear());

console.log(yuJin._year); //이건 없어서 undefined
//Idol함수 안의 메소드에서 나중에 가져올 순 있으나 객체의 프로퍼티로 접근은 안됨

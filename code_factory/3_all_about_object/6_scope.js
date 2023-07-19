/**
 * Scope
 */

var numberOne = 20;

function levelOne() {
  console.log(numberOne);
}

levelOne(); // 함수 실행시 함수 밖변수를 접근 가능
// -> 함수 실행 시 상위 스코프를 포함

function levelOne() {
  var numberOne = 40;
  console.log(numberOne);
}

levelOne(); // 40
//왜냐 가장 가까운 스코프의 변수를 가져오기 떄문

//대신 상위 스코픋에서 시행하면 20으로 나옴
console.log(numberOne);

function levelOne() {
  var numberOne = 40;

  function levelTwo() {
    var numberTwo = 99;

    console.log(`levelTwo numberTwo ${numberTwo}`);
    console.log(`levelTwo number One ${numberOne}`);
  }
  levelTwo();
  console.log(`level one numberOne ${numberOne}`);
}

/**
 * js -> lexical scope
 *
 * 선언된 위치가 상위 스코프를 정한다.
 *
 * dynamic scope
 * 실행한 위치가 상위 스코프를 정한다.
 */

var numberThree = 3;

function functionOne() {
  var numberThree = 100;
  functionTwo();
}

function functionTwo() {
  console.log(numberThree);
}

functionOne();
//global scope에서 변수값을 가져옴 아개 lexical scope
//선언된 위치가 상위 스코프를 정한다.
//함수 선언이 글로벌이므로 글로벌에 있는 쓰리르 가져옴?

var i = 999;

for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log(`i in global scope ${i}`); //10 나옴

//var 썻을때 함수 선언시에만 새로운 스코프가 생기는 거지,
// 앞선 999의 i를 0으로 1로 .. 바꾼 거임

i = 999;
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i in global scope ${i}`); //999 나옴
//let , const 키워드는 for loop , while .. 등 블록레벨 스코프를 만들어 낸다.

/**
 * var 키워드는 함수레벨 스코프만 만들어낸다,
 * let,const 키워드는 함수레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */

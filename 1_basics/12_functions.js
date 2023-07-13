//완료

/**
 * function -> 함수
 */

/**
 * 만약 2라는 숫자에 *10 /2 %3 연산을 한 결과를 string으로 변환
 * 반환받고 싶다면 ?
 */

console.log((((2 * 10) / 2) % 3).toString());
console.log((((3 * 10) / 2) % 3).toString());
// 이 계산을 2가 아니라 3으로도 하고 싶다면?

/**
 * DRY
 * D -> don't
 * R -> repeat
 * Y -> yourself
 */

function calculate() {
  console.log((((3 * 10) / 2) % 3).toString());
}

// calculate(); //parameter 안받아서 Nan

//덮어쓰기
function calculate(number) {
  console.log((((number * 10) / 2) % 3).toString());
}

calculate(4);
//number : parameter
// 실제 4라는 값 ; argument

/**
 * 여러개 파라미터를 받는 법
 */

function multiply(x, y) {
  console.log(x * y);
}

multiply(2, 4);

function multiply(x, y = 10) {
  // 기본값 지정
  console.log(x * y);
}

multiply(2); //y는 기본으로 10이 지정된다.

console.log("--------");
/**
 * 실행 후 함수 외부에서 함수 값을 반환받고 싶을 때
 * return 받기
 */

function multiply(x, y) {
  return x * y;
}

const result1 = multiply(2, 4);
console.log(result1);

const result2 = multiply(4, 5);
console.log(result2);

/**
 * Arrow 함수
 * 기능적으로 완전히 같지는 않다
 */

const multiply2 = (x, y) => {
  return x * y;
};

console.log(multiply2(3, 4));

//함수 바디가 한 줄 일 때
const multiply3 = (x, y) => x * y; // 여기가 return이 됨
console.log(multiply3(4, 5));

//이떄 파라미터가 1개면 괄호도 삭제 가능
const mul4 = (x) => x * 2;

const mul5 = (x) => (y) => (z) => `x: ${x} y : ${y} z: ${z}`;
//파라미터를 받는 애는 그 뒤의 함수를 반환, y파라미터 받는 애는 z포함 함수 반환
//z라는 애가 값을 반환
console.log(mul5(2)); // Function(annonymous)
console.log(mul5(2)(5)); // Function(annonymous)
console.log(mul5(2)(5)(7)); //x: 2 y : 5 z: 7

//일반 함수 표현식으로 나타내면 아래 함수와 같다.
function mul6(x) {
  return function (y) {
    return function (z) {
      return `x: ${x} y : ${y} z: ${z}`;
    };
  };
}

const multiplyTwo = () => {};
//이렇게 arrow 함수로 썼는데

const Mul2 = function (x, y) {
  return x, y;
};
//이렇게 일반함수를 const 변수에 담을 수도 있따.

console.log(Mul2(4, 5));

//arguments
const multi3 = function (x, y, z) {
  console.log(arguments);
  return x * y * z;
};

console.log("--------");
console.log(multi3(4, 5, 6));
//[Arguments] { '0': 4, '1': 5, '2': 6 } 를 출력해준다

//파라미터를 무한히 받을 수 있음
//몇개를 입력받았는지 arguments 키워드로 알 수 있다
const multiAll = function (...arguments) {
  return Object.values(arguments).reduce((a, b) => a * b, 1);
  //arguments object내의 값들을 두개씩 쌍으로 받아서
};

console.log(multiAll(2, 3, 4));

//즉시실행함수, 정의하자마자 실행, 함수를 괄호 안에 넣어주면 바로 실행됨
//immediately invoked function
(function (x, y) {
  console.log(x * y);
})(4, 5);

console.log(typeof multiply);
console.log(multiply instanceof Object);
// 좌측이 오른쪽과 같은 타입인지 질문
//함수는 object type

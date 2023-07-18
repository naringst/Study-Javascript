//메서드 f.defer(ms)를 함수에 추가하기

/**
 * 모든 함수의 프로토타입에 ms밀리초 후에 함수를 실행하는 defer(ms)함수를 추가하세요.
함수를 프로토타입에 추가한 이후 아래 코드는 동작해야 합니다.
 */

Object.prototype.defer = function (ms) {
  return setTimeout(this, ms); //여기서 원래 함수는 this로
};
//와우 거의 비슷했으나 object말고 function으로 했어도 됐다

function f() {
  console.log("Hello!");
}

f.defer(3000); // 1초 후 "Hello!" 출력

//데코레이팅 'defer()'를 함수에 추가하기
/**
 * 모든 함수의 프로토타입에 ms 밀리세컨초 지연 호출 래퍼를 반환하는
 *  defer(ms) 메서드를 추가하세요.
아래는 동작예시 입니다.
 */

//잘 모르겠는 내 코드 ..
// Function.prototype.defer = function (ms) {
//   setTimeout(ms);
//   return this;
// };

//답 : 데코레이션 동작을 만들어야 함 ..
Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

function f(a, b) {
  alert(a + b);
}

f.defer(1000)(1, 2); // 1초 후 3을 출력

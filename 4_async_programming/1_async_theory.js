/**
 * Async theory
 */

// function longWork() {
//   const now = new Date();

//   /**
//    * milliseconds since epoch
//    * 1970년도 1월 1일 부터 지금 코드가 실행되는 순간까지의 시간응ㄹ
//    * 밀리초로 반환
//    *
//    * 1000 millisec = 1sec
//    */

//   const milliseconds = now.getTime();
//   const afterTwoSeconds = milliseconds + 2 * 1000;

//   while (new Date().getTime() < afterTwoSeconds) {}

//   console.log("완료");
// }

// console.log("Hello");
// longWork();
// console.log("World");

//위와 같은 코드를 비동기로

function longWork() {
  //setTimeout은 비동기 함수
  setTimeout(() => {
    console.log("완료");
  }, 2000);
}

console.log("Hello");
longWork();
console.log("world");
//hello world 완료

//어떻게? settimeout 만나면 얘가 비동기니까 바로 다음 작업 가능
//그렇게 world를 출력한뒤 완료

/**
 * 자바스크립트는 싱글스레드 언어인데 이게 어떻게 가능할까요?
 * js engine에는 memory heap, callstack이 하나씩 있습니다.
 * 따라서 setTimeout함수도 longWork와 같은 callstack에 쌓이게 됩니다.
 * 그러나 비동기 함수인 setTimeout은 taksqueue/event queue라고 불리는 곳으로
 * 옮겨집니다. 따라서 스레드를 방해하지 않습니다.
 * 그리고 나머지 스레드의 작업을 실행하게 됩니다.
 * 이때, event queue를 바라보고 있는 event loop이라는 게 있는데요
 * 얘는 , 자바스크립트 런타임이 생성되는 순간에 생성되었고 event queue에서의 작업이
 * 완료되었는지 체크하고 있는 애입니다. 그리고 추가로 callstack이 비었는지 확인합니다.
 * 그러다 eventqueue의 비동기 작업이 완료되었는데 콜스택이 비어있다면 이벤트루프가
 * 종료된 함수를 콜스택으로 옮깁니다. 이후 동기로 실행할 작업을 완료하고 실행이 종료됩니다.
 */

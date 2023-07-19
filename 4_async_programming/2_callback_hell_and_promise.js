/**
 * Callback
 *
 */

function waitAndRun() {
  setTimeout(() => {
    console.log("end");
  }, 2000);

  //timeout시간이 지나고 다시 불리는 함수 : 콜백함수
  // 정의되고 바로 실행되는 게 아님
}
// waitAndRun();

function waitAndRun2() {
  setTimeout(() => {
    console.log("1번 콜백 끝");
    setTimeout(() => {
      console.log("2");
      setTimeout(() => {
        console.log("3");
      }, 2000);
    }, 2000);
  }, 2000);
}

// waitAndRun2();

/**
 * 이 콜백헬을 타기하기 위해 등장한 개념 :
 * Promise
 */

const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("완료");
  }, 2000);
});

//res : 리졸브 함수에 넣어준 '완료'라는 값
//resolve가 실행되면 ( 타임아웃 끝나면 then 실행)

// timeoutPromise.then((res) => {
//   console.log("==then==");
//   console.log(res);
// });

//아래 내용은 함수가 프로미스를 반환
// const getPromise = (seconds) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("완료"); //이 값이 then의 res로 간다
//     }, seconds * 1000);
//   });

// getPromise(1) //1초 기다렸다가 first then,
//   .then((res) => {
//     console.log("===first then===");
//     console.log(res);

//     return getPromise(1); //그리고 1초더 기다렸다가 second then
//   })
//   .then((res) => {
//     console.log("---second theb---");
//     console.log(res);
//   });

const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error"); //이 값이 then의 res로 간다
    }, seconds * 1000);
  });

// getPromise(1) //1초 기다렸다가 first then,
//   .then((res) => {
//     console.log("===first then===");
//     console.log(res);

//     return getPromise(1); //그리고 1초더 기다렸다가 second then
//   })
//   .catch((res) => {
//     console.log("---first catch---");
//     console.log(res);
//   })
//   .finally(() => {
//     console.log("---finally");
//   });

// resolve- > then 실행
//reject -> catch 실행

//promise끼리 서로 의존하지 않으면 각각 실행시켜 더 빠르게 가능
Promise.all([getPromise(1), getPromise(2), getPromise(1)]).then((res) => {
  console.log(res);
});

//.all -> static method

/**
 * Async / Await
 */

//resolve

const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("완료");
    }, seconds * 1000);
  });

//await은 promise에만 쓸 수 있다

async function runner() {
  const result1 = await getPromise(1);
  //await 쓰면 얘가 비동기로 실행되어 다른 값을 막지 않는다.

  console.log(result1);
  const result2 = await getPromise(2);
  console.log(result2);
}

//reject
const getPromise2 = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("에러");
    }, seconds * 1000);
  });

async function runner2() {
  try {
    const result1 = await getPromise2(1);
    //await 쓰면 얘가 비동기로 실행되어 다른 값을 막지 않는다.

    console.log(result1);
    const result2 = await getPromise2(2);
    console.log(result2);
  } catch (e) {
    console.log("----catch2----");
    console.log(e);
  } finally {
    console.log("finally-----");
  }
}
runner2();
console.log("실행끝");

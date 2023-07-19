/**
 * try ... catch
 *
 * 1) invoke error -> throw
 * 2) explicitly recognize -> catch
 *
 * */

function runner() {
  try {
    //동작 시키고자 하는 코드
    console.log("Hello");

    //throw new Error("큰 문제가 생겼습니다");
    console.log("Code Factory");
  } catch (e) {
    //error throw -> jump to catch
    console.log("---catch---");
    console.log(e);
  } finally {
    //try에서 에러 났든 안났든 무조건 실행하는 코드
    //throw 문이 없어도 실행된다.
    console.log("---finally---");
  }
}

runner();

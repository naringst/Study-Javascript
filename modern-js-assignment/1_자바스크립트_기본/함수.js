// function , 함수이름 , 괄호안 매개변수 -> 함수 선언

function showMessage() {
  alert("안녕하세요");
  console.log("반갑습니다");
}

//과제 1 "else는 정말 필요한가요?" "
// 함수는 return값을 만나면 바로 값을 반환하고 함수를 끝내기 때문에
// return 이후 로직은 else가 없어도 똑같이 동작한다.

//과제2 함수 다시 작성하기
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("보호자의 동의를 받으셨나요?");
  }
}

//if문을 작성하지 않고 동일 동작 함수 만들기
//1. ?연산자 활용

//2. OR 연산자 활용

//1
function checkAge1(age) {
  return age > 18 ? true : confirm("보호자의 동의를 받으셨나요?");
}

//2 wow
function checkAge2(age) {
  return age > 18 || confirm("보호자의 동의를 받으셨나요?");
}

//min(a,b) 함수 만들기
function min(a, b) {
  return a > b ? b : a;
}
console.log(min(2, 5) == 2);
console.log(min(3, -1) == -1);
console.log(min(1, 1) == 1);

// pow (x,n) 함수 만들기
function pow(x, n) {
  if (n > 1) {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result = result * x;
    }
    return alert(result);
  } else {
    return alert(`${n}은 자연수가 아닙니다. 자연수를 입력하세요!`);
  }
}

let x = prompt("x?");
let n = prompt("n?");
pow(x, n);

// console.log(pow(3, 2));
// console.log(pow(4, 3));
// console.log(pow(4, -1));
// console.log(pow(4, 0));
// console.log(pow(4, "하"));

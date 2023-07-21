// 사이 범위 확인하기

function checkAge(age) {
  if (age >= 14 && age <= 90) {
    return true;
  }
  return false;
}

let age = 30;
console.log(checkAge(100));

//바깥 범위 확인하기

function checkNotAge(age) {
  if (age < 14 || age > 90) {
    return `14세 이상 90세 이하에 속하지 않습니다.`;
  }
  return `14세 이상 90세 이하입니다.`;
}
console.log(checkNotAge(91));

//로그인 구현하기

function login(id) {
  const adminPw = "TheMaster";

  if (id === "Admin") {
    const pw = prompt("비밀번호를 입력하세요");
    if (pw === adminPw) {
      alert("환영합니다!");
    } else if (!pw) {
      alert("취소되었습니다.");
    } else {
      alert("인증에 실패했습니다.");
    }
  }
}

login("Admin");

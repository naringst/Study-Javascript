/**
 * copy by value : 값에 의한 전달,
 * 값만 가져와서 메모리의 새로운 공간에 할당
 * copy by reference : 참조에 의한 전달
 * 메모리의 같은 주소를 참고
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 */

let original = "안녕하세요";
let clone = original;

let originalObj = {
  이름: "정나리",
};
cloneObj = originalObj;
// 객체는 (3)이라는 주소의 메모리 공간을 할당받아 존재한다.
// originalObj라는 객체를 담은 변수는 객체의 주소(3)를 값으로 가지고 있는다.
// 따라서 originalObj는 객체를 가리키는 포인터 처럼
// 새로운 메모리 공간에 객체의 주소를 가지고 있는다.
// 이를 copy by reference로 복사한 cloneObj는
// original과 같이 새로운 메모리 공간을 할당받고 ,
//그 안에 (3)이라는 원본 객체의 주소를 갖고 있는다.
//따라서 하나의 값이 원본 객체의 값을 바꾸면 모두 바뀐다.

//예제
const yuJin1 = {
  name: "안유진",
  group: "아이브",
};
const yuJin2 = yuJin1;

const yuJin3 = {
  name: "안유진",
  group: "아이브",
};

console.log(yuJin1 === yuJin2); //true
console.log(yuJin1 === yuJin3); //false
console.log(yuJin2 === yuJin3); //false

/**
 * spread operator
 * array 뿐 아니라 object에도 존재한다.
 */

const yuJin4 = {
  ...yuJin3,
}; //이는 새로 값을 만들기 떄문에 copy by value
console.log(yuJin4);

const yuJin5 = {
  year: 2003,
  ...yuJin3,
};

console.log(yuJin5);

const yuJin6 = {
  name: "코드팩토리",
  ...yuJin3, //이게 뒤에오면 덮어쓴다.
};

console.log(yuJin6);

//spread연산자는 배열에서도 앞에 넣으면 앞에 추가, 뒤에 넣으면 뒤에 추가

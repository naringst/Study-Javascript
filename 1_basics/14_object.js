//

/**
 * Object / 객체
 */

//key : value pair
//object 내 함수를 method 라고 한다.
let yuJin = {
  name: "안유진",
  group: "아이브",
  dance: function () {
    return "안유진이 춤을 춥니다.";
  },
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin["name"]);

const key = "name";
console.log(yuJin[key]);

console.log(yuJin.dance());
//dance is a function so we need to execute : ()

//같은 객체 내 값을 가져오는 법?

let yuJin2 = {
  name: "안유진",
  group: "아이브",
  dance: function () {
    return `${this.name} 이 춤을 춥니다.`;
  },
};

//이 때 this는 현재 각체를 가리킴.

const nameKey = "name";
const nameValue = "안유진";

const groupKey = "group";
const groupValue = "아이브";

//key 값을 변수로 가지고 있다면 [nameKey] 형식으로 쓸 수 있다.
const yuJin3 = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  dance: function () {
    return `${this.name}이 춤을 춥니다.`;
  },
};

console.log(yuJin3);

yuJin3["group"] = "코드팩토리";
console.log(yuJin3);

//없는 키값과 밸류를 넣으면 새로 생긴다
yuJin3["englishName"] = "An yu jin";
console.log(yuJin3);
//delete 로 삭제
delete yuJin3["englishName"];
console.log(yuJin3);

//어 근데 const로 썼는데 왜 값을 바꿔도 오류가 안나지>?

/**
 * 객체의 특징
 * 1) const로 선언 시 객체 자체는 변경 불가
 * 2) 그러나 객체 안의 프로퍼티나 메서드는 변경가능
 */

// yuJin3 = {}; //이건 에러
//TypeError: Assignment to constant variable.

/**
 * 모든 키 값 다 가져오기
 */

console.log(Object.keys(yuJin3));

console.log(Object.values(yuJin3));

const name = "안유진";

//새로 새인 문법
const yu = {
  name: name, // name하나만 친것과 같음
};

console.log(yu);

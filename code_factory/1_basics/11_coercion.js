//완료

/**
 * 타입 변환
 * Type Conversion
 *
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

//명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

let test = age + "";
console.log(typeof test, test);

console.log("98" + 2); // 982
console.log("98" * 2); //196, string에 곱한다는 개념이 없으니 number로
console.log("98" - 2); // 96 , 위와 같다

/**
 * 명시적 변환 더  배우기
 */

console.log(typeof (99).toString(), (99).toString());
console.log(typeof true.toString(), true.toString());
console.log(typeof Infinity.toString(), Infinity.toString());

//숫자타입으로 변환
console.log(typeof parseInt("0"), parseInt("0"));
console.log(typeof parseFloat("0.99"), parseFloat("0.99"));
console.log(typeof +"1", +"1"); //number 1

/**
 * boolean 타입으로의 변환
 */

console.log(!"x"); // false
console.log(!!"x"); // true

console.log(!!"ㅇㅇ"); //string 값은 true
console.log(!!""); //string 값 없으면 false

console.log(!!0); //0은 false
console.log(!!"0"); //0이라는 스트링은 true
console.log(!!"false"); // 이것도 글자니까 true
console.log(!!undefined); // false, null도 false
//숫자 0, 값이 없을 떄, null, unde .. 이면 false

console.log(!!{}); // object, array는 무조건 true

/** false
 * 1) 아무 글자도 없는 string
 * 2) 값이 없는 경우
 * 3) 0
 *
 */

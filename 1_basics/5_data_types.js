/**
 * Data Types
 *
 * 여섯개의 Primitive Type(가장 작은 단위)과
 * 한 개의 오브젝트 타입이 있다.
 *
 * 1) Number(숫자)
 * 2) String(문자열)
 * 3) Boolean(불리언)
 * 4) undefined
 * 5) null(널)
 * 6) Symbol(심볼)
 *
 * 7) Object(객체)
 *  Function
 *  Array
 *  Object
 */

const age = 32;
const temperature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);
console.log("----------");

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log("----------");

/**
 * String 타입
 */
const codefactory = '"코"드팩토리'; // 작은 따옴표 안 큰따옴표를 넣어야 문자로 인식
console.log(codefactory);
console.log(typeof codefactory);

const ive = "'아이브' 안유진";
console.log(ive);

/**
 * Template Literal : Escaping Character를 대신
 *
 * Escaping Character
 * 1) new line -> \n
 * 2) tab ->\t
 * 3) 백슬래쉬를 스트링으로 표현하고 싶다면 두 번 입력
 */

const iveYuJin = "아이브\n안유진";
console.log(iveYuJin);

// 하지만 template literal을 사용하면 걍 다 가능
const iveWonYoung2 = `아이브
장원영`;
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2); // String

const groupName = "아이브";
console.log(groupName + "안유진");
console.log(`${groupName} 안유진`);

/**
 * Symbol 타입
 *
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 원시값과 다르게 Symbol함수를 호출해 사용한다.
 */

const test1 = "1";
const test2 = "2";
const test3 = "1";
console.log(test1 === test2); //false
console.log(test1 === test3); //true 담긴 값이 같으니 같다고 나온다.

const symbol1 = Symbol("1");
const symbol2 = Symbol("1");
console.log(symbol1 === symbol2); //false
//값은 보존되지만 유일무이하므로 다르게 여겨진다.

/**
 * Object 타입 (null도 object)
 *
 * Map
 * 키:밸류의 쌍으로 이뤄져있다.
 * key : value
 */

const dictionary = {
  red: "빨강",
};

console.log(dictionary);
console.log(dictionary["red"]);
console.log(typeof dictionary);

/**
 * Array 타입
 *
 * 값을 리스트로 나열할 수 있는 타입
 */

const iveMembersArray = ["유진", "가을", "레이", "장원영", "리즈", "이서"];
console.log(iveMembersArray);

console.log(iveMembersArray[0]);
iveMembersArray[0] = "codefactory";
console.log(iveMembersArray);
console.log(typeof iveMembersArray);

//타잉ㅂ과 관계없이 const, let 을 사용할 수 있었다

/**
 *static typing -> 변수 선언 시 어떤 타입의 변수를 선언할 지 명시

 *dynamic typng  -> 변수 선언 시 타입을 명시적으로 선언하지 않고 타입을 '추론'
 */

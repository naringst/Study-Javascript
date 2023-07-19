/**
 * Hoisting
 */

console.log("Hello");
console.log("World");

console.log(name); //undefined
var name = "코드팩토리";
console.log(name);

/**
 * hoisting은 무엇인가?
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */

//let , const도 호이스팅 된다. 하지만 에러가 난다.

console.log(yuJin); //에러 :  Cannot access 'yuJin' before initialization
let yuJin = "안유진";

//하지만 실제로 없는 값이라면
// console.log(yu); // yu is not defined

//let, const를 사용해 미리 호이스팅되어 값을 가져오는 버그를 방지 가능
